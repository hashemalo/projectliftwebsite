interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'muted';
}

export default function Section({ 
  children, 
  className = '', 
  id,
  background = 'default' 
}: SectionProps) {
  const bgClass = background === 'muted' ? 'bg-muted' : '';
  
  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
}

