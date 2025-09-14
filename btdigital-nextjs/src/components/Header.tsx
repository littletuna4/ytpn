'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SimpleThemeToggle } from './ui/SimpleThemeToggle';

export default function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="B&T Digital"
                width={220}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2">
              <Image
                src="/phone.svg"
                alt="Phone"
                width={20}
                height={20}
                className="text-foreground-secondary"
              />
              <Link 
                href="tel:+61487631858" 
                className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
              >
                +61 487 631 858
              </Link>
            </div>
            <SimpleThemeToggle />
            <Link 
              href="mailto:b.israela@outlook.com" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
