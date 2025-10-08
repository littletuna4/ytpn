import React from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  published: boolean;
  featured?: boolean;
  readingTime?: number;
  seoTitle?: string;
  seoDescription?: string;
  Content: React.ComponentType;
}

// Static registry of blog posts for static export compatibility
const BLOG_POSTS_REGISTRY = [
  'navigating-digital-transformation',
  'navigate-lock-in-complexities-with-gribeauvals-innovation-mindset',
  'open-source-software-for-smes',
  'role-of-apps-integrations-and-automation'
] as const;

export function getAllPosts(): BlogPost[] {
  const allPostsData = BLOG_POSTS_REGISTRY
    .map((slug) => {
      try {
        // Import metadata from individual metadata file
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { blogPostMetadata } = require(`@/app/blog/${slug}/metadata.ts`);
        
        // Only process published posts
        if (!blogPostMetadata.published) {
          return null;
        }

        // Dynamically import the MDX component
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { default: Content } = require(`@/app/blog/${slug}/page.mdx`);
        
        return {
          ...blogPostMetadata,
          Content,
        };
      } catch (error) {
        console.error(`Error loading post ${slug}:`, error);
        return null;
      }
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allPostsData;
}

export function getPostBySlug(slug: string): BlogPost | null {
  // Check if the slug exists in our registry
  if (!BLOG_POSTS_REGISTRY.includes(slug as typeof BLOG_POSTS_REGISTRY[number])) {
    return null;
  }

  try {
    // Import metadata from individual metadata file
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { blogPostMetadata } = require(`@/app/blog/${slug}/metadata.ts`);
    
    if (!blogPostMetadata || !blogPostMetadata.published) {
      return null;
    }

    // Dynamically import the MDX component
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { default: Content } = require(`@/app/blog/${slug}/page.mdx`);

    return {
      ...blogPostMetadata,
      Content,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

/**
 * Get featured blog posts
 */
export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured);
}

/**
 * Get all unique tags from published posts
 */
export function getAllUniqueTags(): string[] {
  const allPosts = getAllPosts();
  const allTags = allPosts.flatMap((post) => post.tags);
  return Array.from(new Set(allTags)).sort();
}
