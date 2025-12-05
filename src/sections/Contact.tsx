import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { Phone } from 'lucide-react';
import { CONTACT_DATA, getWhatsAppURL, WHATSAPP_MESSAGES } from '../data/contact';

const Contact: React.FC = () => {
  const openWhatsApp = () => {
    window.open(getWhatsAppURL(WHATSAPP_MESSAGES.general), '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 via-white to-light">
      <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <Badge variant="gradient" glow className="mb-4">
            <Phone className="w-4 h-4 mr-1" />
            Contacto
          </Badge>
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            ¿Listo para tu <span className="text-gradient">Tesis?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-600">
            Contáctanos por WhatsApp y te ayudamos con tu proyecto de tesis
          </p>
        </motion.div>

        {/* Tarjeta principal de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <Card variant="highlighted" className="max-w-2xl mx-auto">
            <div className="p-12">
              
              {/* Icono WhatsApp */}
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 bg-green-500 rounded-full">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>

              {/* Contenido */}
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Hablemos por WhatsApp
              </h3>
              
              <p className="mb-8 leading-relaxed text-gray-600">
                Nuestro equipo está listo para ayudarte con tu tesis. 
                Solo envíanos un mensaje y conversamos sobre tu proyecto.
              </p>

              {/* Número de teléfono */}
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-lg">
                  <Phone className="w-5 h-5 mr-2 text-green-600" />
                  <span className="font-mono text-lg font-semibold text-gray-900">
                    +{CONTACT_DATA.countryCode} {CONTACT_DATA.phone}
                  </span>
                </div>
              </div>

              {/* Botón principal - ICONO MÁS GRANDE */}
              <Button
                variant="secondary"
                size="xl"
                onClick={openWhatsApp}
                className="mb-6 shadow-secondary"
              >
                <div className="flex items-center">
                  {/* Icono más grande: w-8 h-8 en móvil, w-6 h-6 en desktop */}
                  <svg className="w-12 h-12 mr-3 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Escribir por WhatsApp</span>
                </div>
              </Button>

              {/* Información adicional */}
              <div className="grid gap-4 text-sm text-gray-600 md:grid-cols-2">
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
                  Respuesta rápida
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 mr-2 bg-blue-500 rounded-full"></div>
                  Cotización gratuita
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;