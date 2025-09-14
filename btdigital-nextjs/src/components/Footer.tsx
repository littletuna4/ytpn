'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SimpleThemeToggle } from './ui/SimpleThemeToggle';

export default function Footer() {

  return (
    <footer className="bg-background-tertiary text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded mr-3"></div>
              <span className="text-xl font-bold text-foreground">B&T Digital</span>
            </div>
            <p className="text-foreground-secondary mb-4">
              B&T is an Australian technology service provider.
            </p>
            <Link 
              href="mailto:contact@btdigital.com.au" 
              className="flex items-center text-foreground-secondary hover:text-foreground transition-colors mb-4"
            >
              <span className="mr-2">📧</span>
              contact@btdigital.com.au
            </Link>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/bandtconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <span className="text-xl">📘</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/bandt-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <span className="text-xl">💼</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">About Us</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-foreground-secondary hover:text-foreground transition-colors">Company</Link>
              <Link href="/blog" className="block text-foreground-secondary hover:text-foreground transition-colors">Blog</Link>
              <Link href="/news" className="block text-foreground-secondary hover:text-foreground transition-colors">News</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            <div className="space-y-2">
              <Link href="/services/traditional-it" className="block text-foreground-secondary hover:text-foreground transition-colors">Traditional IT</Link>
              <Link href="/services/applications" className="block text-foreground-secondary hover:text-foreground transition-colors">Applications & Integrations</Link>
              <Link href="/services/surveillance" className="block text-foreground-secondary hover:text-foreground transition-colors">Integrated Surveillance</Link>
              <Link href="/services/asset-management" className="block text-foreground-secondary hover:text-foreground transition-colors">Asset Management</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground-muted text-sm mb-4 md:mb-0">
            © Copyright 2022<br/>ABN: 71554355920
          </div>
          <div className="flex items-center space-x-6">
            <SimpleThemeToggle />
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/madebyflowcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <span className="text-xl">🐦</span>
              </Link>
              <Link
                href="https://www.instagram.com/madebyflowcraft/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <span className="text-xl">📷</span>
              </Link>
              <Link
                href="https://gumroad.com/flowcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                <span className="text-xl">🛒</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
