'use client';

const processSteps = [
  {
    title: 'Design',
    description: 'Plan and architect your solution'
  },
  {
    title: 'Build',
    description: 'Develop and implement your system'
  },
  {
    title: 'Manage',
    description: 'Maintain and optimize your technology'
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
            Our process
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-foreground-secondary text-center text-sm">
                {step.description}
              </p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform translate-x-8">
                  <span className="text-2xl text-foreground-muted">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
