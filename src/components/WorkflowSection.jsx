import { useEffect, useRef } from 'react';
import { Smartphone, MessageCircleQuestion, CheckCircle2 } from 'lucide-react';

const WorkflowSection = () => {
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

  const steps = [
    {
      icon: Smartphone,
      title: "1. Hubungi Kami",
      description: "Klik tombol WhatsApp yang tersedia di halaman ini untuk terhubung langsung dengan sistem kami.",
      delay: "0.1s"
    },
    {
      icon: MessageCircleQuestion,
      title: "2. Sampaikan Kendala",
      description: "Jelaskan pertanyaan atau kendala yang Anda alami secara singkat kepada perwakilan kami.",
      delay: "0.3s"
    },
    {
      icon: CheckCircle2,
      title: "3. Dapatkan Solusi",
      description: "Tim kami akan memberikan panduan atau penyelesaian terbaik sesuai dengan prosedur operasi standar.",
      delay: "0.5s"
    }
  ];

  return (
    <section id="alur" className="py-24 bg-adakami-dark relative border-t border-b border-white/5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal-item">
          <h2 className="text-sm font-bold tracking-widest text-adakami-green uppercase mb-3">Cara Kerja</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Alur Layanan Bantuan</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-adakami-green/10 via-adakami-green/50 to-adakami-green/10 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="reveal-item relative z-10 flex flex-col items-center text-center"
                style={{ animationDelay: step.delay }}
              >
                <div className="w-20 h-20 rounded-full bg-adakami-darker border-4 border-adakami-dark flex items-center justify-center text-adakami-green shadow-lg shadow-green-900/20 mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-gray-400 text-sm px-4">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
