'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getAllHighlightedBlogPosts, type HighlightedBlogPost } from '@/app/blog/highlightedblogs';

/**
 * Blog Section Component
 * 
 * Functional Requirements:
 * - Display featured blog posts from highlightedblogs.ts
 * - Show blog post images with proper alt text and responsive sizing
 * - Provide reading time and publication date information
 * - Support hover effects and smooth transitions
 * - Maintain responsive grid layout for different screen sizes
 * - Link to individual blog post pages
 */

export default function BlogSection() {
  const blogPosts = getAllHighlightedBlogPosts();

  return (
    <section id="blog" className="py-4 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Featured Blogs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post: HighlightedBlogPost) => (
            <article key={post.id} className="bg-background-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border">
              <div className="h-48 relative overflow-hidden border-b border-border">
                <Image
                  src={post.imagePath}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-primary font-semibold">{post.date}</p>
                  <p className="text-xs text-foreground-muted">{post.readingTime} min read</p>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-foreground-secondary text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-background-tertiary text-foreground-muted px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-primary hover:text-primary/80 font-semibold text-sm transition-colors inline-flex items-center gap-1"
                >
                  Read More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
