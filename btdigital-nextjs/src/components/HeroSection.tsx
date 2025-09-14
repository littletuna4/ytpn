'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-background flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Put Your Technology and Data First
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              Let us help take care of your technology and data processes so that you can save time, make informed decisions and improve your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="tel:+61487631858" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                Contact
              </Link>
              <Link 
                href="#process" 
                className="text-primary hover:text-primary/80 px-8 py-4 font-semibold transition-colors text-center"
              >
                See our Process
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <div className="bg-background-secondary rounded-lg p-8 aspect-square flex items-center justify-center border border-border">
                <span className="text-foreground-muted text-lg">Hero Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
