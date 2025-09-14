import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  // Enable static export for static site hosting
  output: 'export',
  
  // Configure custom output directory for static export
  distDir: '../docs',
  
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
  
  // // Configure asset prefix for GitHub Pages deployment
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/btdigital.com.au' : '',
  
  // Configure page extensions to include MDX files
  pageExtensions: ['js', 'jsx', 'md','mdx', 'ts', 'tsx'],
  
  // Disable ESLint during build for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable TypeScript type checking during build for static export
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
