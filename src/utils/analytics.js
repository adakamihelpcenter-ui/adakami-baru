/**
 * Google Analytics & Ads Conversion Tracking Utilities
 */

// Initialize gtag if available
const initializeGtag = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    return window.gtag;
  }
  return null;
};

// Track page view
export const trackPageView = (pagePath, pageTitle) => {
  const gtag = initializeGtag();
  if (gtag) {
    gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href,
    });
  }
};

// Track WhatsApp click (Lead conversion)
export const trackWhatsAppClick = (source) => {
  const gtag = initializeGtag();
  if (gtag) {
    // Google Ads Conversion
    gtag('event', 'conversion', {
      'value': 1.0,
      'currency': 'IDR',
      'transaction_id': `wa_${Date.now()}`,
    });

    // Custom event for GTM
    gtag('event', 'whatsapp_click', {
      'event_category': 'engagement',
      'event_label': source,
      'timestamp': new Date().toISOString(),
    });
  }
};

// Track form submission or service inquiry
export const trackServiceInquiry = (serviceName) => {
  const gtag = initializeGtag();
  if (gtag) {
    gtag('event', 'generate_lead', {
      'value': 1.0,
      'currency': 'IDR',
      'lead_category': serviceName,
    });

    gtag('event', 'service_inquiry', {
      'event_category': 'lead',
      'event_label': serviceName,
      'timestamp': new Date().toISOString(),
    });
  }
};

// Track page scroll depth
export const trackScrollDepth = (scrollPercentage) => {
  const gtag = initializeGtag();
  if (gtag) {
    gtag('event', 'scroll', {
      'event_category': 'engagement',
      'event_label': `${scrollPercentage}%`,
      'value': scrollPercentage,
    });
  }
};

// Track video or content engagement
export const trackEngagement = (engagementType, engagementLabel) => {
  const gtag = initializeGtag();
  if (gtag) {
    gtag('event', 'engagement', {
      'event_category': 'engagement',
      'event_label': `${engagementType}: ${engagementLabel}`,
      'timestamp': new Date().toISOString(),
    });
  }
};

// Track FAQ clicks
export const trackFAQClick = (questionNumber) => {
  const gtag = initializeGtag();
  if (gtag) {
    gtag('event', 'faq_interaction', {
      'event_category': 'engagement',
      'event_label': `FAQ Question ${questionNumber}`,
    });
  }
};

// Track custom event
export const trackCustomEvent = (eventName, eventData = {}) => {
  const gtag = initializeGtag();
  if (gtag) {
    gtag('event', eventName, eventData);
  }
};

// Push event to dataLayer (for GTM)
export const pushToDataLayer = (data) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
};
