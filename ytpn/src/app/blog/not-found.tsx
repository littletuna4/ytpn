/**
 * Blog Not Found Page
 * 
 * Functional Requirements:
 * - Display a 404-style message when a blog post is not found
 * - Render the BlogSection component to show available blog posts
 * - Provide navigation back to the main site
 * - Maintain consistent styling with the blog layout
 */

import Link from 'next/link';
import BlogSection from '@/components/BlogSection';

export default function BlogNotFoundPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 404 Header Section */}
        <div className="text-center py-16">
          <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Post Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            The blog post you&apos;re looking for doesn&apos;t exist or may have been moved. 
            Check out our latest blog posts below or return to our main site.
          </p>
          
          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              ← Back to Home
            </Link>
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>

        {/* Blog Section Component */}
        <div className="mt-16">
          <BlogSection />
        </div>
      </div>
    </div>
  );
}
