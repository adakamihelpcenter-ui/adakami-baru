const Footer = ({ whatsappLink }) => {
  return (
    <footer className="bg-[#050c0a] text-gray-500 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/helpcenter-logo.ico"
                alt="Logo Pusat Bantuan"
                className="h-10 opacity-70 mb-6 grayscale hover:grayscale-0 transition-all"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Pusat layanan mandiri yang didedikasikan untuk memberikan edukasi, panduan sistem, dan penyelesaian kendala pengguna secara transparan.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#beranda" className="hover:text-adakami-green transition">Beranda</a></li>
              <li><a href="#layanan" className="hover:text-adakami-green transition">Layanan</a></li>
              <li><a href="#alur" className="hover:text-adakami-green transition">Cara Kerja</a></li>
              <li><a href="#faq" className="hover:text-adakami-green transition">Tanya Jawab</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Disclaimer Penting</h4>
            <p className="text-xs text-gray-400 leading-relaxed p-4 glass-card rounded-lg">
              Pusat bantuan ini adalah platform dukungan teknis independen. Kami tidak menyelenggarakan layanan keuangan, tidak memproses transaksi finansial, dan tidak memiliki afiliasi langsung dengan produk apa pun.
            </p>
          </div>
        </div>

        <div className="text-center text-xs border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Pusat Bantuan Pelanggan. Hak cipta dilindungi.</p>
          <div className="space-x-4">
            <a href="/privacy" className="hover:text-adakami-green transition">Privasi</a>
            <a href="/terms" className="hover:text-adakami-green transition">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
