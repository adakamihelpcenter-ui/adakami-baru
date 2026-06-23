import { useEffect, useState } from 'react';
import { X, Info } from 'lucide-react';
import { getConsentStatus, saveConsentStatus, getCookiePreferences } from '../utils/cookieConsent';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = getConsentStatus();
    if (!consent) {
      setShowBanner(true);
    } else {
      const prefs = getCookiePreferences();
      setPreferences(prefs);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    saveConsentStatus(true, allPreferences);
    setShowBanner(false);
    setPreferences(allPreferences);
    window.location.reload();
  };

  const handleRejectAll = () => {
    const minimalPreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    saveConsentStatus(false, minimalPreferences);
    setShowBanner(false);
    setPreferences(minimalPreferences);
  };

  const handleSavePreferences = () => {
    saveConsentStatus(true, preferences);
    setShowBanner(false);
    setShowPreferences(false);
    window.location.reload();
  };

  const togglePreference = (key) => {
    if (key === 'essential') return; // Essential always on
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      {!showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 bg-adakami-darker border-t border-adakami-green/30 shadow-2xl z-50 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <Info className="w-5 h-5 text-adakami-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Privasi & Cookie</h3>
                    <p className="text-gray-300 text-sm">
                      Kami menggunakan cookie untuk meningkatkan pengalaman Anda. Cookie membantu kami menganalisis
                      penggunaan situs dan menyajikan konten yang relevan.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 flex-wrap md:flex-nowrap w-full md:w-auto">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 md:flex-initial px-4 py-2 border border-gray-500 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Tolak Semua
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex-1 md:flex-initial px-4 py-2 border border-adakami-green text-adakami-green rounded-lg hover:bg-adakami-green/10 transition-colors text-sm font-medium"
                >
                  Preferensi
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 md:flex-initial px-6 py-2 bg-adakami-green text-white rounded-lg hover:bg-adakami-green/90 transition-colors text-sm font-bold"
                >
                  Terima Semua
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-adakami-darker border border-adakami-green/30 rounded-2xl max-w-md w-full shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-adakami-green/20">
              <h2 className="text-xl font-bold text-white">Preferensi Cookie</h2>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Essential */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="essential"
                  checked={preferences.essential}
                  disabled
                  className="w-5 h-5 mt-1 accent-adakami-green cursor-not-allowed"
                />
                <div className="flex-1">
                  <label htmlFor="essential" className="text-white font-bold block cursor-not-allowed">
                    Essential (Wajib)
                  </label>
                  <p className="text-gray-400 text-sm mt-1">
                    Cookie penting untuk fungsi dasar situs web.
                  </p>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="analytics"
                  checked={preferences.analytics}
                  onChange={() => togglePreference('analytics')}
                  className="w-5 h-5 mt-1 accent-adakami-green cursor-pointer"
                />
                <div className="flex-1">
                  <label htmlFor="analytics" className="text-white font-bold block cursor-pointer">
                    Analytics (Google Analytics)
                  </label>
                  <p className="text-gray-400 text-sm mt-1">
                    Membantu kami memahami bagaimana pengunjung menggunakan situs kami.
                  </p>
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={preferences.marketing}
                  onChange={() => togglePreference('marketing')}
                  className="w-5 h-5 mt-1 accent-adakami-green cursor-pointer"
                />
                <div className="flex-1">
                  <label htmlFor="marketing" className="text-white font-bold block cursor-pointer">
                    Marketing (Google Ads)
                  </label>
                  <p className="text-gray-400 text-sm mt-1">
                    Cookie untuk iklan yang relevan dan kampanye pemasaran.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-3 p-6 border-t border-adakami-green/20">
              <button
                onClick={() => setShowPreferences(false)}
                className="flex-1 px-4 py-2 border border-gray-500 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-colors font-medium"
              >
                Batal
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-4 py-2 bg-adakami-green text-white rounded-lg hover:bg-adakami-green/90 transition-colors font-bold"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
