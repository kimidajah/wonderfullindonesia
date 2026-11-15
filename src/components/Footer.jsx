import { Link } from 'react-router-dom';
import { ChevronUp, Compass, Heart, Globe, Sparkles } from 'lucide-react';
import { BatikDivider } from './CulturalOrnament';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const regions = [
    { name: 'Sumatera', path: '/explore?region=sumatera' },
    { name: 'Jawa', path: '/explore?region=jawa' },
    { name: 'Bali & Nusa Tenggara', path: '/explore?region=bali-nusa-tenggara' },
    { name: 'Kalimantan', path: '/explore?region=kalimantan' },
    { name: 'Sulawesi', path: '/explore?region=sulawesi' },
    { name: 'Maluku', path: '/explore?region=maluku' },
    { name: 'Papua', path: '/explore?region=papua' },
  ];

  return (
    <footer className="relative bg-[#f5ede0] dark:bg-[#050811] text-stone-700 dark:text-slate-300 border-t border-amber-500/20 pt-16 pb-12 overflow-hidden transition-colors duration-500">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/10 dark:bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-500/15 dark:bg-amber-500/10 border border-amber-500/30">
                <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-[0.18em] text-stone-900 dark:text-white block">
                  WONDERFUL
                </span>
                <span className="text-[11px] font-sans uppercase tracking-[0.35em] text-amber-600 dark:text-amber-400 font-semibold block -mt-1">
                  INDONESIA
                </span>
              </div>
            </Link>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed pt-2">
              Website interaktif penjelajahan keindahan alam, peradaban ribuan pulau, kekayaan budaya adiluhung, dan pesona kota-kota di seluruh Nusantara.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-slate-900 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-300 backdrop-blur-md shadow-sm">
              <Globe className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>17.500+ Pulau • 300+ Suku Bangsa</span>
            </div>
          </div>

          {/* Col 2: 7 Wilayah Nusantara */}
          <div>
            <h4 className="font-cinzel text-base font-semibold text-stone-900 dark:text-white tracking-widest uppercase mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              7 Wilayah Nusantara
            </h4>
            <ul className="space-y-2.5 text-sm">
              {regions.map((reg) => (
                <li key={reg.name}>
                  <Link
                    to={reg.path}
                    className="text-stone-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
                    {reg.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div>
            <h4 className="font-cinzel text-base font-semibold text-stone-900 dark:text-white tracking-widest uppercase mb-4">
              Jelajahi Khazanah
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/explore" className="text-stone-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors">
                  Daftar 29 Kota Ikonik
                </Link>
              </li>
              <li>
                <Link to="/culture" className="text-stone-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors">
                  Warisan Budaya UNESCO
                </Link>
              </li>
              <li>
                <Link to="/culture" className="text-stone-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors">
                  Arsitektur Rumah Adat
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors">
                  Kisah Geografi Nusantara
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors">
                  Biodiversitas Garis Wallacea
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Semboyan Bangsa */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-base font-semibold text-stone-900 dark:text-white tracking-widest uppercase mb-2">
              Semboyan Abadi
            </h4>
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-amber-500/20 backdrop-blur-md shadow-sm">
              <span className="font-serif italic text-lg text-amber-800 dark:text-amber-200 block mb-1">
                "Bhinneka Tunggal Ika"
              </span>
              <p className="text-xs text-stone-600 dark:text-slate-400 leading-relaxed">
                Berbeda-beda tetapi tetap satu jua. Kebanggaan atas keanekaragaman tradisi, bahasa, seni, dan persaudaraan bangsa Indonesia.
              </p>
            </div>
            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-white transition-colors cursor-pointer py-1 font-semibold"
            >
              <ChevronUp className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              Kembali ke Atas
            </button>
          </div>
        </div>

        <BatikDivider className="opacity-40 my-4" />

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 dark:text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Wonderful Indonesia — Explore the Beauty of Indonesia.
          </p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> untuk kekayaan budaya Nusantara
          </p>
        </div>
      </div>
    </footer>
  );
}
