// Información de la empresa
export const COMPANY_INFO = {
  name: 'DocBoost',
  fullName: 'DocBoost - Especialistas en Tesis',
  tagline: 'Especialistas en Ingeniería de Sistemas',
  description: 'Servicios modulares desde el perfil hasta la implementación completa',
  location: 'La Paz, Bolivia'
} as const;

// Contacto
export const CONTACT_INFO = {
  phone: '72049242', // Número actualizado
  whatsapp: '72049242',
  countryCode: '591',
  // email: '', // No tienen email aún
  // website: '', // No tienen website aún
} as const;

// Configuraciones de animación
export const ANIMATION_CONFIG = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms'
  },
  delay: {
    short: '0.2s',
    medium: '0.4s',
    long: '0.6s'
  }
} as const;

// Configuraciones de navegación
export const NAVIGATION_SECTIONS = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'precios', label: 'Precios' },
  { id: 'por-que-elegirnos', label: 'Por Qué Elegirnos' },
  { id: 'contacto', label: 'Contacto' }
] as const;

// Estadísticas principales
export const MAIN_STATS = [
  {
    number: '800-4,000',
    label: 'Bs. por servicio',
    description: 'Precios transparentes'
  },
  {
    number: '2-6',
    label: 'Semanas entrega',
    description: 'Tiempo promedio'
  },
  {
    number: '15-20%',
    label: 'Descuento paquetes',
    description: 'Máximo ahorro'
  }
] as const;

// Configuraciones de formularios
export const FORM_CONFIG = {
  whatsappMessage: 'Hola! Me interesa obtener información sobre los servicios de DocBoost para mi tesis. ¿Podrían ayudarme?'
} as const;

// URLs útiles
export const URLS = {
  whatsapp: (phone: string, message?: string) => {
    const encodedMessage = message ? encodeURIComponent(message) : '';
    return `https://wa.me/${CONTACT_INFO.countryCode}${phone}${message ? `?text=${encodedMessage}` : ''}`;
  }
} as const;