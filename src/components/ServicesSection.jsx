import { useEffect, useRef } from 'react';
import { ShieldCheck, Headset, FileText, MessagesSquare } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/gtag';

const ServicesSection = ({ whatsappLink }) => {
  const handleClick = () => {
    trackWhatsAppClick();
  };
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealItems = sectionRef.current?.querySelectorAll('.reveal-item');
    revealItems?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: ShieldCheck,
      title: "Edukasi & Informasi",
      description: "Panduan umum seputar sistem dan teknologi untuk membantu memahami layanan digital.",
      delay: "0.1s"
    },
    {
      icon: Headset,
      title: "Konsultasi Teknis",
      description: "Diskusi dan konsultasi seputar penggunaan aplikasi serta troubleshooting umum.",
      delay: "0.2s"
    },
    {
      icon: FileText,
      title: "Panduan Pengguna",
      description: "Edukasi langkah demi langkah untuk memahami fitur dan fungsi sistem digital.",
      delay: "0.3s"
    },
    {
      icon: MessagesSquare,
      title: "Saran & Masukan",
      description: "Saluran terbuka untuk berbagi pengalaman, saran, dan masukan seputar teknologi.",
      delay: "0.4s"
    }
  ];

  return (
    <section id="layanan" className="py-24 bg-adakami-darker relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal-item">
          <h2 className="text-sm font-bold tracking-widest text-adakami-green uppercase mb-3">Layanan Edukasi</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Apa yang Kami Sediakan</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Panduan edukasi dan informasi umum seputar teknologi untuk membantu Anda memahami sistem digital dengan lebih baik.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="reveal-item service-card glass-card p-8 rounded-2xl block group cursor-pointer"
                style={{ animationDelay: service.delay }}
              >
                <div className="icon-box">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-adakami-green transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
