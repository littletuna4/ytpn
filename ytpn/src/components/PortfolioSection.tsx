'use client';

import Link from 'next/link';
import Image from 'next/image';
const portfolioItems = [
  {
    title: 'Pro-Test Website',
    description: 'A comprehensive testing platform website',
    url: 'https://protest-e976a7.webflow.io/'
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Our Web Design Portfolio
        </h2>
        <div className="max-w-4xl mx-auto">
          {portfolioItems.map((item) => (
            <div key={item.title} className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-primary">→</span>
                </div>
                <p className="text-foreground-secondary mb-4">{item.description}</p>
                <div className="h-48 bg-background-secondary rounded-lg flex items-center justify-center border border-border">
                  <span className="text-foreground-muted"><Image src="/assets/portfolio/pt-webflow.gif" alt="Portfolio Image" width={1000} height={1000} priority /></span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
