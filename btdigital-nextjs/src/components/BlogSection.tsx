'use client';

import Link from 'next/link';

const blogPosts = [
  {
    id: 'navigate-lock-in-complexities',
    title: 'Navigate lock-in complexities with Gribeauval\'s innovation mindset',
    excerpt: 'Balance utility and switching costs for strategic tech decisions.',
    date: 'June 23, 2024',
    slug: 'navigate-lock-in-complexities-with-gribeauvals-innovation-mindset'
  },
  {
    id: 'open-source-software-smes',
    title: 'Open Source means Open Opportunities: Why SMEs Are Switching',
    excerpt: 'Unlock Growth with Open Source: An overview of why savvy small to medium enterprises are embracing this strategy, not just for cost savings but for a world of new opportunities.',
    date: 'June 13, 2024',
    slug: 'open-source-software-for-smes'
  },
  {
    id: 'navigating-digital-transformation',
    title: 'Navigating the Digital Transformation: The Critical Role of Traditional IT Services',
    excerpt: 'Traditional IT services are essential for businesses navigating digital transformation. They ensure seamless remote work, enhance security, optimize cloud infrastructure, and support Microsoft 365 adoption.',
    date: 'June 5, 2024',
    slug: 'navigating-digital-transformation'
  },
  {
    id: 'role-of-apps-integrations-automation',
    title: 'Applications, Integrations, and Automation in Modern Business',
    excerpt: 'Applications, integrations, and automation services optimize business operations by enhancing efficiency, scalability, and data flow while reducing manual tasks and increasing accuracy.',
    date: 'June 5, 2024',
    slug: 'role-of-apps-integrations-and-automation'
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Blog Space
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-background-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border">
              <div className="h-48 bg-background-tertiary flex items-center justify-center border-b border-border">
                <span className="text-foreground-muted">📝</span>
              </div>
              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{post.date}</p>
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-foreground-secondary text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
