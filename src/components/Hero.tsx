'use client';

import Button from './Button';
import Image from 'next/image';
import { useRef } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
    target?: string;
    rel?: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    target?: string;
    rel?: string;
  };
  compact?: boolean;
  gallery?: string[];
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  compact = false,
  gallery,
}: HeroProps) {
  const paddingClass = compact ? 'py-16 md:py-20' : 'py-20 md:py-32';
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };
  
  return (
    <div className={`${paddingClass} bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden`}>
      <div className={`container mx-auto px-4 md:px-6 max-w-7xl ${gallery ? '' : 'text-center'} relative z-10`}>
        <div className={`${gallery ? 'grid md:grid-cols-2 gap-8 lg:gap-12 items-center' : ''}`}>
          {/* Main Content */}
          <div className={gallery ? '' : 'max-w-5xl mx-auto text-center'}>
            {subtitle && (
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {subtitle}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
              {title}
            </h1>
            {description && (
              <p className={`text-lg md:text-xl text-foreground/70 mb-8 ${gallery ? '' : 'max-w-3xl mx-auto'} leading-relaxed`}>
                {description}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl mb-6 text-primary">GET INVOLVED: </h2>
                <div className={`flex flex-col sm:flex-row gap-4 ${gallery ? '' : 'justify-center'} items-center`}>
                  {primaryCTA && (
                    <Button href={primaryCTA.href} variant="primary" size="lg" target={primaryCTA.target} rel={primaryCTA.rel}>
                      {primaryCTA.text}
                    </Button>
                  )}
                  {secondaryCTA && (
                    <Button href={secondaryCTA.href} variant="outline" size="lg" target={secondaryCTA.target} rel={secondaryCTA.rel}>
                      {secondaryCTA.text}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Gallery */}
          {gallery && gallery.length > 0 && (
            <div className="relative w-full max-w-2xl mx-auto flex items-center gap-6">
              {/* Left Arrow */}
              <button
                onClick={scrollLeft}
                className="flex-shrink-0 text-white hover:text-white/80 transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Gallery */}
              <div className="relative overflow-hidden rounded-lg shadow-xl flex-1">
                <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth gap-0">
                  {gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-full snap-center aspect-[4/3]"
                    >
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    </div>
                  ))}
                </div>
                {/* Scroll indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {gallery.map((_, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full bg-white/50 backdrop-blur-sm"
                    />
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={scrollRight}
                className="flex-shrink-0 text-white hover:text-white/80 transition-all hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

