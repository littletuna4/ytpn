'use client';

const focusAreas = [
  {
    category: 'PROCESS',
    title: 'IoT Development',
    description: 'We specialise in seamlessly deploying IoT devices and integrating them with cloud computing, analytics, and human expertise to digitise your industrial processes. Our IoT solutions empower asset-intensive companies to connect hundreds of devices through AWS, driving improvements in predictive quality, maintenance analytics, asset condition monitoring, and process optimisation.',
    icon: '🌐'
  },
  {
    category: 'OPERATIONS',
    title: 'Systems Integrations',
    description: 'Our commitment to excellence in system integration means we meticulously assess, design, and implement solutions that harmonize your technology ecosystem. By seamlessly bridging the gaps between business units, we empower your company with real-time data accessibility, fostering better decision-making and process optimization.',
    icon: '🔗'
  },
  {
    category: 'DATA SERVICE',
    title: 'Data Management',
    description: 'Our cloud-based data management services provide a robust and scalable solution for efficiently storing, organizing, and securing your valuable data assets. Leveraging the power of cloud technology, we offer a comprehensive suite of services that encompass data storage, backup, synchronization, and access control.',
    icon: '📊'
  }
];

export default function FocusAreasSection() {
  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Areas of Focus
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area) => (
            <div key={area.title} className="bg-background-secondary rounded-lg p-8 hover:shadow-lg transition-shadow border border-border">
              <div className="text-4xl mb-4">{area.icon}</div>
              <div className="mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                  {area.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {area.title}
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
