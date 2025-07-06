import React from 'react';

type CardVariant = 'default' | 'highlighted' | 'gradient' | 'minimal' | 'pricing';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
  onClick,
  header,
  footer,
}) => {
  // Estilos base para todas las tarjetas
  const baseStyles = `
    relative rounded-xl border backdrop-blur-sm
    transition-all duration-300 ease-out
    ${onClick ? 'cursor-pointer' : ''}
  `;

  // Efectos de hover si están habilitados
  const hoverStyles = hover ? `
    hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
    group
  ` : '';

  // Variantes de diseño
  const variants = {
    default: `
      bg-white border-gray-200 shadow-lg
      ${hover ? 'hover:shadow-xl hover:shadow-gray-200/50' : ''}
    `,
    highlighted: `
      bg-gradient-to-br from-white to-light border-primary/20 shadow-lg shadow-primary/10
      ${hover ? 'hover:shadow-xl hover:shadow-primary/20 hover:border-primary/30' : ''}
      before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br 
      before:from-primary/5 before:to-transparent before:opacity-0 
      before:transition-opacity before:duration-300
      ${hover ? 'hover:before:opacity-100' : ''}
    `,
    gradient: `
      bg-gradient-to-br from-primary/5 via-white to-secondary/5 
      border border-gradient-to-r border-primary/20 shadow-lg
      ${hover ? 'hover:shadow-xl hover:shadow-primary/15' : ''}
      relative overflow-hidden
      before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-primary/10 before:to-secondary/10 before:opacity-0
      before:transition-opacity before:duration-500
      ${hover ? 'hover:before:opacity-100' : ''}
    `,
    minimal: `
      bg-white/50 border-gray-100 shadow-sm backdrop-blur-sm
      ${hover ? 'hover:bg-white hover:shadow-md hover:border-gray-200' : ''}
    `,
    pricing: `
      bg-white border-gray-200 shadow-lg relative overflow-hidden
      ${hover ? 'hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30' : ''}
      before:absolute before:top-0 before:left-0 before:right-0 before:h-1 
      before:bg-gradient-to-r before:from-primary before:to-secondary
      before:opacity-0 before:transition-opacity before:duration-300
      ${hover ? 'hover:before:opacity-100' : ''}
    `,
  };

  const cardClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${hoverStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={cardClasses} onClick={onClick}>
      {/* Decoración de esquina para variante highlighted */}
      {variant === 'highlighted' && (
        <div className="absolute w-2 h-2 rounded-full top-3 right-3 bg-gradient-to-br from-primary to-secondary opacity-60" />
      )}
      
      {/* Header opcional */}
      {header && (
        <div className="relative z-10 px-6 py-4 border-b border-gray-100">
          {header}
        </div>
      )}
      
      {/* Contenido principal */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Footer opcional */}
      {footer && (
        <div className="relative z-10 px-6 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-xl">
          {footer}
        </div>
      )}
      
      {/* Efecto de brillo sutil para variante gradient */}
      {variant === 'gradient' && hover && (
        <div className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">
          <div className="absolute top-0 w-8 h-full transition-transform duration-1000 transform -skew-x-12 -left-4 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full" />
        </div>
      )}
    </div>
  );
};

// Componentes específicos para casos comunes
export const ServiceCard: React.FC<{
  title: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  children?: React.ReactNode;
}> = ({ title, description, price, features, highlighted = false, children }) => {
  return (
    <Card variant={highlighted ? 'highlighted' : 'default'}>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
        
        <div className="mb-4">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="ml-1 text-gray-500">Bs.</span>
        </div>
        
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <svg className="flex-shrink-0 w-4 h-4 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        {children}
      </div>
    </Card>
  );
};

export const PricingCard: React.FC<{
  title: string;
  subtitle?: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  children?: React.ReactNode;
}> = ({ title, subtitle, price, period = '', features, highlighted = false, badge, children }) => {
  return (
    <Card variant={highlighted ? 'highlighted' : 'pricing'}>
      <div className="p-6">
        {badge && (
          <div className="mb-4 text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-accent to-yellow-500">
              {badge}
            </span>
          </div>
        )}
        
        <div className="mb-6 text-center">
          <h3 className="mb-1 text-xl font-bold text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
          
          <div className="mt-4">
            <span className="text-4xl font-bold text-primary">{price}</span>
            <span className="ml-1 text-gray-500">Bs.</span>
            {period && <span className="ml-1 text-sm text-gray-500">{period}</span>}
          </div>
        </div>
        
        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700">
              <svg className="w-4 h-4 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        {children}
      </div>
    </Card>
  );
};

export default Card;