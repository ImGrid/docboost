import React from 'react';
import Button from '../components/ui/Button';
import { DiscountBadge, PopularBadge } from '../components/ui/Badge';
import { PRICING_PACKAGES, ADDITIONAL_SERVICES_PRICING } from '../data/pricing';
// Iconos profesionales de Lucide React
import { 
  Users,           // Para Asesoría para Defensa
  Settings,        // Para Correcciones Post-Revisión  
  GraduationCap,   // Para Capacitación en el Proyecto
  Presentation,    // Para Diapositivas
  FileText,        // Para Manuales
  Shield,          // Para Anti-Plagio
  CheckCircle2,    // Para Formateo
  Target           // Para Simulacro
} from 'lucide-react';

const Pricing: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatPrice = (min: number, max: number) => `${min} - ${max}`;

  const getServiceIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      '📱': <Presentation className="w-6 h-6 text-primary" />,
      '📖': <FileText className="w-6 h-6 text-primary" />,
      '🔍': <Shield className="w-6 h-6 text-primary" />,
      '📝': <CheckCircle2 className="w-6 h-6 text-primary" />,
      '🎯': <Target className="w-6 h-6 text-primary" />,
      '🎓': <Users className="w-6 h-6 text-primary" />,
      '🔄': <Settings className="w-6 h-6 text-primary" />,
      '📚': <GraduationCap className="w-6 h-6 text-primary" />
    };
    return iconMap[iconName] || <CheckCircle2 className="w-6 h-6 text-primary" />;
  };

  return (
    <section id="precios" className="py-20 bg-gradient-to-br from-gray-50 via-white to-light">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            Paquetes con <span className="text-gradient">Descuentos</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            Ahorra hasta <strong>20% comprando paquetes completos</strong>. 
            Precios transparentes sin sorpresas.
          </p>
        </div>

        {/* Paquetes Principales - NUEVO DISEÑO CON ALINEACIÓN PERFECTA */}
        <div className="grid gap-8 mb-16 lg:grid-cols-3 animate-slide-up">
          {PRICING_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="flex h-full">
              {/* Card con altura completa, flexbox Y TODOS LOS ESTILOS ORIGINALES */}
              <div className={`
                relative w-full rounded-xl backdrop-blur-sm transition-all duration-300 ease-out
                flex flex-col overflow-hidden group
                ${pkg.highlighted 
                  ? 'bg-gradient-to-br from-white to-light border-primary/20 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/30 ring-2 ring-primary/10 hover:ring-primary/20 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100' 
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:shadow-gray-200/50 hover:border-primary/30 hover:-translate-y-1 hover:scale-[1.02]'
                }
              `}>
                
                {/* Decoración de esquina para highlighted */}
                {pkg.highlighted && (
                  <div className="absolute w-2 h-2 rounded-full top-3 right-3 bg-gradient-to-br from-primary to-secondary opacity-60" />
                )}
                
                {/* Efecto de brillo sutil para hover */}
                <div className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">
                  <div className="absolute top-0 w-8 h-full transition-transform duration-1000 transform -skew-x-12 -left-4 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full" />
                </div>
                
                {/* Badge superior */}
                {pkg.badge && (
                  <div className="relative z-10 p-6 pb-0">
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-accent to-yellow-500">
                        {pkg.badge}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Header del paquete */}
                <div className="relative z-10 px-6 pt-6 pb-4 text-center">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{pkg.title}</h3>
                  <p className="text-sm text-gray-600">{pkg.subtitle}</p>
                  
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {formatPrice(pkg.priceRange.min, pkg.priceRange.max)}
                    </span>
                    <span className="ml-1 text-gray-500">Bs.</span>
                  </div>
                </div>
                
                {/* Lista de características - flex-1 para ocupar espacio disponible */}
                <div className="relative z-10 flex-1 px-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 text-secondary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Footer con badges y botón - SIEMPRE EN LA PARTE INFERIOR */}
                <div className="relative z-10 p-6 pt-4">
                  {pkg.originalPrice && (
                    <div className="mb-4 text-center">
                      <div className="text-sm text-gray-500 line-through">
                        Precio individual: {formatPrice(pkg.originalPrice.min, pkg.originalPrice.max)} Bs.
                      </div>
                      <div className="flex justify-center mt-2 space-x-2">
                        {pkg.highlighted && <PopularBadge />}
                        <DiscountBadge percentage={pkg.discount} />
                      </div>
                    </div>
                  )}
                  
                  <Button
                    variant={pkg.buttonVariant}
                    fullWidth
                    onClick={() => scrollToSection('contacto')}
                    className={pkg.highlighted ? 'shadow-primary' : ''}
                  >
                    {pkg.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Servicios Adicionales */}
        <div className="p-8 mb-16 bg-white shadow-lg rounded-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Servicios <span className="text-gradient">Adicionales</span>
            </h3>
            <p className="text-gray-600">Complementa tu proyecto con estos servicios extra</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ADDITIONAL_SERVICES_PRICING.map((service) => (
              <div key={service.id} className="p-6 text-center transition-all duration-300 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10">
                  {getServiceIcon(service.icon)}
                </div>
                <h4 className="mb-2 font-bold text-gray-900">{service.title}</h4>
                <div className="mb-2 text-2xl font-bold text-primary">{service.price}</div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="max-w-2xl p-8 mx-auto bg-white shadow-2xl rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              ¿Listo para comenzar tu <span className="text-gradient">tesis?</span>
            </h3>
            <p className="mb-6 text-gray-600">
              Contáctanos para una cotización personalizada según tus necesidades específicas
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('contacto')}
                className="shadow-primary"
              >
                Solicitar Cotización Gratuita
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contacto')}
              >
                Hacer Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;