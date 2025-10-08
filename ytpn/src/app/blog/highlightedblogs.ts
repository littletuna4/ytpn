/**
 * Highlighted Blog Posts Configuration
 * 
 * Functional Requirements:
 * - Define featured blog posts for homepage display
 * - Map blog posts to their corresponding hero images
 * - Provide structured data for BlogSection component
 * - Support responsive image display and SEO optimization
 * - Maintain consistent data structure for easy maintenance
 */

export interface HighlightedBlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imagePath: string;
  imageAlt: string;
  featured: boolean;
  readingTime: number;
  tags: string[];
}

export const highlightedBlogPosts: HighlightedBlogPost[] = [
  {
    id: 'navigate-lock-in-complexities',
    title: 'Navigate lock-in complexities with Gribeauval\'s innovation mindset',
    excerpt: 'Balance utility and switching costs for strategic tech decisions.',
    date: 'June 23, 2024',
    slug: 'navigate-lock-in-complexities-with-gribeauvals-innovation-mindset',
    imagePath: '/assets/blog/browser.png',
    imageAlt: 'Browser interface representing innovation and strategic technology decisions',
    featured: true,
    readingTime: 12,
    tags: ['technology', 'innovation', 'strategy', 'vendor-lock-in']
  },
  {
    id: 'open-source-software-smes',
    title: 'Open Source means Open Opportunities: Why SMEs Are Switching',
    excerpt: 'Unlock Growth with Open Source: An overview of why savvy small to medium enterprises are embracing this strategy, not just for cost savings but for a world of new opportunities.',
    date: 'June 13, 2024',
    slug: 'open-source-software-for-smes',
    imagePath: '/assets/blog/open-source-opportunities.gif',
    imageAlt: 'Open source opportunities animation showing growth and collaboration',
    featured: true,
    readingTime: 15,
    tags: ['open-source', 'SME', 'technology', 'business-strategy']
  },
  {
    id: 'navigating-digital-transformation',
    title: 'Navigating the Digital Transformation: The Critical Role of Traditional IT Services',
    excerpt: 'Traditional IT services are essential for businesses navigating digital transformation. They ensure seamless remote work, enhance security, optimize cloud infrastructure, and support Microsoft 365 adoption.',
    date: 'June 5, 2024',
    slug: 'navigating-digital-transformation',
    imagePath: '/assets/blog/support.png',
    imageAlt: 'IT support and digital transformation services illustration',
    featured: false,
    readingTime: 8,
    tags: ['digital-transformation', 'IT-services', 'technology', 'business']
  },
  {
    id: 'role-of-apps-integrations-automation',
    title: 'Applications, Integrations, and Automation in Modern Business',
    excerpt: 'Applications, integrations, and automation services optimize business operations by enhancing efficiency, scalability, and data flow while reducing manual tasks and increasing accuracy.',
    date: 'June 5, 2024',
    slug: 'role-of-apps-integrations-and-automation',
    imagePath: '/assets/blog/web-programming.png',
    imageAlt: 'Web programming and application development illustration',
    featured: false,
    readingTime: 6,
    tags: ['applications', 'integrations', 'automation', 'business-efficiency']
  }
];

/**
 * Get featured blog posts only
 */
export const getFeaturedBlogPosts = (): HighlightedBlogPost[] => {
  return highlightedBlogPosts.filter(post => post.featured);
};

/**
 * Get all highlighted blog posts
 */
export const getAllHighlightedBlogPosts = (): HighlightedBlogPost[] => {
  return highlightedBlogPosts;
};

/**
 * Get blog post by slug
 */
export const getBlogPostBySlug = (slug: string): HighlightedBlogPost | undefined => {
  return highlightedBlogPosts.find(post => post.slug === slug);
};
