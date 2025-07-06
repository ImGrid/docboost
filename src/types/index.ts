// Tipos para componentes de UI
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';

export type CardVariant = 'default' | 'highlighted' | 'gradient' | 'minimal' | 'pricing';

// Tipos para servicios
export type Complexity = 'Media' | 'Alta' | 'Media-Alta' | 'Muy Alta';
export type Risk = 'Bajo' | 'Medio' | 'Alto (rechazo)';
export type Semester = '9' | '10';

// Tipos para navegación
export interface NavigationSection {
  id: string;
  label: string;
}

// Tipos para estadísticas
export interface Stat {
  number: string;
  label: string;
  description: string;
  color?: string;
}

// Tipos para características/ventajas
export interface Feature {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

// Tipos para procesos
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  color: string;
}

// Tipos para precios
export interface PriceRange {
  min: number;
  max: number;
}

// Tipos para comparación regional
export interface RegionalComparison {
  country: string;
  priceUSD: string;
  priceBS: string;
  docBoost: string;
  highlighted?: boolean;
}

// Tipos para formularios
export interface ContactForm {
  nombre: string;
  email: string;
  telefono: string;
  universidad: string;
  semestre: string;
  servicio: string;
  descripcion: string;
  urgente: boolean;
}

// Tipos para configuración de empresa
export interface CompanyInfo {
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  location: string;
}

// Tipos para información de contacto
export interface ContactInfo {
  phone: string;
  whatsapp: string;
  countryCode: string;
}

// Tipos para animaciones
export interface AnimationConfig {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  delay: {
    short: string;
    medium: string;
    long: string;
  };
}