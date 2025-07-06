export interface PricingPackage {
  id: string;
  title: string;
  subtitle: string;
  priceRange: {
    min: number;
    max: number;
  };
  originalPrice?: {
    min: number;
    max: number;
  };
  features: string[];
  discount: number;
  badge?: string;
  highlighted?: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
}

// Paquetes principales CON SERVICIOS ADICIONALES INCLUIDOS
export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'paquete-9',
    title: 'Paquete 9° Semestre',
    subtitle: 'Perfil + Avance del Proyecto',
    priceRange: { min: 2000, max: 3200 },
    originalPrice: { min: 2300, max: 3700 },
    features: [
      'Documentación completa del perfil',
      'Planteamiento y justificación',
      'Marco teórico inicial',
      'Prototipo funcional (30-40%)',
      'Asesoría para defensa incluida',
      'Diapositivas para presentación de avance',
      'Revisión anti-plagio incluida',
      'Correcciones Post-Revisión',
      'Tiempo total: 5-7 semanas'
      
    ],
    discount: 15,
    badge: 'Descuento 10-15%',
    buttonText: 'Solicitar Paquete 9°',
    buttonVariant: 'primary'
  },
  {
    id: 'paquete-10',
    title: 'Paquete 10° Semestre',
    subtitle: 'Documentación + Proyecto Final',
    priceRange: { min: 3200, max: 5000 },
    originalPrice: { min: 3700, max: 5800 },
    features: [
      'Documentación del marco práctico',
      'Metodología aplicada',
      'Desarrollo completo del sistema',
      'Puesta en producción',
      'Asesoría para defensa incluida',
      'Manual de usuario completo',
      'Diapositivas profesionales para defensa',
      'Revisión anti-plagio incluida',
      'Correcciones Post-Revisión',
      'Tiempo total: 7-10 semanas'
    ],
    discount: 15,
    badge: 'Más Popular',
    highlighted: true,
    buttonText: 'Solicitar Paquete 10°',
    buttonVariant: 'secondary'
  },
  {
    id: 'tesis-completa',
    title: 'Tesis Completa',
    subtitle: 'Ambos Semestres (9° + 10°)',
    priceRange: { min: 5000, max: 8000 },
    originalPrice: { min: 6000, max: 9500 },
    features: [
      'TODOS los servicios incluidos',
      'Perfil completo del 9° semestre',
      'Prototipo y avance técnico',
      'Documentación final del 10° semestre',
      'Proyecto completamente funcional',
      'Diapositivas para todas las presentaciones',
      'Asesoría completa para defensa',
      'Manuales técnicos y de usuario',
      'Revisión anti-plagio garantizada',
      'Soporte durante todo el proceso',
      'Tiempo total: 12-16 semanas'
    ],
    discount: 20,
    badge: 'Máximo Ahorro 20%',
    buttonText: 'Solicitar Tesis Completa',
    buttonVariant: 'primary'
  }
];

// Servicios adicionales NUEVOS (simples, como antes)
export const ADDITIONAL_SERVICES_PRICING = [
  {
    id: 'diapositivas-defensa',
    title: 'Diapositivas para Defensa',
    description: 'Presentación PowerPoint profesional para defensa oral',
    price: '200-400 Bs.',
    icon: '📱'
  },
  {
    id: 'manuales-usuario',
    title: 'Manuales de Usuario/Técnico',
    description: 'Documentación completa del sistema desarrollado',
    price: '300-600 Bs.',
    icon: '📖'
  },
  {
    id: 'revision-antiplagio',
    title: 'Revisión Anti-Plagio + Parafraseo',
    description: 'Análisis con software profesional y corrección',
    price: '200-400 Bs.',
    icon: '🔍'
  },
  {
    id: 'formateo-normas',
    title: 'Formateo según Normas Académicas',
    description: 'Aplicación de normas APA, IEEE, Vancouver',
    price: '150-300 Bs.',
    icon: '📝'
  },
  {
    id: 'simulacro-defensa',
    title: 'Simulacro de Defensa',
    description: 'Sesión práctica con preguntas del tribunal',
    price: '400-600 Bs.',
    icon: '🎯'
  },
  {
    id: 'asesoria-defensa',
    title: 'Asesoría para Defensa',
    description: 'Preparación completa para tu defensa oral',
    price: '300-500 Bs.',
    icon: '🎓'
  },
  {
    id: 'correcciones-post',
    title: 'Correcciones Post-Revisión',
    description: 'Ajustes después de la revisión del tribunal',
    price: '200-400 Bs.',
    icon: '🔄'
  },
  {
    id: 'capacitacion-proyecto',
    title: 'Capacitación en el Proyecto',
    description: 'Sesiones para que domines tu proyecto',
    price: '400-600 Bs.',
    icon: '📚'
  }
];