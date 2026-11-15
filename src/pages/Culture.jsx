import { useState } from 'react';
import { Award, Home, ArrowRight } from 'lucide-react';
import { UNESCO_HERITAGES, ARCHITECTURE_STYLES } from '../data/cultureShowcase';
import CultureAnimation from '../components/CultureAnimation';
import ImageWithFallback from '../components/ImageWithFallback';
import { BatikDivider, GoldBadge } from '../components/CulturalOrnament';
import GlassCard from '../components/GlassCard';
import { Link } from 'react-router-dom';

export default function Culture() {
  const [activeAnimTab, setActiveAnimTab] = useState('bali');

  const animOptions = [
    { id: 'bali', name: 'Bali', symbol: 'Pura & Keris Bali' },
    { id: 'yogyakarta', name: 'Yogyakarta & Solo', symbol: 'Wayang Kulit & Batik' },
    { id: 'bandung', name: 'Jawa Barat', symbol: 'Gedung Sate & Kujang' },
    { id: 'jakarta', name: 'Betawi / Jakarta', symbol: 'Monas & Ondel-Ondel' },
    { id: 'padang', name: 'Minangkabau', symbol: 'Rumah Gadang & Songket' },
    { id: 'papua', name: 'Papua', symbol: 'Cenderawasih & Tifa' },
    { id: 'sulawesi', name: 'Sulawesi Selatan', symbol: 'Perahu Layar Pinisi' },
    { id: 'kalimantan', name: 'Dayak / Kalimantan', symbol: 'Mandau & Batang Garing' },
  ];

  return (
    <div className="w-full min-h-screen bg-transparent pt-24 pb-28 text-stone-900 dark:text-slate-100 transition-colors duration-500">
      {/* Header Banner */}
      <div className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mb-16 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=2560&q=85"
            alt="Budaya Indonesia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf6] via-[#fcfaf6]/85 to-black/70 dark:from-[#070c18] dark:via-[#070c18]/85 dark:to-black/80 transition-colors duration-500" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <GoldBadge className="mb-4">
            Khazanah Peradaban Adiluhung
          </GoldBadge>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-stone-900 dark:text-white tracking-tight mb-4 transition-colors">
            Warisan Budaya & <span className="text-gold-gradient">Tradisi Nusantara</span>
          </h1>
          <BatikDivider className="my-2" />
          <p className="text-stone-700 dark:text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            Menyelami mahakarya takbenda yang diakui dunia UNESCO, arsitektur vernakular tahan gempa, dan filosofi sakral yang menjiwai kehidupan suku-suku di Indonesia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ========================================================
            1. UNESCO INTANGIBLE CULTURAL HERITAGES
        ======================================================== */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-500/15 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30 mb-2 backdrop-blur-md">
                <Award className="w-3.5 h-3.5" />
                <span>Pengakuan Dunia UNESCO</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white transition-colors">
                Warisan Budaya Takbenda Dunia
              </h2>
            </div>
            <p className="text-stone-600 dark:text-slate-400 text-sm max-w-md transition-colors">
              Karya adiluhung bangsa Indonesia yang telah dinobatkan sebagai Warisan Kemanusiaan untuk Kebudayaan Lisan dan Takbenda oleh UNESCO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {UNESCO_HERITAGES.map((heritage) => (
              <GlassCard
                key={heritage.id}
                variant="card"
                className="group overflow-hidden flex flex-col hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <ImageWithFallback
                    src={heritage.image}
                    alt={heritage.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500 text-slate-950 shadow-md">
                      UNESCO {heritage.year}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold block mb-1">
                    {heritage.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors">
                    {heritage.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed mb-4">
                    {heritage.description}
                  </p>
                  <div className="mt-auto pt-3 border-t border-stone-200/70 dark:border-slate-800 text-[11px] text-stone-500 dark:text-slate-400">
                    <span className="font-medium text-stone-600 dark:text-slate-500">Kawasan Utama:</span> {heritage.regions}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ========================================================
            2. INTERACTIVE REGIONAL ANIMATION LAB
        ======================================================== */}
        <GlassCard
          variant="gold"
          hover={false}
          className="relative p-8 sm:p-14 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <GoldBadge className="mb-2">
              Visual Art & Motion Experience
            </GoldBadge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white transition-colors">
              Studio Animasi Motif Daerah Indonesia
            </h2>
            <p className="text-stone-600 dark:text-slate-300 text-sm mt-2 transition-colors">
              Klik salah satu daerah untuk melihat animasi vektor ornamen sakral dan kebanggaan kultural masing-masing pulau.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {animOptions.map((opt) => {
              const active = activeAnimTab === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveAnimTab(opt.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                    active
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'bg-white/70 dark:bg-slate-900/70 text-stone-700 dark:text-slate-300 border-stone-300/60 dark:border-slate-800 hover:border-amber-500/50 hover:text-stone-900 dark:hover:text-white backdrop-blur-md'
                  }`}
                >
                  {opt.name}
                </button>
              );
            })}
          </div>

          {/* Interactive Screen Display with Glass Panel */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-6">
            <div className="w-full max-w-[420px] flex items-center justify-center">
              <div className="p-4 sm:p-6 rounded-2xl bg-white/40 dark:bg-slate-950/40 border border-amber-500/20 backdrop-blur-md shadow-inner w-full flex items-center justify-center">
                <CultureAnimation type={activeAnimTab} />
              </div>
            </div>

            <div className="max-w-md space-y-4 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold block">
                Identitas Terpilih
              </span>
              <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-white transition-colors">
                {animOptions.find((o) => o.id === activeAnimTab)?.name}
              </h3>
              <p className="text-amber-800 dark:text-amber-200/90 text-sm font-serif italic">
                Ikon: {animOptions.find((o) => o.id === activeAnimTab)?.symbol}
              </p>
              <p className="text-stone-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed transition-colors">
                Karya seni animasi ini menggunakan perpaduan SVG terukur presisi dan animasi translasi Framer Motion untuk menghasilkan gerakan halus yang menghormati nilai luhur setiap daerah Nusantara.
              </p>
              <div className="pt-2">
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-white transition-colors"
                >
                  <span>Jelajahi Kota-Kota di Wilayah Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* ========================================================
            3. TRADITIONAL VERNACULAR ARCHITECTURE
        ======================================================== */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-500/15 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30 mb-2 backdrop-blur-md">
              <Home className="w-3.5 h-3.5" />
              <span>Arsitektur Nusantara</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white transition-colors">
              Mahakarya Rumah Adat Tradisional
            </h2>
            <BatikDivider className="my-2" />
            <p className="text-stone-600 dark:text-slate-400 text-sm transition-colors">
              Arsitektur kayu tahan gempa warisan nenek moyang yang menyatu selaras dengan hukum alam dan kosmologi spiritual suku-suku Nusantara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ARCHITECTURE_STYLES.map((arch, idx) => (
              <GlassCard
                key={idx}
                variant="card"
                className="group overflow-hidden flex flex-col hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <ImageWithFallback
                    src={arch.image}
                    alt={arch.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block">
                      {arch.region}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white drop-shadow">
                      {arch.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex flex-col flex-1 text-xs">
                  <div>
                    <span className="text-stone-500 dark:text-slate-500 block uppercase font-mono text-[10px]">Tipe Atap:</span>
                    <span className="text-amber-800 dark:text-amber-200 font-semibold">{arch.roofType}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 dark:text-slate-500 block uppercase font-mono text-[10px]">Bahan Utama:</span>
                    <span className="text-stone-700 dark:text-slate-300">{arch.material}</span>
                  </div>
                  <div className="pt-2 border-t border-stone-200/70 dark:border-slate-800 text-stone-600 dark:text-slate-300 leading-relaxed">
                    {arch.feature}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
