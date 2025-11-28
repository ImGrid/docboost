export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  complexity: 'Media' | 'Alta' | 'Media-Alta' | 'Muy Alta';
  risk: 'Bajo' | 'Medio' | 'Alto (rechazo)';
  timeWeeks: string;
  semester: '9' | '10';
  highlighted?: boolean;
}

// Servicios del 9° Semestre
export const NINTH_SEMESTER_SERVICES: Service[] = [
  {
    id: 'perfil-documentacion',
    title: 'Documentación del Perfil',
    description: 'Elaboración completa del perfil de trabajo de grado con todos los componentes académicos requeridos',
    price: 1600,
    features: [
      'Planteamiento del problema',
      'Justificación y objetivos',
      'Marco teórico inicial',
      'Asesoría para defensa incluida',
      'Diapositivas para presentación de avance',
      'Revisión anti-plagio incluida',
      'Formateo según normas universitarias',
      'Tiempo: 2-3 semanas'
    ],
    complexity: 'Media',
    risk: 'Alto (rechazo)',
    timeWeeks: '2-3 semanas',
    semester: '9'
  },
  {
    id: 'avance-proyecto',
    title: 'Avance del Proyecto',
    description: 'Desarrollo del prototipo inicial funcional que demuestre las capacidades principales del sistema',
    price: 3000,
    features: [
      'Prototipo funcional (30-40%)',
      'Diseño de base de datos básico',
      'Interfaces principales desarrolladas',
      'Funcionalidades core implementadas',
      'Asesoría para defensa incluida',
      'Diapositivas para presentación de avance',
      'Manual técnico básico del prototipo',
      'Tiempo: 3-4 semanas'
    ],
    complexity: 'Alta',
    risk: 'Medio',
    timeWeeks: '3-4 semanas',
    semester: '9',
    highlighted: true
  }
];

// Servicios del 10° Semestre CON CARACTERÍSTICAS ADICIONALES
export const TENTH_SEMESTER_SERVICES: Service[] = [
  {
    id: 'documentacion-marco',
    title: 'Documentación del Marco Práctico',
    description: 'Documentación completa del desarrollo aplicando metodología, pruebas y validaciones del sistema',
    price: 2500,
    features: [
      'Metodología de desarrollo aplicada',
      'Pruebas y validaciones del sistema',
      'Manual de usuario completo',
      'Resultados y análisis',
      'Conclusiones y recomendaciones',
      'Formateo según normas académicas',
      'Diapositivas profesionales para defensa',
      'Revisión anti-plagio garantizada',
      'Tiempo: 3-4 semanas'
    ],
    complexity: 'Media-Alta',
    risk: 'Bajo',
    timeWeeks: '3-4 semanas',
    semester: '10'
  },
  {
    id: 'proyecto-final',
    title: 'Proyecto Final + Producción',
    description: 'Desarrollo completo del sistema con implementación en producción y entrega lista para usar',
    price: 5200,
    features: [
      'Desarrollo completo del sistema',
      'Implementación de todas las funcionalidades',
      'Puesta en producción/deployment',
      'Sistema 100% funcional',
      'Diapositivas profesionales para defensa',
      'Asesoría para defensa incluida',
      'Manuales técnicos y de usuario',
      'Capacitación en el proyecto',
      'Tiempo: 4-6 semanas'
    ],
    complexity: 'Muy Alta',
    risk: 'Medio',
    timeWeeks: '4-6 semanas',
    semester: '10',
    highlighted: true
  }
];

// Todos los servicios combinados
export const ALL_SERVICES = [...NINTH_SEMESTER_SERVICES, ...TENTH_SEMESTER_SERVICES];
