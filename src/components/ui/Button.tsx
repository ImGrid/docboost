import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  className = '',
  type = 'button',
}) => {
  // Estilos base comunes para todos los botones
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 transform active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    relative overflow-hidden group
  `;

  // Variantes de color y estilo
  const variants = {
    primary: `
      bg-gradient-to-r from-primary to-dark text-white shadow-lg shadow-primary/25
      hover:shadow-xl hover:shadow-primary/40 hover:scale-105
      focus:ring-primary/50 border border-transparent
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent
      before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
    `,
    secondary: `
      bg-gradient-to-r from-secondary to-green-600 text-white shadow-lg shadow-secondary/25
      hover:shadow-xl hover:shadow-secondary/40 hover:scale-105
      focus:ring-secondary/50 border border-transparent
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent
      before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
    `,
    outline: `
      border-2 border-primary text-primary bg-transparent shadow-sm
      hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/25
      focus:ring-primary/50
    `,
    accent: `
      bg-gradient-to-r from-accent to-yellow-500 text-white shadow-lg shadow-accent/25
      hover:shadow-xl hover:shadow-accent/40 hover:scale-105
      focus:ring-accent/50 border border-transparent
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent
      before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
    `,
    ghost: `
      text-gray-700 bg-transparent hover:bg-gray-100 hover:text-gray-900
      focus:ring-gray-500/50 border border-transparent
    `,
  };

  // Tamaños
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  // Aplicar ancho completo si es necesario
  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${widthClass}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && (
        <svg
          className="w-5 h-5 mr-3 -ml-1 text-current animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;