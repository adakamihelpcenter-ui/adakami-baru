import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkflowSection from './components/WorkflowSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CookieConsent from './components/CookieConsent';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { trackPageView, trackScrollDepth } from './utils/analytics';

const SITE_URL = 'https://adakamihelpcenter-ui.vercel.app';

const pageMeta = {
  '/': {
    title: 'Pusat Bantuan Pelanggan 24 Jam | Layanan Informasi Independen',
    description: 'Pusat layanan informasi dan bantuan pelanggan 24 jam. Kami membantu menjawab pertanyaan dan memberikan panduan umum secara profesional.',
  },
  '/privacy': {
    title: 'Kebijakan Privasi | Pusat Bantuan Pelanggan',
    description: 'Kebijakan privasi Pusat Bantuan Pelanggan untuk menjelaskan pengumpulan, penggunaan, dan perlindungan informasi pengguna.',
  },
  '/terms': {
    title: 'Syarat dan Ketentuan | Pusat Bantuan Pelanggan',
    description: 'Syarat dan ketentuan penggunaan platform Pusat Bantuan Pelanggan sebagai layanan edukasi dan informasi teknologi independen.',
  },
};

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute('content', content);
  }
};

const setCanonicalUrl = (url) => {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', url);
  }
};

function App() {
  const whatsappLink = 'https://wa.me/628217506899?text=Hallo%20admin,%20saya%20mau%20bertanya';
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const currentMeta = pageMeta[pathname] || pageMeta['/'];
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

  // Track page view on mount and pathname change
  useEffect(() => {
    document.title = currentMeta.title;
    setMetaContent('meta[name="description"]', currentMeta.description);
    setMetaContent('meta[property="og:title"]', currentMeta.title);
    setMetaContent('meta[property="og:description"]', currentMeta.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', currentMeta.title);
    setMetaContent('meta[name="twitter:description"]', currentMeta.description);
    setCanonicalUrl(canonicalUrl);

    // Track page view
    trackPageView(pathname, currentMeta.title);
  }, [canonicalUrl, currentMeta.description, currentMeta.title, pathname]);

  // Track scroll depth
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const scrollPercentage = Math.round(
          ((scrollTop + windowHeight) / documentHeight) * 100
        );

        // Track at 25%, 50%, 75%, 100%
        if (
          scrollPercentage >= 25 &&
          scrollPercentage < 50
        ) {
          trackScrollDepth(25);
        } else if (
          scrollPercentage >= 50 &&
          scrollPercentage < 75
        ) {
          trackScrollDepth(50);
        } else if (
          scrollPercentage >= 75 &&
          scrollPercentage < 100
        ) {
          trackScrollDepth(75);
        } else if (scrollPercentage >= 100) {
          trackScrollDepth(100);
        }
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const renderPage = () => {
    if (pathname === '/privacy') {
      return <Privacy />;
    }

    if (pathname === '/terms') {
      return <Terms />;
    }

    return (
      <>
        <HeroSection whatsappLink={whatsappLink} />
        <ServicesSection whatsappLink={whatsappLink} />
        <WorkflowSection />
        <FAQSection />
      </>
    );
  };

  return (
    <>
      <Navbar whatsappLink={whatsappLink} />
      <main>{renderPage()}</main>
      <Footer whatsappLink={whatsappLink} />
      <WhatsAppFloat whatsappLink={whatsappLink} />
      <CookieConsent />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
