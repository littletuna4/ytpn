'use client';

import Link from 'next/link';

const clients = [
  {
    name: 'Well Tested',
    url: 'https://welltested.btdigital.com.au'
  },
  {
    name: 'Spectra Ingenuity',
    url: 'https://spectra-ingenuity.com.au'
  },
  {
    name: 'OnSpec',
    url: 'https://www.onspecdaq.com/'
  },
  {
    name: 'Innovera Partners',
    url: 'https://www.innoverapartners.com/'
  },
  {
    name: 'Circulr',
    url: 'https://www.circulr.earth/'
  },
  {
    name: 'ApiOro',
    url: 'https://www.apioro.com'
  }
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-foreground-secondary">
            Some of our partners & projects:
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <Link
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background-secondary rounded-lg p-6 hover:shadow-lg transition-shadow text-center group border border-border"
            >
              <div className="h-16 flex items-center justify-center mb-2">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {client.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
