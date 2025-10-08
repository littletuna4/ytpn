import {
  
  HeroSection,
  ServicesSection,
  AboutSection,
  SponsorSection,
  BlogSection,
  ProcessSection,
  FocusAreasSection,
  ClientsSection,
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SponsorSection />
      <BlogSection />
      <ProcessSection />
      <FocusAreasSection />
      <ClientsSection />

    </div>
  );
}
