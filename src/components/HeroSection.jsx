import { MessageSquareText, ArrowDown } from 'lucide-react';

const HeroSection = ({ whatsappLink }) => {
  return (
    <section id="beranda" className="hero-bg pt-32 pb-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-adakami-darker"></div>
      <div className="text-center text-white max-w-5xl px-6 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-adakami-green/30 text-adakami-green text-sm font-medium mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Layanan Aktif 24 Jam
        </div>

        <div className="flex justify-center mb-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/adakamilogo.ico"
              alt="Logo Pusat Bantuan"
              className="h-32 md:h-48 lg:h-60 object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </a>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          Pusat Bantuan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-adakami-green">
            Pelanggan
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Platform dukungan independen untuk panduan sistem, edukasi pengguna, dan penyelesaian kendala teknis yang aman, cepat, dan profesional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-adakami-green hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-900/50 flex items-center justify-center gap-3 transition-all hover:-translate-y-1">
              <MessageSquareText />
              Ajukan Pertanyaan
            </button>
          </a>
          <a href="#layanan" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto glass-card hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all">
              Pelajari Layanan
              <ArrowDown className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
