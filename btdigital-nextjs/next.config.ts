import type { NextConfig } from "next";

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
};

export default nextConfig;
