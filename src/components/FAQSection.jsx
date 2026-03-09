import { useEffect, useRef } from 'react';
import { HelpCircle, Clock, Shield } from 'lucide-react';

const FAQSection = () => {
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

  const faqs = [
    {
      icon: HelpCircle,
      question: "Apakah layanan bantuan ini berbayar?",
      answer: "Tidak. Seluruh layanan informasi dan panduan pelanggan kami disediakan secara gratis tanpa pungutan biaya apa pun.",
      delay: "0.1s"
    },
    {
      icon: Clock,
      question: "Kapan saya bisa menghubungi tim bantuan?",
      answer: "Layanan kami beroperasi 24 jam setiap hari. Namun, respons paling cepat akan diberikan pada jam operasional kerja.",
      delay: "0.2s"
    },
    {
      icon: Shield,
      question: "Apakah data saya aman?",
      answer: "Ya, kerahasiaan percakapan sangat kami jaga. Kami hanya akan meminta data dasar yang diperlukan untuk proses verifikasi kendala.",
      delay: "0.3s"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-adakami-darker" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 reveal-item">
          <h2 className="text-sm font-bold tracking-widest text-adakami-green uppercase mb-3">Informasi Tambahan</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Pertanyaan Umum</h3>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <div
                key={index}
                className="reveal-item glass-card p-6 rounded-xl border-l-4 border-l-adakami-green"
                style={{ animationDelay: faq.delay }}
              >
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Icon className="w-5 h-5 text-adakami-green" />
                  {faq.question}
                </h4>
                <p className="text-gray-400 text-sm pl-7">{faq.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
