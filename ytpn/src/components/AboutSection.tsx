'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-background-secondary rounded-lg p-8 aspect-video flex items-center justify-center border border-border overflow-hidden">
              <Image
                src="assets/images/team.png"
                alt="Our Team"
                width={500}
                height={281}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">
              What we are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              A technological partner for Growing Businesses
            </h2>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              We specialise in helping small to medium technical businesses build and manage their technology and digital processes, such that reporting, operating and decision making is easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
