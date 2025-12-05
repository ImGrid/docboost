import React from 'react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import CodeEditor from '../components/ui/CodeEditor';
import { COMPANY_INFO } from '../utils/constants';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-light">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-primary/5 blur-3xl"></div>
        <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-secondary/5 blur-3xl"></div>
        <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-accent/5 blur-3xl"></div>
      </div>

      <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Columna de Contenido */}
          <div className="text-center lg:text-left animate-slide-up">
            
            {/* Badge de Especialización */}
            <div className="mb-6">
              <Badge variant="gradient" glow className="text-sm font-medium">
                ⚡ {COMPANY_INFO.tagline}
              </Badge>
            </div>

            {/* Headline Principal */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Completa tu{' '}
              <span className="text-gradient">Tesis de Sistemas</span>{' '}
              con Expertos
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              {COMPANY_INFO.description}. 
              Especializado en Ingeniería de Sistemas y Sistemas Electrónicos.
            </p>

            {/* CTAs Principales */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('servicios')}
                className="shadow-primary"
              >
                Ver Nuestros Servicios
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('precios')}
              >
                Consultar Precios
              </Button>
            </div>
          </div>

          {/* Columna Visual - CodeEditor */}
          <div className="relative flex items-center justify-center">
            <CodeEditor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;