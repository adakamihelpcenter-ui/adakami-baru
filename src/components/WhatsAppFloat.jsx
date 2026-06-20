import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/gtag';

const WhatsAppFloat = ({ whatsappLink }) => {
  const handleClick = () => {
    trackWhatsAppClick();
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#25D366] text-white p-4 rounded-full z-[100] wa-float transition-all duration-300 flex items-center justify-center animate-bounce"
    >
      <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
    </a>
  );
};

export default WhatsAppFloat;
