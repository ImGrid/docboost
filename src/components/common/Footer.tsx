import React from "react";
import { COMPANY_INFO, NAVIGATION_SECTIONS } from "../../utils/constants";
import { CONTACT_DATA } from "../../data/contact";
// ✅ Iconos profesionales de Lucide React
import {
  FileText, // Perfil de Trabajo de Grado
  Code2, // Desarrollo de Proyectos
  GraduationCap, // Documentación Técnica
  Rocket, // Puesta en Producción
  Phone, // Contacto WhatsApp
} from "lucide-react";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Decoración de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-primary to-secondary -top-48 -left-48 blur-3xl"></div>
        <div className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-secondary to-accent -bottom-48 -right-48 blur-3xl"></div>
      </div>

      <div className="relative px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Contenido principal - Grid optimizado */}
        <div className="grid gap-8 lg:grid-cols-12 md:grid-cols-8">
          {/* Logo y descripción - Más compacto */}
          <div className="lg:col-span-4 md:col-span-3">
            <div className="mb-4">
              <img
                src="/logodoc.webp"
                alt={`${COMPANY_INFO.name} - Logo`}
                className="w-auto h-10 transition-transform duration-300 cursor-pointer hover:scale-105 filter brightness-0 invert"
                loading="lazy"
                decoding="async"
                onClick={scrollToTop}
              />
            </div>
            <p className="max-w-xs mb-4 text-sm leading-relaxed text-gray-300">
              {COMPANY_INFO.tagline}.
            </p>
          </div>

          {/* Enlaces rápidos - Más organizados */}
          <div className="lg:col-span-3 md:col-span-2">
            <h4 className="flex items-center mb-4 font-semibold text-white">
              <span className="w-2 h-2 mr-2 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
              Navegación
            </h4>
            <div className="space-y-2">
              {NAVIGATION_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block text-sm text-gray-300 transition-all duration-200 hover:text-primary hover:translate-x-1"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Servicios destacados con iconos profesionales */}
          <div className="lg:col-span-3 md:col-span-3">
            <h4 className="flex items-center mb-4 font-semibold text-white">
              <span className="w-2 h-2 mr-2 rounded-full bg-gradient-to-r from-secondary to-accent"></span>
              Servicios
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2 text-secondary" />
                <span>Perfil de Trabajo de Grado</span>
              </div>
              <div className="flex items-center">
                <Code2 className="w-4 h-4 mr-2 text-secondary" />
                <span>Desarrollo de Proyectos</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-4 h-4 mr-2 text-secondary" />
                <span>Documentación Técnica</span>
              </div>
              <div className="flex items-center">
                <Rocket className="w-4 h-4 mr-2 text-secondary" />
                <span>Puesta en Producción</span>
              </div>
            </div>
          </div>

          {/* Contacto mejorado con icono profesional */}
          <div className="lg:col-span-2">
            <h4 className="flex items-center mb-4 font-semibold text-white">
              <span className="w-2 h-2 mr-2 rounded-full bg-gradient-to-r from-accent to-primary"></span>
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="flex items-center justify-center w-8 h-8 mr-3 transition-colors duration-200 bg-gray-700 rounded-lg group-hover:bg-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-white">WhatsApp</div>
                  <div>
                    +{CONTACT_DATA.countryCode} {CONTACT_DATA.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
