import Button from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  compact = false,
}: HeroProps) {
  const paddingClass = compact ? 'py-16 md:py-20' : 'py-20 md:py-32';
  
  return (
    <div className={`${paddingClass} bg-gradient-to-br from-background via-background to-primary/5`}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
        {subtitle && (
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            {subtitle}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Button href={primaryCTA.href} variant="primary" size="lg">
                {primaryCTA.text}
              </Button>
            )}
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="outline" size="lg">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

