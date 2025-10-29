import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';

export default function Home() {
  const galleryImages = [
    '/gallery/gallery1.png',
    '/gallery/gallery2.png',
    '/gallery/gallery3.png',
    '/gallery/gallery4.png',
    '/gallery/gallery5.png',
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Empowering Small Businesses Through Technology"
        description="We are a student organization at UMD helping local small businesses use technology to capitalize on new opportunities and optimize operations to boost their growth and presence."
        primaryCTA={{
          text: "For Businesses",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSf2Xm7oTWGS4suNJjysBrqCcuDiCYF8IrDL-jE-6XchAy817w/viewform?usp=dialog",
          target: "_blank",
          rel: "noopener noreferrer"
        }}
        secondaryCTA={{
          text: "For Students",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSfpAvAfk8yUX4St6giA428JDqGI8e3fz1VKMQxkc3N0H01Wnw/viewform?usp=dialog",
          target: "_blank",
          rel: "noopener noreferrer"
        }}
        gallery={galleryImages}
      />

      {/* Our Story Video */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">OUR STORY</h2>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
            >
              <source src="/introlift.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <Card hover>
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-foreground/70 leading-relaxed">
              We are a student organization at UMD catered towards helping local small businesses use technology to capitalize on new opportunities and optimize operations to boost their growth and presence.
            </p>
          </Card>
          <Card hover>
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
            <p className="text-foreground/70 leading-relaxed">
              We envision a self-sustaining engine for community growth, powered by interdisciplinary students who deliver lasting, creative solutions to Maryland&apos;s small businesses and develop into future leaders.
            </p>
          </Card>
        </div>
      </Section>

      {/* Services Overview */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">What We Can Build</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            From websites to AI-driven analytics, we provide comprehensive technology solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card hover>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Website Enhancement</h3>
            <p className="text-foreground/60 text-sm">
              Enhance your website with modern technologies for a more immersive user experience.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Admin Portals</h3>
            <p className="text-foreground/60 text-sm">
              Streamline customer and employee management through seamless portals.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Scrapers</h3>
            <p className="text-foreground/60 text-sm">
              Get up-to-date data on market trends, competition, and opportunities.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">CRM Systems</h3>
            <p className="text-foreground/60 text-sm">
              Boost customer satisfaction and engagement with proper resource management.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Data Analysis</h3>
            <p className="text-foreground/60 text-sm">
              Leverage AI to gain insights on business performance and power decision making.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
            <p className="text-foreground/60 text-sm">
              Tailored technology solutions designed specifically for your business needs.
            </p>
          </Card>
        </div>
      </Section>

      {/* Stats/Impact */}
      <Section>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-center">
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
        </div>
      </Section>
    </>
  );
}
