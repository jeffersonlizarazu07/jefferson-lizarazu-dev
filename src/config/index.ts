/**
 * Configuración centralizada del proyecto
 * Un solo lugar para cambiar configuraciones globales
 */

export const config = {
  github: {
    username: "jeffersonlizarazu07",
  },
  emailjs: {
    publicKey: import.meta.env.VITE_API_KEY_EMAILJS as string,
    serviceId: import.meta.env.VITE_OUTLOOK_SERVICE_ID as string,
    templateId: import.meta.env.VITE_TEMPLATE_ID as string,
  },
  portfolio: {
    title: "Mi Portafolio",
    description: "Desarrollador Full Stack",
  },
} as const;

export type Config = typeof config;