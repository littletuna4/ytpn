/**
 * Main Application 404 Not Found Page
 * 
 * Functional Requirements:
 * - Display a professional 404 error message when a page is not found
 * - Provide clear navigation options back to the main site and key sections
 * - Maintain consistent styling with the main application theme system
 * - Include helpful suggestions for users to find what they're looking for
 * - Use semantic HTML structure for accessibility
 * - Support both light and dark mode themes
 * - Include contact information for additional assistance
 * - Display the YTPN branding consistently
 * - Provide multiple navigation paths (home, services, blog, contact)
 * - Use proper typography hierarchy and spacing
 * - Include subtle animations or visual elements to maintain engagement
 * - Ensure mobile responsiveness across all device sizes
 * - Follow WCAG accessibility guidelines for contrast and navigation
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MainApplicationNotFoundPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Visual Element */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-foreground-muted mb-4">
              404
            </div>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-foreground-secondary mb-6 max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or may have been moved. 
              Don&apos;t worry, we&apos;ll help you find what you need.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Where would you like to go?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {/* Home */}
              <Link 
                href="/"
                className="group p-6 bg-background-secondary hover:bg-background-tertiary border border-border rounded-lg transition-all duration-200 hover:shadow-md"
              >
                <div className="text-2xl mb-3">🏠</div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Home
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Return to our main page
                </p>
              </Link>

              {/* Services */}
              <Link 
                href="/#services"
                className="group p-6 bg-background-secondary hover:bg-background-tertiary border border-border rounded-lg transition-all duration-200 hover:shadow-md"
              >
                <div className="text-2xl mb-3">⚙️</div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Services
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Explore our technology services
                </p>
              </Link>

              {/* Blog */}
              <Link 
                href="/blog"
                className="group p-6 bg-background-secondary hover:bg-background-tertiary border border-border rounded-lg transition-all duration-200 hover:shadow-md"
              >
                <div className="text-2xl mb-3">📝</div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Blog
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Read our latest insights
                </p>
              </Link>

              {/* Contact */}
              <Link 
                href="mailto:contact@btdigital.com.au"
                className="group p-6 bg-background-secondary hover:bg-background-tertiary border border-border rounded-lg transition-all duration-200 hover:shadow-md"
              >
                <div className="text-2xl mb-3">📧</div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Contact
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Get in touch with us
                </p>
              </Link>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">←</span>
              Back to Home
            </Link>
          </div>

          {/* Additional Help */}
          <div className="text-center">
            <p className="text-foreground-tertiary text-sm mb-4">
              Still can&apos;t find what you&apos;re looking for?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="mailto:contact@btdigital.com.au"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                contact@btdigital.com.au
              </Link>
              <span className="text-foreground-muted hidden sm:inline">•</span>
              <Link 
                href="tel:+61487631858"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                +61 487 631 858
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* YTPN Branding */}
      <div className="bg-background-tertiary border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/logo.png"
              alt="YTPN"
              width={180}
              height={50}
              className="h-10 w-auto opacity-60"
            />
          </div>
          <p className="text-foreground-muted text-sm">
            YTPN - Australian Technology Service Provider
          </p>
        </div>
      </div>
    </div>
  );
}
