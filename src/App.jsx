import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkflowSection from './components/WorkflowSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const whatsappLink = "https://wa.me/62819808982?text=Hallo%20admin,%20saya%20mau%20bertanya";

  useEffect(() => {
    document.addEventListener('contextmenu', e => e.preventDefault());

    const handleKeyDown = (e) => {
      if (e.keyCode === 123 ||
         (e.ctrlKey && e.shiftKey && (e.keyCode === 'I'.charCodeAt(0) || e.keyCode === 'C'.charCodeAt(0) || e.keyCode === 'J'.charCodeAt(0))) ||
         (e.ctrlKey && (e.keyCode === 'U'.charCodeAt(0) || e.keyCode === 'S'.charCodeAt(0) || e.keyCode === 'C'.charCodeAt(0)))) {
        return false;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', e => e.preventDefault());

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Navbar whatsappLink={whatsappLink} />
      <HeroSection whatsappLink={whatsappLink} />
      <ServicesSection whatsappLink={whatsappLink} />
      <WorkflowSection />
      <FAQSection />
      <Footer whatsappLink={whatsappLink} />
      <WhatsAppFloat whatsappLink={whatsappLink} />
      <Analytics />
    </>
  );
}

export default App;
