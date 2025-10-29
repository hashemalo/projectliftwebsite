import type { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Our Team | Project LIFT',
  description: 'Meet the mentors and team members behind Project LIFT at UMD.',
};

export default function TeamPage() {
  // Team data with LinkedIn profiles
  const founders = [
    {
      name: 'Nidhin Gangisetty',
      role: 'President',
      image: '/headshots/nidhin-headshot.png',
      linkedin: 'https://www.linkedin.com/in/nidhingangisetty/', // Update with actual URL
    },
    {
      name: 'Hashem Alomar',
      role: 'VP of Operations',
      image: '/headshots/hashem-headshot.png',
      linkedin: 'https://www.linkedin.com/in/hashem-alomar/', // Update with actual URL
    },
    {
      name: 'Rishi Chudasama',
      role: 'VP Finance',
      image: '/headshots/rishi-headshot.png',
      linkedin: 'https://www.linkedin.com/in/rishi-chudasama/', // Update with actual URL
    },
    {
      name: 'Aryan Jain',
      role: 'VP External',
      image: '/headshots/aryan-headshot.png',
      linkedin: 'https://www.linkedin.com/in/aryanjain06/', // Update with actual URL
    },
  ];

  const advisors = [
    {
      name: 'Nima Farshchi',
      role: 'Lecturer, Management and Organization',
      roles: [
        'Executive Director, Office of Experiential Learning',
        'Director, Center for Social Value Creation',
      ],
      image: '/headshots/nima-headshot.jpeg',
      description: 'Nima brings extensive experience in experiential learning and social value creation, helping students translate their technical skills into real-world impact.',
      linkedin: 'https://www.linkedin.com/in/nima-farshchi/', // Update with actual URL
    },
    {
      name: 'Sammy Popat',
      role: 'Discovery District Manager',
      roles: ['UMD Innovation & Entrepreneurship Ecosystem Catalyst'],
      image: '/headshots/sammy-headshot.jpeg',
      description: 'Sammy connects Project LIFT with the broader UMD innovation ecosystem, fostering partnerships and opportunities for both students and small businesses.',
      linkedin: 'https://www.linkedin.com/in/sameerpopat/', // Update with actual URL
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Meet Our Team"
        subtitle="The People Behind Project LIFT"
        description="Our team is composed of passionate students and experienced mentors dedicated to empowering small businesses through technology."
        compact
      />

      {/* Founders */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Founders</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            The visionaries who started Project LIFT&apos;s journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {founders.map((founder) => (
            <a
              key={founder.name}
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card hover>
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20 group-hover:border-primary transition-colors">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{founder.role}</p>
                  <p className="text-foreground/60 text-xs flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* Our Advisors */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Advisors</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Experienced leaders guiding Project LIFT&apos;s mission and growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advisors.map((advisor) => (
            <a
              key={advisor.name}
              href={advisor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card hover>
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20 group-hover:border-primary transition-colors">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{advisor.name}</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-primary font-medium">{advisor.role}</p>
                    {advisor.roles.map((role) => (
                      <p key={role} className="text-foreground/70 text-sm">{role}</p>
                    ))}
                  </div>
                  <p className="text-foreground/60 leading-relaxed mb-3">
                    {advisor.description}
                  </p>
                  <p className="text-foreground/60 text-xs flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* Student Benefits */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">What Students Gain</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Join Project LIFT to develop skills and make a real impact.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card hover className="text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-bold mb-2">Real Experience</h4>
            <p className="text-foreground/60 text-sm">Work on real projects with real clients</p>
          </Card>
          <Card hover className="text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="font-bold mb-2">Skill Development</h4>
            <p className="text-foreground/60 text-sm">Learn cutting-edge technologies</p>
          </Card>
          <Card hover className="text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-bold mb-2">Networking</h4>
            <p className="text-foreground/60 text-sm">Connect with business owners and mentors</p>
          </Card>
          <Card hover className="text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h4 className="font-bold mb-2">Leadership</h4>
            <p className="text-foreground/60 text-sm">Develop into future leaders</p>
          </Card>
        </div>
      </Section>
    </>
  );
}

