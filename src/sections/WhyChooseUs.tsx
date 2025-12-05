import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
// Iconos profesionales de Lucide React
import { 
  Target,           // Para Especialización Técnica
  Zap,             // Para Servicios Modulares  
  Eye,             // Para Proceso Transparente
  Shield,          // Para Garantía de Calidad
  Code,            // Para Tecnologías Actuales
  FileText,        // Para Documentación Completa
  MessageCircle,   // Para Consulta Inicial
  Calendar,        // Para Planificación
  Cog,             // Para Desarrollo
  Package          // Para Entrega y Soporte
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      number: "100%",
      label: "Aprobación",
      description: "Todos nuestros proyectos son aprobados",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      number: "2-6",
      label: "Semanas",
      description: "Tiempo promedio de entrega",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      number: "24/7",
      label: "Soporte",
      description: "Atención cuando lo necesites",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      number: "20%",
      label: "Descuento",
      description: "Máximo ahorro en paquetes completos",
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  const advantages = [
    {
      icon: Target,
      title: "Especialización Técnica",
      description: "Expertos en Ingeniería de Sistemas y Sistemas Electrónicos. Conocemos exactamente lo que buscan los tribunales.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Zap,
      title: "Servicios Modulares",
      description: "Puedes contratar solo lo que necesitas: desde el perfil hasta la implementación completa.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Eye,
      title: "Proceso Transparente",
      description: "Precios claros sin sorpresas. Sabes exactamente qué incluye cada servicio y cuánto cuesta.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Shield,
      title: "Garantía de Calidad",
      description: "Trabajamos hasta que tu proyecto sea aprobado. Incluimos correcciones post-revisión.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Code,
      title: "Tecnologías Actuales",
      description: "Utilizamos las últimas tecnologías y mejores prácticas del desarrollo de software.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: FileText,
      title: "Documentación Completa",
      description: "No solo código, sino documentación técnica completa que cumple estándares académicos.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Analizamos tu proyecto y te damos una cotización personalizada",
      icon: MessageCircle,
      color: "primary"
    },
    {
      step: "02",
      title: "Planificación",
      description: "Definimos cronograma, metodología y entregables específicos",
      icon: Calendar,
      color: "secondary"
    },
    {
      step: "03",
      title: "Desarrollo",
      description: "Trabajamos en tu proyecto con actualizaciones constantes",
      icon: Cog,
      color: "accent"
    },
    {
      step: "04",
      title: "Entrega y Soporte",
      description: "Entregamos tu proyecto completo con soporte post-entrega",
      icon: Package,
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        border: "border-primary",
        bg: "bg-primary",
        text: "text-primary",
        bgLight: "bg-primary/10"
      },
      secondary: {
        border: "border-secondary",
        bg: "bg-secondary",
        text: "text-secondary",
        bgLight: "bg-secondary/10"
      },
      accent: {
        border: "border-accent",
        bg: "bg-accent",
        text: "text-accent",
        bgLight: "bg-accent/10"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="por-que-elegirnos" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-light">
      
      {/* Fondo consistente con Hero y Services */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-primary/5 blur-3xl"></div>
        <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-secondary/5 blur-3xl"></div>
        <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-accent/5 blur-3xl"></div>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center"
        >
          <Badge variant="gradient" glow className="mb-4">
            ⭐ ¿Por Qué DocBoost?
          </Badge>
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            La Mejor Opción para tu <span className="text-gradient">Tesis</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            Somos especialistas en tesis de Ingeniería de Sistemas con resultados comprobados
            y un proceso transparente que garantiza tu éxito académico.
          </p>
        </motion.div>

        {/* Estadísticas destacadas con mejor diseño */}
        <div className="grid grid-cols-2 gap-6 mb-20 lg:grid-cols-4 animate-slide-up">
          {stats.map((stat, index) => (
            <Card key={index} variant="highlighted" hover>
              <div className="p-6 text-center">
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                </div>
                <div className="mb-2 text-lg font-semibold text-gray-900">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Ventajas principales con mejor visibilidad */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900">
              Nuestras <span className="text-gradient">Ventajas</span>
            </h3>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Lo que nos diferencia de otros servicios de tesis
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card variant="highlighted" hover>
                  <div className="p-6">
                    {/* Icono en círculo con colores vibrantes mantenidos */}
                    <div className={`w-16 h-16 ${advantage.bgColor} rounded-full flex items-center justify-center mb-4`}>
                      <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-gray-900">
                      {advantage.title}
                    </h4>
                    <p className="leading-relaxed text-gray-600">
                      {advantage.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Proceso de trabajo rediseñado */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900">
              Nuestro <span className="text-gradient">Proceso</span>
            </h3>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Un proceso claro y transparente desde el primer contacto hasta la entrega final
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const colors = getColorClasses(step.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card variant="highlighted" hover>
                    <div className="p-6 text-center">
                      {/* Estructura integrada: número prominente */}
                      <div className="relative mb-6">
                        <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center mx-auto`}>
                          <span className="text-2xl font-bold text-white">{step.step}</span>
                        </div>
                      </div>

                      <h4 className="mb-3 text-lg font-bold text-gray-900">
                        {step.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* CTA final corregido */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <Card variant="highlighted">
            <div className="p-8 text-white bg-gradient-to-r from-primary to-secondary rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold">
                ¿Convencido? Comencemos tu proyecto hoy
              </h3>
              <p className="max-w-2xl mx-auto mb-6 text-blue-100">
                Miles de estudiantes ya han logrado graduarse con nuestra ayuda.
                Tu éxito académico está a un clic de distancia.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToSection('contacto')}
                >
                  Solicitar Cotización Gratuita
                </Button>
                <button
                  onClick={() => scrollToSection('precios')}
                  className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white rounded-lg hover:bg-white hover:text-primary"
                >
                  Ver Todos los Precios
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;