import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'outline';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  pulse?: boolean;
  glow?: boolean;
  rounded?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  pulse = false,
  glow = false,
  rounded = true,
  className = '',
  icon,
}) => {
  // Estilos base comunes
  const baseStyles = `
    inline-flex items-center font-semibold whitespace-nowrap
    transition-all duration-300 ease-out
    ${rounded ? 'rounded-full' : 'rounded-lg'}
    ${pulse ? 'animate-pulse' : ''}
  `;

  // Tamaños
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  // Variantes de color y estilo
  const variants = {
    primary: `
      bg-primary text-white shadow-sm
      ${glow ? 'shadow-lg shadow-primary/40' : ''}
    `,
    secondary: `
      bg-secondary text-white shadow-sm
      ${glow ? 'shadow-lg shadow-secondary/40' : ''}
    `,
    accent: `
      bg-gradient-to-r from-accent to-yellow-500 text-white shadow-sm
      ${glow ? 'shadow-lg shadow-accent/40' : ''}
    `,
    success: `
      bg-green-500 text-white shadow-sm
      ${glow ? 'shadow-lg shadow-green-500/40' : ''}
    `,
    warning: `
      bg-yellow-500 text-white shadow-sm
      ${glow ? 'shadow-lg shadow-yellow-500/40' : ''}
    `,
    danger: `
      bg-red-500 text-white shadow-sm
      ${glow ? 'shadow-lg shadow-red-500/40' : ''}
    `,
    info: `
      bg-blue-500 text-white shadow-sm
      ${glow ? 'shadow-lg shadow-blue-500/40' : ''}
    `,
    gradient: `
      bg-gradient-to-r from-primary via-secondary to-primary text-white shadow-sm
      bg-size-200 animate-gradient-x
      ${glow ? 'shadow-lg shadow-primary/40' : ''}
    `,
    outline: `
      border-2 border-primary text-primary bg-transparent
      hover:bg-primary hover:text-white
      ${glow ? 'shadow-lg shadow-primary/20' : ''}
    `,
  };

  const badgeClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <span className={badgeClasses}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
};

// Componentes específicos para casos comunes
export const DiscountBadge: React.FC<{
  percentage: number;
  glow?: boolean;
}> = ({ percentage, glow = true }) => {
  return (
    <Badge variant="accent" glow={glow} pulse={true}>
      -{percentage}%
    </Badge>
  );
};

export const PopularBadge: React.FC<{
  glow?: boolean;
}> = ({ glow = true }) => {
  return (
    <Badge variant="gradient" glow={glow}>
      ⭐ Más Popular
    </Badge>
  );
};

export const NewBadge: React.FC<{
  glow?: boolean;
}> = ({ glow = true }) => {
  return (
    <Badge variant="success" glow={glow} pulse={true}>
      🆕 Nuevo
    </Badge>
  );
};

export const UrgentBadge: React.FC<{
  text?: string;
  glow?: boolean;
}> = ({ text = "¡Urgente!", glow = true }) => {
  return (
    <Badge variant="warning" glow={glow} pulse={true}>
      ⚡ {text}
    </Badge>
  );
};

export const StatusBadge: React.FC<{
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  glow?: boolean;
}> = ({ status, glow = false }) => {
  const statusConfig = {
    active: { variant: 'success' as const, text: 'Activo', icon: '🟢' },
    pending: { variant: 'warning' as const, text: 'Pendiente', icon: '🟡' },
    completed: { variant: 'primary' as const, text: 'Completado', icon: '✅' },
    cancelled: { variant: 'danger' as const, text: 'Cancelado', icon: '🔴' },
  };

  const config = statusConfig[status];

  return (
    <Badge variant={config.variant} glow={glow}>
      <span className="mr-1">{config.icon}</span>
      {config.text}
    </Badge>
  );
};

export const PriceBadge: React.FC<{
  price: string | number;
  currency?: string;
  size?: BadgeSize;
  glow?: boolean;
}> = ({ price, currency = 'Bs.', size = 'lg', glow = true }) => {
  return (
    <Badge variant="primary" size={size} glow={glow}>
      {price} {currency}
    </Badge>
  );
};

export const FeatureBadge: React.FC<{
  feature: string;
  highlighted?: boolean;
}> = ({ feature, highlighted = false }) => {
  return (
    <Badge 
      variant={highlighted ? 'gradient' : 'outline'} 
      size="sm"
      glow={highlighted}
    >
      {feature}
    </Badge>
  );
};

export default Badge;