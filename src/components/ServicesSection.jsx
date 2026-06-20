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
      title: "Informasi Akun",
      description: "Bantuan verifikasi status akun dan penyelesaian kendala akses ke sistem.",
      delay: "0.1s"
    },
    {
      icon: Headset,
      title: "Dukungan Teknis",
      description: "Panduan lengkap jika Anda mengalami kesulitan navigasi pada aplikasi atau website.",
      delay: "0.2s"
    },
    {
      icon: FileText,
      title: "Panduan Penggunaan",
      description: "Edukasi dan penjelasan tahapan penggunaan sistem sesuai prosedur standar.",
      delay: "0.3s"
    },
    {
      icon: MessagesSquare,
      title: "Laporan & Masukan",
      description: "Saluran terbuka untuk saran, masukan, dan laporan kendala yang diproses secara rahasia.",
      delay: "0.4s"
    }
  ];

  return (
    <section id="layanan" className="py-24 bg-adakami-darker relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal-item">
          <h2 className="text-sm font-bold tracking-widest text-adakami-green uppercase mb-3">Layanan Dukungan</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Apa yang Kami Sediakan</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Layanan dukungan komprehensif untuk memastikan kenyamanan Anda dalam menggunakan sistem dan memahami prosedur operasional dengan baik.</p>
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
