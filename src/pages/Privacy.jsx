const Privacy = () => {
  return (
    <div className="min-h-screen bg-adakami-dark text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-adakami-green">Kebijakan Privasi</h1>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-8">
          <p className="text-yellow-400 text-sm font-medium">
            Peringatan Penting: Platform ini adalah layanan edukasi dan informasi teknologi independen. Kami bukan layanan resmi dari brand, aplikasi, atau produk tertentu.
          </p>
        </div>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Pendahuluan</h2>
            <p>Pusat Bantuan ini berkomitmen untuk melindungi privasi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Informasi yang Kami Kumpulkan</h2>
            <p>Kami hanya mengumpulkan informasi yang diperlukan untuk:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Memberikan informasi dan edukasi teknologi</li>
              <li>Memberikan konsultasi teknis umum</li>
              <li>Merespons pertanyaan dan masukan</li>
              <li>Meningkatkan kualitas layanan edukasi kami</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Penggunaan Data</h2>
            <p>Informasi yang Anda berikan akan digunakan secara eksklusif untuk keperluan edukasi dan informasi, serta tidak akan dibagikan kepada pihak ketiga tanpa persetujuan Anda.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Keamanan Data</h2>
            <p>Kami menggunakan enkripsi dan protokol keamanan standar industri untuk melindungi data Anda dari akses, pengubahan, atau penghapusan yang tidak sah.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Hak Pengguna</h2>
            <p>Anda berhak untuk:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Mengakses data pribadi Anda</li>
              <li>Meminta koreksi data yang salah</li>
              <li>Meminta penghapusan data Anda</li>
              <li>Membatasi penggunaan data Anda</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Kontak</h2>
            <p>Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami melalui saluran komunikasi yang tersedia di platform.</p>
          </section>

          <div className="mt-12 pt-6 border-t border-white/10 text-sm text-gray-400">
            <p>Terakhir diperbarui: 21 Mei 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
