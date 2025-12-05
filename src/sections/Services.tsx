import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { NINTH_SEMESTER_SERVICES, TENTH_SEMESTER_SERVICES } from '../data/services';

const Services: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getButtonVariant = (highlighted?: boolean) => {
    return highlighted ? 'primary' as const : 'outline' as const;
  };

  return (
    <section id="servicios" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-light">
      
      {/* Elementos decorativos de fondo - IGUAL QUE HERO */}
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
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            Servicios por <span className="text-gradient">Semestre</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            Ofrecemos servicios modulares adaptados a cada etapa de tu tesis.
            Desde la documentación del perfil hasta la implementación completa.
          </p>

          {/* Disclaimer de precios referenciales */}
          <div className="max-w-4xl p-4 mx-auto mt-8 text-center bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Nota:</strong> Los precios mostrados son referenciales. El costo final se determina según la complejidad y alcance específico de tu proyecto.
            </p>
          </div>
        </motion.div>

        {/* 9° SEMESTRE */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900">
              9° Semestre - <span className="text-primary">Perfil de Trabajo de Grado</span>
            </h3>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Desarrollamos tu perfil y comenzamos con el prototipo inicial de tu proyecto
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {NINTH_SEMESTER_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  price={`~${service.price.toLocaleString('es-BO')}`}
                  features={service.features}
                  highlighted={service.highlighted}
                >
                  <Button
                    variant={getButtonVariant(service.highlighted)}
                    fullWidth
                    onClick={() => scrollToSection('contacto')}
                  >
                    Solicitar Cotización
                  </Button>
                </ServiceCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 10° SEMESTRE */}
        <div className="mb-12">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900">
              10° Semestre - <span className="text-secondary">Proyecto de Grado</span>
            </h3>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Completamos tu proyecto con documentación final e implementación en producción
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {TENTH_SEMESTER_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  price={`~${service.price.toLocaleString('es-BO')}`}
                  features={service.features}
                  highlighted={service.highlighted}
                >
                  <Button
                    variant={getButtonVariant(service.highlighted)}
                    fullWidth
                    onClick={() => scrollToSection('contacto')}
                  >
                    Solicitar Cotización
                  </Button>
                </ServiceCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA de servicios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('precios')}
            className="shadow-primary"
          >
            Ver Paquetes con Descuento
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;