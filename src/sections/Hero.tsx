import React, { useState, useEffect } from 'react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { COMPANY_INFO } from '../utils/constants';
// Iconos de lucide-react (ya disponible según los documentos)
import { 
  Database,
  Users,
  BarChart3,
  Rocket
} from 'lucide-react';

const Hero: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Rotación automática de cartas cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentCard((prev) => (prev + 1) % 3);
        setIsTransitioning(false);
      }, 100);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Función para obtener las clases de estado de cada carta (responsive)
  const getCardClasses = (cardIndex: number) => {
    const position = (cardIndex - currentCard + 3) % 3;
    const baseClasses = "absolute bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-1000 ease-out";
    
    if (isTransitioning) {
      return `${baseClasses} duration-1200`;
    }
    
    switch (position) {
      case 0: // Front
        return `${baseClasses} transform translate-x-0 rotate-0 z-30 opacity-100`;
      case 1: // Middle - ajuste responsive
        return `${baseClasses} transform translate-x-2 sm:translate-x-3 lg:translate-x-4 rotate-2 sm:rotate-3 z-20 opacity-80`;
      case 2: // Back - ajuste responsive  
        return `${baseClasses} transform translate-x-4 sm:translate-x-6 lg:translate-x-8 rotate-4 sm:rotate-6 z-10 opacity-60`;
      default:
        return baseClasses;
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

          {/* Columna Visual - Sistema de Cartas Responsive */}
          <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            
            {/* Contenedor de cartas responsive */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:w-[450px] h-80 sm:h-96 lg:h-[520px]">
              
              {/* CARTA 1 - Código Simulado */}
              <div className={`${getCardClasses(0)} w-full h-full sm:w-80 sm:h-96 lg:w-96 lg:h-[500px]`} style={{ transformOrigin: 'bottom center' }}>
                <div className="flex flex-col h-full p-6 sm:p-6 lg:p-8">
                  {/* Header simulado */}
                  <div className="flex items-center mb-6 space-x-3 sm:mb-6 lg:mb-8 sm:space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full sm:w-4 sm:h-4"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full sm:w-4 sm:h-4"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full sm:w-4 sm:h-4"></div>
                    <div className="ml-4 font-mono text-sm text-gray-500 sm:ml-4 sm:text-sm">TesisProyecto.js</div>
                  </div>
                  
                  {/* Código simulado responsive */}
                  <div className="flex-1 space-y-2 font-mono text-sm sm:space-y-2 lg:space-y-3 sm:text-sm lg:text-base">
                    <div className="text-purple-600">// 9° Semestre - Perfil</div>
                    <div className="text-blue-600">const perfilTesis = {'{'}</div>
                    <div className="ml-4 text-green-600 sm:ml-4 lg:ml-6">problema: "Definido",</div>
                    <div className="ml-4 text-green-600 sm:ml-4 lg:ml-6">objetivos: "Claros",</div>
                    <div className="ml-4 text-green-600 sm:ml-4 lg:ml-6">metodologia: "Establecida"</div>
                    <div className="text-blue-600">{'}'}</div>
                    <div className="mt-4 text-purple-600 sm:mt-4 lg:mt-6">// 10° Semestre - Implementación</div>
                    <div className="text-blue-600">proyecto.deploy()</div>
                  </div>
                </div>
              </div>

              {/* CARTA 2 - Dashboard Responsive */}
              <div className={`${getCardClasses(1)} w-full h-full sm:w-80 sm:h-96 lg:w-96 lg:h-[500px]`} style={{ transformOrigin: 'bottom center' }}>
                <div className="h-full p-3 text-white bg-gradient-to-br from-slate-900 to-slate-800 sm:p-4 lg:p-6 rounded-2xl">
                  
                  {/* Header responsive */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                    <div>
                      <h2 className="text-sm font-bold sm:text-base lg:text-lg">Sistema Académico</h2>
                      <p className="text-xs sm:text-sm text-slate-400">Panel de Administración</p>
                    </div>
                    <div className="flex items-center justify-center w-6 h-6 rounded-lg sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-purple-600">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Métricas responsive */}
                  <div className="grid grid-cols-2 gap-2 mb-3 sm:gap-3 lg:gap-4 sm:mb-4 lg:mb-6">
                    <div className="p-2 border rounded-lg bg-slate-800/50 backdrop-blur sm:p-3 lg:p-4 border-slate-700">
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm text-slate-400">Estudiantes</span>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-sm font-bold sm:text-lg lg:text-2xl">1,247</div>
                      <div className="text-xs text-green-400 sm:text-sm">+12% este mes</div>
                    </div>
                    
                    <div className="p-2 border rounded-lg bg-slate-800/50 backdrop-blur sm:p-3 lg:p-4 border-slate-700">
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm text-slate-400">Proyectos</span>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="text-sm font-bold sm:text-lg lg:text-2xl">89</div>
                      <div className="text-xs text-blue-400 sm:text-sm">+5% completados</div>
                    </div>
                    
                    <div className="p-2 border rounded-lg bg-slate-800/50 backdrop-blur sm:p-3 lg:p-4 border-slate-700">
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm text-slate-400">Defendidos</span>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                      </div>
                      <div className="text-sm font-bold sm:text-lg lg:text-2xl">45</div>
                      <div className="text-xs text-purple-400 sm:text-sm">100% aprobados</div>
                    </div>
                    
                    <div className="p-2 border rounded-lg bg-slate-800/50 backdrop-blur sm:p-3 lg:p-4 border-slate-700">
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm text-slate-400">Calificación</span>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div className="text-sm font-bold sm:text-lg lg:text-2xl">8.7</div>
                      <div className="text-xs text-yellow-400 sm:text-sm">Promedio</div>
                    </div>
                  </div>
                  
                  {/* Gráfico responsive */}
                  <div className="p-2 mb-2 border rounded-lg bg-slate-800/50 backdrop-blur sm:p-3 lg:p-4 border-slate-700 sm:mb-3 lg:mb-4">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-xs sm:text-sm text-slate-400">Progreso Semanal</span>
                      <span className="text-xs text-green-400 sm:text-sm">↗ +15%</span>
                    </div>
                    <div className="flex items-end h-8 space-x-1 sm:space-x-2 sm:h-12 lg:h-16">
                      <div className="w-2 rounded-t sm:w-3 bg-gradient-to-t from-blue-600 to-blue-400" style={{ height: '15px' }}></div>
                      <div className="w-2 rounded-t sm:w-3 bg-gradient-to-t from-blue-600 to-blue-400" style={{ height: '25px' }}></div>
                      <div className="w-2 rounded-t sm:w-3 bg-gradient-to-t from-green-600 to-green-400" style={{ height: '32px' }}></div>
                      <div className="w-2 rounded-t sm:w-3 bg-gradient-to-t from-green-600 to-green-400" style={{ height: '35px' }}></div>
                      <div className="w-2 rounded-t sm:w-3 bg-gradient-to-t from-purple-600 to-purple-400" style={{ height: '28px' }}></div>
                      <div className="w-2 rounded-t sm:w-3 bg-gradient-to-t from-blue-600 to-blue-400" style={{ height: '22px' }}></div>
                      <div className="w-2 rounded-t sm:w-3 bg-gradient-to-t from-green-600 to-green-400" style={{ height: '35px' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARTA 3 - Iconos responsive */}
              <div className={`${getCardClasses(2)} w-full h-full sm:w-80 sm:h-96 lg:w-96 lg:h-[500px]`} style={{ transformOrigin: 'bottom center' }}>
                <div className="relative flex flex-col justify-center h-full p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
                  
                  {/* Efectos de fondo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
                  <div className="absolute w-16 h-16 rounded-full top-5 left-5 sm:top-10 sm:left-10 sm:w-32 sm:h-32 bg-blue-400/10 blur-3xl"></div>
                  <div className="absolute w-12 h-12 rounded-full bottom-5 right-5 sm:bottom-10 sm:right-10 sm:w-24 sm:h-24 bg-purple-400/10 blur-2xl"></div>
                  
                  {/* Contenido responsive */}
                  <div className="relative z-10">
                    
                    {/* Título */}
                    <div className="mb-4 text-center sm:mb-6 lg:mb-8">
                      <h3 className="mb-1 text-base font-bold text-gray-800 sm:mb-2 sm:text-lg lg:text-xl">Sistema Completo</h3>
                      <p className="text-xs text-gray-600 sm:text-sm">Tecnologías Integradas</p>
                    </div>
                    
                    {/* Grid de iconos responsive */}
                    <div className="grid grid-cols-2 gap-3 mb-4 sm:gap-6 lg:gap-8 sm:mb-6 lg:mb-8">
                      
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-10 h-10 mb-2 shadow-lg sm:w-14 sm:h-14 lg:w-16 lg:h-16 sm:mb-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600">
                          <Database className="w-5 h-5 text-white sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                        </div>
                        <span className="text-xs font-semibold text-gray-700">Base de Datos</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-10 h-10 mb-2 shadow-lg sm:w-14 sm:h-14 lg:w-16 lg:h-16 sm:mb-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-green-600">
                          <Users className="w-5 h-5 text-white sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                        </div>
                        <span className="text-xs font-semibold text-gray-700">Usuarios</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-10 h-10 mb-2 shadow-lg sm:w-14 sm:h-14 lg:w-16 lg:h-16 sm:mb-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600">
                          <BarChart3 className="w-5 h-5 text-white sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                        </div>
                        <span className="text-xs font-semibold text-gray-700">Reportes</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-10 h-10 mb-2 shadow-lg sm:w-14 sm:h-14 lg:w-16 lg:h-16 sm:mb-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600">
                          <Rocket className="w-5 h-5 text-white sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                        </div>
                        <span className="text-xs font-semibold text-gray-700">Deploy</span>
                      </div>
                    </div>
                    
                    {/* Badge central responsive */}
                    <div className="flex items-center justify-center">
                      <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-2 bg-green-400 rounded-full animate-pulse"></div>
                        Sistema Funcionando
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;