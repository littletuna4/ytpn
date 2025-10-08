'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Experience a smarter way to do business.
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Get support from people who understand your business.
        </p>
        <Link 
          href="tel:+61487631858" 
          className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
        >
          Get in Contact
        </Link>
      </div>
    </section>
  );
}
