const Navbar = ({ whatsappLink }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 glass-card bg-adakami-darker/80 shadow-lg z-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform"
            >
              <img src="/helpcenter-logo.ico" alt="Logo Pusat Bantuan" className="h-10 md:h-12 drop-shadow-md" />
            </a>
            <div className="hidden sm:block">
              <span className="block text-lg font-bold text-adakami-green leading-none">Pusat Bantuan</span>
              <span className="block text-xs text-gray-400 mt-1">Dukungan Pelanggan 24 Jam</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-gray-300">
            <a href="#beranda" className="hover:text-adakami-green transition-colors">Beranda</a>
            <a href="#layanan" className="hover:text-adakami-green transition-colors">Layanan</a>
            <a href="#alur" className="hover:text-adakami-green transition-colors">Cara Kerja</a>
            <a href="#faq" className="hover:text-adakami-green transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
