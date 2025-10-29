'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { clients } from '@/data/clients';

// Note: Since we're using 'use client', we can't export metadata from this component
// Metadata would need to be set in a parent server component or layout

export default function ClientsPage() {
  const [filter, setFilter] = useState<'all' | 'current' | 'past'>('all');

  const filteredClients = clients.filter(client => {
    if (filter === 'all') return true;
    return client.status === filter;
  });

  const currentCount = clients.filter(c => c.status === 'current').length;
  const pastCount = clients.filter(c => c.status === 'past').length;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Clients"
        subtitle="Success Stories"
        description="Meet the businesses we've helped grow through innovative technology solutions."
        compact
      />

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">{clients.length}</div>
            <div className="text-foreground/60">Total Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">{currentCount}</div>
            <div className="text-foreground/60">Current Projects</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-4xl font-bold text-primary mb-2">{pastCount}</div>
            <div className="text-foreground/60">Completed Projects</div>
          </div>
        </div>
      </Section>

      {/* Filter Buttons */}
      <Section background="muted">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white dark:bg-background text-foreground/70 hover:bg-primary/10 border border-border'
            }`}
          >
            All Clients ({clients.length})
          </button>
          <button
            onClick={() => setFilter('current')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              filter === 'current'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white dark:bg-background text-foreground/70 hover:bg-primary/10 border border-border'
            }`}
          >
            Current ({currentCount})
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              filter === 'past'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white dark:bg-background text-foreground/70 hover:bg-primary/10 border border-border'
            }`}
          >
            Past ({pastCount})
          </button>
        </div>

        {/* Client Cards */}
        {filteredClients.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => (
              <Card key={client.id} hover>
                {/* Logo or Placeholder */}
                <div className="mb-4">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={150}
                      height={64}
                      className="h-16 object-contain"
                    />
                  ) : (
                    <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                      {client.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Client Name */}
                <h3 className="text-xl font-bold mb-2">{client.name}</h3>

                {/* Status Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    client.status === 'current'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-foreground/10 text-foreground/70'
                  }`}
                >
                  {client.status === 'current' ? 'Current' : 'Completed'}
                </span>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {client.description}
                </p>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {client.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted dark:bg-background text-foreground/60 text-xs rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Testimonial */}
                {client.testimonial && (
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/60 text-sm mb-4">
                    &quot;{client.testimonial}&quot;
                  </blockquote>
                )}

                {/* Links */}
                <div className="flex gap-2 mt-auto">
                  {client.website && (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark text-sm font-medium transition-colors"
                    >
                      Visit Website →
                    </a>
                  )}
                  {client.caseStudyLink && (
                    <a
                      href={client.caseStudyLink}
                      className="text-accent hover:text-primary text-sm font-medium transition-colors"
                    >
                      Case Study →
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <p className="text-foreground/60 text-lg">
              No {filter !== 'all' ? filter : ''} clients to display yet.
            </p>
          </Card>
        )}
      </Section>
    </>
  );
}

