import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { hasAnalyticsConsent, hasMarketingConsent } from './utils/cookieConsent'

// Initialize analytics based on consent
const initializeAnalytics = () => {
  // Check if user has analytics consent
  const analyticsConsent = hasAnalyticsConsent();
  const marketingConsent = hasMarketingConsent();

  // Update gtag config based on consent
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': analyticsConsent ? 'granted' : 'denied',
      'ad_storage': marketingConsent ? 'granted' : 'denied',
    });
  }
};

// Initialize analytics on load
initializeAnalytics();

// Listen for consent changes
window.addEventListener('storage', () => {
  initializeAnalytics();
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
