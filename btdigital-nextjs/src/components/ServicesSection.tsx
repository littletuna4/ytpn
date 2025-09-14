'use client';

const services = [
  {
    id: 'traditional-it',
    title: 'Traditional IT Services',
    description: 'We offer end-to-end traditional IT services, including end user support, Microsoft 365 configuration, and proactive management of cloud infrastructure for optimised performance and security.',
    icon: '🛠️'
  },
  {
    id: 'applications',
    title: 'Applications, Integrations, and Automation',
    description: 'We provide comprehensive application, integration, and automation services, including custom application builds, seamless migrations, expert integration services, and tailored configuration. We aim to optimise usability and performance and enhance operational efficiency. Our integration experience covers a broad range of SaaS platforms.',
    icon: '⚙️'
  },
  {
    id: 'surveillance',
    title: 'Integrated Surveillance',
    description: 'We deliver integrated surveillance and monitoring solutions encompassing high-quality camera deployment, network integration, and virtual counter part technology. Our seamless integration with virtual replica platforms enables real-time monitoring, analysis, and decision-making based on physical visualised data.',
    icon: '📹'
  },
  {
    id: 'asset-management',
    title: 'IT Asset Procurement and Device Management Services',
    description: 'We offer comprehensive IT asset procurement and device management services. We streamline hardware and software sourcing and setup to ensure the right tools at the right price. From acquisition to retirement, we can provide comprehensive asset management, including device image setup, security monitoring, and optimisation across the life cycle.',
    icon: '💻'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services to help your business{' '}
            <span className="text-primary">achieve success</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
