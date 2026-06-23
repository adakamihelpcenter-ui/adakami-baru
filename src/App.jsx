import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkflowSection from './components/WorkflowSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const SITE_URL = 'https://www.layanan-bantuan-adakami-official.asia';

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

  useEffect(() => {
    document.title = currentMeta.title;
    setMetaContent('meta[name="description"]', currentMeta.description);
    setMetaContent('meta[property="og:title"]', currentMeta.title);
    setMetaContent('meta[property="og:description"]', currentMeta.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', currentMeta.title);
    setMetaContent('meta[name="twitter:description"]', currentMeta.description);
    setCanonicalUrl(canonicalUrl);
  }, [canonicalUrl, currentMeta.description, currentMeta.title]);

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
    </>
  );
}

export default App;
