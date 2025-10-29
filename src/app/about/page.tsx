import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'About Us | Project LIFT',
  description: 'Learn about Project LIFT\'s mission, vision, values, and how we operate to empower small businesses.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About Project LIFT"
        subtitle="Who We Are"
        description="Empowering Maryland's small businesses through student-driven technology solutions."
        compact
      />

      {/* Mission & Vision */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We are a student organization at UMD catered towards helping local small businesses use technology to capitalize on new opportunities and optimize operations to boost their growth and presence.
            </p>
          </Card>
          <Card>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We envision a self-sustaining engine for community growth, powered by interdisciplinary students who deliver lasting, creative solutions to Maryland&apos;s small businesses and develop into future leaders.
            </p>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Core Values</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card hover>
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Quality</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Use modern technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Customer-centric approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Industry standard practices</span>
              </li>
            </ul>
          </Card>
          <Card hover>
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Personalization</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Work directly with clients to highlight opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Tailored solutions per business need</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Active collaboration</span>
              </li>
            </ul>
          </Card>
          <Card hover>
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Community</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Serve the people who serve us</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Help UMD students</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Give back through tech-driven initiatives</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* How We Operate */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">How We Operate</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Our systematic approach to delivering exceptional results.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { step: 1, title: 'Connect', description: 'Connect with a prospective client who we think we can help' },
            { step: 2, title: 'Plan', description: 'Develop a design document highlighting deliverables, timelines, expectations, etc.' },
            { step: 3, title: 'Build', description: 'Build out the projects with lean, interdisciplinary teams' },
            { step: 4, title: 'Review', description: 'Review with clients to ensure alignment with their vision' },
            { step: 5, title: 'Iterate', description: 'Modify as needed based on client feedback' },
            { step: 6, title: 'Deliver', description: 'Present final output and ensure successful implementation' },
            { step: 7, title: 'Showcase', description: 'Share a creative showcase of our latest client via social media' },
          ].map((item) => (
            <Card key={item.step} hover className="flex items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-foreground/60">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Our Priorities */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Priorities</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            What matters most to us and our community.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card hover>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Low Barrier To Entry</h3>
            <p className="text-foreground/70">
              Whether it be for small businesses or for student talent, we prioritize equity and accessibility in order to help our community grow.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Promote Creativity</h3>
            <p className="text-foreground/70">
              The nature of our work allows us to stretch the horizons for both the capabilities of the students and the client – the more creative the solution, the better.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Connectivity</h3>
            <p className="text-foreground/70">
              We want to bring students with all kinds of passions, interests, and capabilities to collaborate with small businesses with no limitations.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Support</h3>
            <p className="text-foreground/70">
              Not only do we strive to support clients who directly impact us, but we strive to put their priorities and way of operations at the forefront of our work.
            </p>
          </Card>
        </div>

        {/* Work Structure */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center">
            <h4 className="font-bold text-lg mb-3 text-primary">Lean Teams</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>Team size range from 5-6</li>
              <li>Building a full system</li>
            </ul>
          </Card>
          <Card className="text-center">
            <h4 className="font-bold text-lg mb-3 text-primary">Direct Work</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>Talk directly to C-Level small business owners</li>
              <li>Take things from 0 to 1</li>
              <li>Convert technical to non-technical</li>
            </ul>
          </Card>
          <Card className="text-center">
            <h4 className="font-bold text-lg mb-3 text-primary">Interdisciplinary Applications</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>Work on + around software</li>
              <li>Support a business as a whole</li>
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}

