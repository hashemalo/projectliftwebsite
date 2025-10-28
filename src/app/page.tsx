import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Empowering Small Businesses Through Technology"
        description="We are a student organization at UMD helping local small businesses use technology to capitalize on new opportunities and optimize operations to boost their growth and presence."
        primaryCTA={{
          text: "For Businesses",
          href: "/get-involved#businesses"
        }}
        secondaryCTA={{
          text: "For Students",
          href: "/about"
        }}
      />

      {/* Mission & Vision */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <Card hover>
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-foreground/70 leading-relaxed">
              We are a student organization at UMD catered towards helping local small businesses use technology to capitalize on new opportunities and optimize operations to boost their growth and presence.
            </p>
          </Card>
          <Card hover>
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
            <p className="text-foreground/70 leading-relaxed">
              We envision a self-sustaining engine for community growth, powered by interdisciplinary students who deliver lasting, creative solutions to Maryland's small businesses and develop into future leaders.
            </p>
          </Card>
        </div>
      </Section>

      {/* Services Overview */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Can Build</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            From websites to AI-driven analytics, we provide comprehensive technology solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card hover>
            <h3 className="text-xl font-semibold mb-2">Website Enhancement</h3>
            <p className="text-foreground/60 text-sm">
              Enhance your website with modern technologies for a more immersive user experience.
            </p>
          </Card>
          <Card hover>
            <h3 className="text-xl font-semibold mb-2">Admin Portals</h3>
            <p className="text-foreground/60 text-sm">
              Streamline customer and employee management through seamless portals.
            </p>
          </Card>
          <Card hover>
            <h3 className="text-xl font-semibold mb-2">Web Scrapers</h3>
            <p className="text-foreground/60 text-sm">
              Get up-to-date data on market trends, competition, and opportunities.
            </p>
          </Card>
          <Card hover>
            <h3 className="text-xl font-semibold mb-2">CRM Systems</h3>
            <p className="text-foreground/60 text-sm">
              Boost customer satisfaction and engagement with proper resource management.
            </p>
          </Card>
          <Card hover>
            <h3 className="text-xl font-semibold mb-2">AI Data Analysis</h3>
            <p className="text-foreground/60 text-sm">
              Leverage AI to gain insights on business performance and power decision making.
            </p>
          </Card>
          <Card hover>
            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
            <p className="text-foreground/60 text-sm">
              Tailored technology solutions designed specifically for your business needs.
            </p>
          </Card>
        </div>
      </Section>

      {/* Stats/Impact */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5-6</div>
            <div className="text-foreground/60">Team Members per Project</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-foreground/60">Direct Client Collaboration</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">0→1</div>
            <div className="text-foreground/60">Full System Development</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">∞</div>
            <div className="text-foreground/60">Possibilities</div>
          </div>
        </div>
      </Section>
    </>
  );
}
