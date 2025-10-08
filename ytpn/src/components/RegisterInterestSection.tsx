'use client';

import { useState, useEffect } from 'react';
import { Users, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function RegisterInterestSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Join Our Network
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Connect?
            </h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
              Join the Young Technical Professionals Network and become part of a community 
              of innovative thinkers and builders solving tomorrow's challenges today.
            </p>
          </div>

          {/* Form Container */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
            
            {/* Main Form Card */}
            <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
              {/* Success State */}
              {showSuccess && (
                <div className="absolute inset-0 bg-background/95 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-foreground-secondary">We'll be in touch soon.</p>
                  </div>
                </div>
              )}

              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Register Your Interest
                </h3>
                <p className="text-foreground-secondary">
                  Fill out the form below to join our network
                </p>
              </div>

              {/* Loading State */}
              {!isLoaded && (
                <div className="flex items-center justify-center py-20">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                    <p className="text-foreground-secondary">Loading form...</p>
                  </div>
                </div>
              )}

              {/* Google Form Embed */}
              <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="relative overflow-hidden rounded-2xl border border-border/50">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfS3Sn_LREh5Zd0lXbhj8u74DJLxUminEmwLRHqffizO3-nZw/viewform?embedded=true" 
                    width="100%" 
                    height={800} 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    className="w-full h-[800px] bg-background"
                    onLoad={() => setIsLoaded(true)}
                  >
                    Loading…
                  </iframe>
                  
                  {/* Overlay gradient for better integration */}
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-card to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-foreground-secondary text-sm">
                  <span>Questions? Reach out to us</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background-secondary/50 rounded-2xl border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Network</h4>
              <p className="text-sm text-foreground-secondary">
                Connect with like-minded technical professionals
              </p>
            </div>
            
            <div className="text-center p-6 bg-background-secondary/50 rounded-2xl border border-border/50">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Learn</h4>
              <p className="text-sm text-foreground-secondary">
                Access exclusive events and learning opportunities
              </p>
            </div>
            
            <div className="text-center p-6 bg-background-secondary/50 rounded-2xl border border-border/50">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Grow</h4>
              <p className="text-sm text-foreground-secondary">
                Advance your career with our community support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}