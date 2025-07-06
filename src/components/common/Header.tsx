import React, { useState } from 'react';
import Button from '../ui/Button';
import { COMPANY_INFO, NAVIGATION_SECTIONS } from '../../utils/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 shadow-sm bg-white/95 backdrop-blur-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo horizontal - DocBoost */}
          <div className="flex items-center">
            <div className="relative w-auto h-12 overflow-hidden transition-transform duration-300 cursor-pointer hover:scale-105">
              <img
                src="/logodoc.webp"
                alt={`${COMPANY_INFO.name} - Logo`}
                className="object-contain w-full h-full"
                loading="eager"
                decoding="async"
                style={{ height: '48px', width: 'auto' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="items-center hidden space-x-8 md:flex">
            {NAVIGATION_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary"
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('contacto')}
            >
              Solicitar Cotización
            </Button>
          </div>

          {/* Hamburger Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 transition-colors duration-200 rounded-lg md:hidden hover:text-primary hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {NAVIGATION_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full px-3 py-2 font-medium text-left text-gray-600 transition-colors duration-200 rounded-lg hover:text-primary hover:bg-gray-50"
                >
                  {section.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => scrollToSection('contacto')}
                >
                  Solicitar Cotización
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;