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
              We envision a self-sustaining engine for community growth, powered by interdisciplinary students who deliver lasting, creative solutions to Maryland's small businesses and develop into future leaders.
            </p>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card hover>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Operate</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Priorities</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            What matters most to us and our community.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card hover>
            <h3 className="text-2xl font-bold mb-3 text-primary">Low Barrier To Entry</h3>
            <p className="text-foreground/70">
              Whether it be for small businesses or for student talent, we prioritize equity and accessibility in order to help our community grow.
            </p>
          </Card>
          <Card hover>
            <h3 className="text-2xl font-bold mb-3 text-primary">Promote Creativity</h3>
            <p className="text-foreground/70">
              The nature of our work allows us to stretch the horizons for both the capabilities of the students and the client – the more creative the solution, the better.
            </p>
          </Card>
          <Card hover>
            <h3 className="text-2xl font-bold mb-3 text-primary">Connectivity</h3>
            <p className="text-foreground/70">
              We want to bring students with all kinds of passions, interests, and capabilities to collaborate with small businesses with no limitations.
            </p>
          </Card>
          <Card hover>
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

