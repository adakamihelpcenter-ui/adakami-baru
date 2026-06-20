export const trackWhatsAppClick = () => {
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      send_to: 'AW-18245452221/oykTCLrz8sEcEL2DjvxD'
    });
  }
};
