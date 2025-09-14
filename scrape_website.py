#!/usr/bin/env python3
"""
Website scraper for https://bandtdigital.webflow.io/
Downloads the website and all its assets as static HTML files.
"""

import os
import re
import requests
from urllib.parse import urljoin, urlparse, unquote
from bs4 import BeautifulSoup
import time
from pathlib import Path


class WebsiteScraper:
    def __init__(self, base_url, output_dir="scraped_site"):
        self.base_url = base_url
        self.output_dir = Path(output_dir)
        self.session = requests.Session()
        self.session.headers.update(
            {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
        )
        self.downloaded_files = set()
        self.asset_mappings = {}
        self.pages_to_scrape = set()
        self.scraped_pages = set()

        # Clear any existing scraped pages to force re-scraping
        self.scraped_pages.clear()

        # Create output directory
        self.output_dir.mkdir(exist_ok=True)

    def is_same_domain(self, url):
        """Check if URL is from the same domain"""
        parsed_url = urlparse(url)
        parsed_base = urlparse(self.base_url)
        return parsed_url.netloc == parsed_base.netloc or parsed_url.netloc == ""

    def should_download_asset(self, url):
        """Determine if we should download this asset"""
        parsed_url = urlparse(url)

        # Always download assets from the same domain
        if self.is_same_domain(url):
            return True

        # Download common CDN assets that are likely to be important
        cdn_domains = [
            "cdn.prod.website-files.com",
            "fonts.googleapis.com",
            "fonts.gstatic.com",
            "ajax.googleapis.com",
        ]

        return parsed_url.netloc in cdn_domains

    def get_local_path(self, url):
        """Convert URL to local file path"""
        parsed_url = urlparse(url)
        path = parsed_url.path

        if not path or path == "/":
            return "index.html"

        # Remove leading slash and decode URL
        path = unquote(path.lstrip("/"))

        # For CDN assets, create a more organized structure
        if parsed_url.netloc in [
            "cdn.prod.website-files.com",
            "fonts.googleapis.com",
            "fonts.gstatic.com",
            "ajax.googleapis.com",
        ]:
            # Create a subdirectory for CDN assets
            domain_name = parsed_url.netloc.replace(".", "_")
            if not path.startswith(domain_name):
                path = f"{domain_name}/{path}"

        # If it's a directory, add index.html
        if path.endswith("/"):
            path += "index.html"
        elif "." not in os.path.basename(path):
            path += "/index.html"

        return path

    def download_file(self, url, local_path):
        """Download a file and save it locally"""
        if url in self.downloaded_files:
            return local_path

        try:
            print(f"Downloading: {url}")
            response = self.session.get(url, timeout=30)
            response.raise_for_status()

            # Create directory if needed
            full_path = self.output_dir / local_path
            full_path.parent.mkdir(parents=True, exist_ok=True)

            # Write file
            with open(full_path, "wb") as f:
                f.write(response.content)

            self.downloaded_files.add(url)
            print(f"Saved: {full_path}")
            return local_path

        except Exception as e:
            print(f"Error downloading {url}: {e}")
            return None

    def process_html(self, html_content, base_url):
        """Process HTML content and update asset URLs"""
        soup = BeautifulSoup(html_content, "html.parser")

        # Process different types of assets
        asset_tags = [
            ("link", "href"),  # CSS files
            ("script", "src"),  # JavaScript files
            ("img", "src"),  # Images
            ("img", "data-src"),  # Lazy loaded images
            ("source", "src"),  # Video/audio sources
            ("video", "src"),  # Video files
            ("audio", "src"),  # Audio files
        ]

        for tag_name, attr_name in asset_tags:
            for tag in soup.find_all(tag_name):
                if tag.get(attr_name):
                    original_url = tag[attr_name]
                    absolute_url = urljoin(base_url, original_url)

                    if self.should_download_asset(absolute_url):
                        local_path = self.get_local_path(absolute_url)
                        downloaded_path = self.download_file(absolute_url, local_path)

                        if downloaded_path:
                            # Update the attribute to point to local file
                            tag[attr_name] = downloaded_path
                            self.asset_mappings[absolute_url] = downloaded_path

        # Process inline styles for background images
        for tag in soup.find_all(style=True):
            style = tag["style"]
            # Find background-image URLs
            bg_pattern = r'background-image:\s*url\(["\']?([^"\']+)["\']?\)'
            matches = re.findall(bg_pattern, style)

            for match in matches:
                absolute_url = urljoin(base_url, match)
                if self.should_download_asset(absolute_url):
                    local_path = self.get_local_path(absolute_url)
                    downloaded_path = self.download_file(absolute_url, local_path)

                    if downloaded_path:
                        # Replace URL in style
                        new_style = style.replace(match, downloaded_path)
                        tag["style"] = new_style

        # Find and collect internal links for later scraping
        self.collect_internal_links(soup, base_url)

        # Update internal links to point to local files
        self.update_internal_links(soup, base_url)

        # Fix asset paths to be relative to root
        self.fix_asset_paths_for_subpages(soup, base_url)

        # Fix character encoding issues (disabled for now)
        # self.fix_character_encoding(soup)

        return str(soup)

    def collect_internal_links(self, soup, base_url):
        """Collect internal links from the page for later scraping"""
        links_found = 0
        for link in soup.find_all("a", href=True):
            href = link["href"]
            absolute_url = urljoin(base_url, href)

            # Only collect links from the same domain
            if (
                self.is_same_domain(absolute_url)
                and absolute_url not in self.scraped_pages
            ):
                self.pages_to_scrape.add(absolute_url)
                links_found += 1

        print(f"Found {links_found} internal links to scrape")

    def update_internal_links(self, soup, base_url):
        """Update internal links to point to local files"""
        for link in soup.find_all("a", href=True):
            href = link["href"]
            absolute_url = urljoin(base_url, href)

            # Update internal links to point to local files
            if self.is_same_domain(absolute_url):
                local_path = self.get_page_local_path(absolute_url)
                # If we're in a subdirectory, make links relative to root
                current_page_path = self.get_page_local_path(base_url)
                depth = current_page_path.count("/")
                if depth > 0 and local_path == "index.html":
                    relative_prefix = "../" * depth
                    link["href"] = relative_prefix + local_path
                else:
                    link["href"] = local_path

    def fix_asset_paths_for_subpages(self, soup, base_url):
        """Fix asset paths in subpages to be relative to root directory"""
        # Get the current page's depth (how many directories deep it is)
        current_page_path = self.get_page_local_path(base_url)
        depth = current_page_path.count("/")

        # If we're in a subdirectory, we need to add "../" to asset paths
        if depth > 0:
            relative_prefix = "../" * depth

            # Fix asset paths in various tags
            asset_tags = [
                ("link", "href"),  # CSS files
                ("script", "src"),  # JavaScript files
                ("img", "src"),  # Images
                ("img", "data-src"),  # Lazy loaded images
                ("source", "src"),  # Video/audio sources
                ("video", "src"),  # Video files
                ("audio", "src"),  # Audio files
            ]

            for tag_name, attr_name in asset_tags:
                for tag in soup.find_all(tag_name):
                    if tag.get(attr_name):
                        current_path = tag[attr_name]
                        # Only fix paths that start with our asset directories
                        if (
                            current_path.startswith("cdn_prod_website-files_com/")
                            or current_path.startswith("ajax_googleapis_com/")
                            or current_path.startswith("fonts_googleapis_com/")
                            or current_path.startswith("fonts_gstatic_com/")
                        ):
                            tag[attr_name] = relative_prefix + current_path

    def fix_character_encoding(self, soup):
        """Fix common character encoding issues in HTML content"""
        # More comprehensive character encoding fixes
        char_fixes = {
            "â": "'",  # Left single quotation mark
            "â": "'",  # Right single quotation mark
            "â": '"',  # Left double quotation mark
            "â": '"',  # Right double quotation mark
            "â": "–",  # En dash
            "â": "—",  # Em dash
            "â": "…",  # Horizontal ellipsis
            "â": "€",  # Euro sign
            "â": "£",  # Pound sign
            "â": "©",  # Copyright sign
            "â": "®",  # Registered sign
            "â": "™",  # Trade mark sign
            "â": "°",  # Degree sign
            "â": "±",  # Plus-minus sign
            "â": "×",  # Multiplication sign
            "â": "÷",  # Division sign
            "â": "¼",  # Vulgar fraction one quarter
            "â": "½",  # Vulgar fraction one half
            "â": "¾",  # Vulgar fraction three quarters
            "¾": "d",  # Fix the specific issue mentioned
            "": "'",  # Another apostrophe variant
            "": "'",  # Another apostrophe variant
            "": '"',  # Another quote variant
            "": '"',  # Another quote variant
        }

        # Get all text content and fix encoding issues
        for element in soup.find_all(string=True):
            if element.parent.name not in ["script", "style"]:
                original_text = element
                fixed_text = original_text
                for bad_char, good_char in char_fixes.items():
                    fixed_text = fixed_text.replace(bad_char, good_char)
                if fixed_text != original_text:
                    element.replace_with(fixed_text)

    def get_page_local_path(self, url):
        """Get local file path for a page URL"""
        parsed_url = urlparse(url)
        path = parsed_url.path

        if not path or path == "/":
            return "index.html"

        # Remove leading slash and decode URL
        path = unquote(path.lstrip("/"))

        # If it's a directory or doesn't have an extension, add index.html
        if path.endswith("/") or "." not in os.path.basename(path):
            if not path.endswith("/"):
                path += "/"
            path += "index.html"

        return path

    def scrape_page(self, url):
        """Scrape a single page"""
        try:
            print(f"Scraping page: {url}")
            response = self.session.get(url, timeout=30)
            response.raise_for_status()

            # Process HTML content
            processed_html = self.process_html(response.text, url)

            # Get local path for this page
            local_path = self.get_page_local_path(url)
            full_path = self.output_dir / local_path

            # Create directory if needed
            full_path.parent.mkdir(parents=True, exist_ok=True)

            # Save page
            with open(full_path, "w", encoding="utf-8") as f:
                f.write(processed_html)

            print(f"Page saved: {full_path}")
            self.scraped_pages.add(url)
            return True

        except Exception as e:
            print(f"Error scraping page {url}: {e}")
            return False

    def scrape(self):
        """Main scraping function"""
        print(f"Starting to scrape: {self.base_url}")

        # Start with the main page
        self.pages_to_scrape.add(self.base_url)

        # Scrape all pages
        while self.pages_to_scrape:
            url = self.pages_to_scrape.pop()
            if url not in self.scraped_pages:
                self.scrape_page(url)

        print(f"\nScraping completed!")
        print(f"Files saved to: {self.output_dir.absolute()}")
        print(f"Total files downloaded: {len(self.downloaded_files)}")
        print(f"Total pages scraped: {len(self.scraped_pages)}")

        return True


def main():
    url = "https://bandtdigital.webflow.io/"
    scraper = WebsiteScraper(url)
    scraper.scrape()


if __name__ == "__main__":
    main()
