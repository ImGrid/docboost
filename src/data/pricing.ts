export interface PricingPackage {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
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
    price: 4000,
    originalPrice: 4700,
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
    badge: 'Descuento 15%',
    buttonText: 'Solicitar Paquete 9°',
    buttonVariant: 'primary'
  },
  {
    id: 'paquete-10',
    title: 'Paquete 10° Semestre',
    subtitle: 'Documentación + Proyecto Final',
    price: 6500,
    originalPrice: 7700,
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
    price: 10000,
    originalPrice: 12500,
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
    price: 300,
    icon: '📱'
  },
  {
    id: 'manuales-usuario',
    title: 'Manuales de Usuario/Técnico',
    description: 'Documentación completa del sistema desarrollado',
    price: 450,
    icon: '📖'
  },
  {
    id: 'revision-antiplagio',
    title: 'Revisión Anti-Plagio + Parafraseo',
    description: 'Análisis con software profesional y corrección',
    price: 300,
    icon: '🔍'
  },
  {
    id: 'formateo-normas',
    title: 'Formateo según Normas Académicas',
    description: 'Aplicación de normas APA, IEEE, Vancouver',
    price: 225,
    icon: '📝'
  },
  {
    id: 'simulacro-defensa',
    title: 'Simulacro de Defensa',
    description: 'Sesión práctica con preguntas del tribunal',
    price: 500,
    icon: '🎯'
  },
  {
    id: 'asesoria-defensa',
    title: 'Asesoría para Defensa',
    description: 'Preparación completa para tu defensa oral',
    price: 400,
    icon: '🎓'
  },
  {
    id: 'correcciones-post',
    title: 'Correcciones Post-Revisión',
    description: 'Ajustes después de la revisión del tribunal',
    price: 300,
    icon: '🔄'
  },
  {
    id: 'capacitacion-proyecto',
    title: 'Capacitación en el Proyecto',
    description: 'Sesiones para que domines tu proyecto',
    price: 500,
    icon: '📚'
  }
];