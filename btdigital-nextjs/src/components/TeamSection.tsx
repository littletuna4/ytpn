'use client';

import Link from 'next/link';

const teamMembers = [
  {
    name: 'Ben Israel',
    role: 'Cloud Engineering Specialist',
    linkedin: 'https://www.linkedin.com/in/israelben/'
  },
  {
    name: 'Tony Cerqui',
    role: 'Process Engineering Specialist',
    linkedin: 'https://www.linkedin.com/in/anthonycerqui/'
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Our Team
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Link
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow text-center group border border-border"
            >
              <div className="w-32 h-32 bg-background-secondary rounded-full mx-auto mb-6 flex items-center justify-center border border-border">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-foreground-secondary">
                {member.role}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
