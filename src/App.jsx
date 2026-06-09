import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkflowSection from './components/WorkflowSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const whatsappLink = "https://wa.me/628217506899?text=Hallo%20admin,%20saya%20mau%20bertanya";

  return (
    <>
      <Navbar whatsappLink={whatsappLink} />
      <HeroSection whatsappLink={whatsappLink} />
      <ServicesSection whatsappLink={whatsappLink} />
      <WorkflowSection />
      <FAQSection />
      <Footer whatsappLink={whatsappLink} />
      <WhatsAppFloat whatsappLink={whatsappLink} />
    </>
  );
}

export default App;
