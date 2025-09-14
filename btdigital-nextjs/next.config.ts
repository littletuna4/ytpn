import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  // Enable static export for static site hosting
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Configure trailing slash for better static hosting compatibility
  trailingSlash: true,
  
  // Disable server-side features for static export
  experimental: {
    // Add any experimental features here if needed
  },
  
  // Configure asset prefix if deploying to a subdirectory
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  
  // Configure page extensions to include MDX files
  pageExtensions: ['js', 'jsx', 'md','mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
