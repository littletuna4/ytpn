'use client';

import Link from 'next/link';
import Image from 'next/image';
export default function HeroSection() {
  return (
    <section className="min-h-screen bg-background flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Young Technical Professionals Network
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              We are a network of thinkers and builders who are passionate about technical problems and want to solve them together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/events" 
                className="text-primary hover:text-primary/80 px-8 py-4 font-semibold transition-colors text-center"
              >
                Events
              </Link>
              <Link 
                href="/reps" 
                className="text-primary hover:text-primary/80 px-8 py-4 font-semibold transition-colors text-center"
              >
                Reps
              </Link>
              <Link 
                href="/sponsors" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                Sponsors
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <div className="bg-background-secondary rounded-lg p-8 aspect-square flex items-center justify-center border border-border">
                <Image
                  src="assets/images/hero.png"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  priority  
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
