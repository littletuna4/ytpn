import {
  
  HeroSection,
  ServicesSection,
  AboutSection,
  TeamSection,
  BlogSection,
  ProcessSection,
  FocusAreasSection,
  PortfolioSection,
  ClientsSection,
  CTASection
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <BlogSection />
      <ProcessSection />
      <FocusAreasSection />
      <PortfolioSection />
      <ClientsSection />
      <CTASection />
    </div>
  );
}
