interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverEffect = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  
  return (
    <div className={`bg-white dark:bg-muted rounded-xl p-6 shadow-md border border-border transition-all duration-300 ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
}

