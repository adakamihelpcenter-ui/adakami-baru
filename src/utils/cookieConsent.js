/**
 * Cookie Consent Management
 */

const COOKIE_CONSENT_KEY = 'adakami_cookie_consent';
const COOKIE_PREFERENCES_KEY = 'adakami_cookie_preferences';

// Get consent status
export const getConsentStatus = () => {
  try {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    return consent ? JSON.parse(consent) : null;
  } catch (error) {
    console.error('Error reading consent status:', error);
    return null;
  }
};

// Get cookie preferences
export const getCookiePreferences = () => {
  try {
    const preferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    return preferences
      ? JSON.parse(preferences)
      : {
          analytics: false,
          marketing: false,
          essential: true,
        };
  } catch (error) {
    console.error('Error reading preferences:', error);
    return {
      analytics: false,
      marketing: false,
      essential: true,
    };
  }
};

// Save consent status
export const saveConsentStatus = (accepted, preferences = {}) => {
  try {
    const consentData = {
      accepted,
      timestamp: new Date().toISOString(),
      version: '1.0',
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));

    const preferencesData = {
      analytics: preferences.analytics ?? (accepted ? true : false),
      marketing: preferences.marketing ?? (accepted ? true : false),
      essential: true, // Always true
    };
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferencesData));

    return true;
  } catch (error) {
    console.error('Error saving consent:', error);
    return false;
  }
};

// Clear consent
export const clearConsent = () => {
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    localStorage.removeItem(COOKIE_PREFERENCES_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing consent:', error);
    return false;
  }
};

// Check if user has consented to analytics
export const hasAnalyticsConsent = () => {
  const preferences = getCookiePreferences();
  return preferences.analytics === true;
};

// Check if user has consented to marketing
export const hasMarketingConsent = () => {
  const preferences = getCookiePreferences();
  return preferences.marketing === true;
};

// Get consent age (days since consent)
export const getConsentAge = () => {
  try {
    const consent = getConsentStatus();
    if (!consent || !consent.timestamp) return null;
    const consentDate = new Date(consent.timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - consentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  } catch (error) {
    console.error('Error calculating consent age:', error);
    return null;
  }
};

// Show consent banner if needed
export const shouldShowConsentBanner = () => {
  const consent = getConsentStatus();
  return consent === null || consent === undefined;
};
