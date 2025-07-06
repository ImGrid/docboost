import { CONTACT_INFO, FORM_CONFIG, URLS } from '../utils/constants';

// Información de contacto principal
export const CONTACT_DATA = {
  phone: '72049242',
  whatsapp: '72049242', 
  countryCode: CONTACT_INFO.countryCode,
  location: 'La Paz, Bolivia'
};

// Mensajes predefinidos para WhatsApp
export const WHATSAPP_MESSAGES = {
  general: FORM_CONFIG.whatsappMessage,
  services: 'Hola! Me gustaría conocer más detalles sobre sus servicios para tesis de Ingeniería de Sistemas.',
  pricing: 'Hola! Me interesa conocer los precios de sus paquetes para tesis.',
  urgent: 'Hola! Necesito ayuda urgente con mi tesis. ¿Manejan entregas en menos de 2 semanas?',
  ninth: 'Hola! Estoy en 9° semestre y necesito ayuda con el perfil y avance de mi proyecto.',
  tenth: 'Hola! Estoy en 10° semestre y necesito ayuda para finalizar mi tesis.',
  complete: 'Hola! Me interesa el paquete completo para ambos semestres (9° y 10°).'
};

// Funciones helper para generar URLs
export const getWhatsAppURL = (message?: keyof typeof WHATSAPP_MESSAGES | string) => {
  let messageText = '';
  
  if (message) {
    messageText = typeof message === 'string' && message in WHATSAPP_MESSAGES 
      ? WHATSAPP_MESSAGES[message as keyof typeof WHATSAPP_MESSAGES]
      : message;
  }
  
  return URLS.whatsapp(CONTACT_DATA.phone, messageText);
};

// Información adicional para la sección de contacto
export const CONTACT_FEATURES = [
  {
    icon: 'zap',
    title: 'Respuesta Inmediata',
    description: 'Te respondemos al instante'
  },
  {
    icon: 'shield',
    title: 'Sin Compromiso',
    description: 'Consulta sin obligación'
  },
  {
    icon: 'clock',
    title: 'Asesoría Gratis',
    description: 'Primera consulta gratuita'
  }
];