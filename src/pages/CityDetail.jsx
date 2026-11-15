import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Compass,
  Calendar,
  Sparkles,
  Utensils,
  Home,
  Music,
  Shield,
  Eye,
  ChevronLeft,
  ChevronRight,
  Share2,
  Check
} from 'lucide-react';
import { getCityById, CITIES } from '../data/cities';
import CultureAnimation from '../components/CultureAnimation';
import ImageWithFallback from '../components/ImageWithFallback';
import LightboxModal from '../components/LightboxModal';
import { BatikDivider, GoldBadge, CornerOrnament } from '../components/CulturalOrnament';

export default function CityDetail() {
  const { id } = useParams();
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [copied, setCopied] = useState(false);

  const city = getCityById(id);

  // If city not found, show a graceful fallback
  if (!city) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-white font-bold mb-4">
          Kota Tidak Ditemukan
        </h1>
        <p className="text-stone-500 dark:text-slate-400 text-sm mb-6 max-w-md">
          Maaf, kota yang Anda cari tidak tersedia dalam daftar eksplorasi kami.
        </p>
        <Link
          to="/explore"
          className="px-6 py-3 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-amber-400 transition-colors shadow-lg"
        >
          Kembali ke Jelajah Kota
        </Link>
      </div>
    );
  }

  // Find previous and next city for seamless navigation
  const currentIndex = CITIES.findIndex((c) => c.id === city.id);
  const prevCity = CITIES[(currentIndex - 1 + CITIES.length) % CITIES.length];
  const nextCity = CITIES[(currentIndex + 1) % CITIES.length];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full overflow-hidden transition-colors duration-500">
      {/* ========================================================
          A. FULLSCREEN CINEMATIC HERO BACKGROUND
      ======================================================== */}
      <section className="relative w-full h-screen min-h-[680px] flex items-end justify-start overflow-hidden">
        {/* Fullscreen Background Image with Ken Burns Zoom */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={city.heroImage}
            fallbackSrc={city.fallbackHero}
            alt={city.name}
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>

        {/* Gradient Overlays for High-Contrast Cinematic Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-black/60 dark:from-[#070c18] dark:via-[#070c18]/50 dark:to-black/60 z-10" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/80 dark:to-[#070c18]/90 z-10 pointer-events-none" />

        {/* Floating Traditional Cultural Animation Backdrop in Hero */}
        <div className="absolute top-1/4 right-6 sm:right-16 z-20 opacity-30 lg:opacity-50 pointer-events-none scale-75 sm:scale-100">
          <CultureAnimation type={city.cultureAnimType} compact />
        </div>

        {/* Top Floating Glass Breadcrumb & Controls */}
        <div className="absolute top-24 left-4 sm:left-8 right-4 sm:right-8 z-30 flex items-center justify-between">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 dark:bg-slate-950/70 dark:hover:bg-slate-900 border border-white/30 dark:border-white/10 text-xs uppercase tracking-widest text-white backdrop-blur-xl transition-all shadow-xl"
          >
            <ArrowLeft className="w-4 h-4 text-amber-300 dark:text-amber-400" />
            <span className="hidden sm:inline">Kembali ke</span> Jelajah Kota
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 dark:bg-slate-950/70 border border-white/30 dark:border-white/10 hover:border-amber-400 text-white backdrop-blur-xl transition-all cursor-pointer shadow-lg"
              title="Bagikan Tautan Kota Ini"
              aria-label="Share city link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Hero Bottom Information Container */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          {/* Badges Row with Frosted Glass Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/25 dark:bg-amber-500/20 text-amber-200 dark:text-amber-300 border border-white/30 dark:border-amber-500/40 backdrop-blur-xl shadow-md">
              {city.region}
            </span>
            <span className="px-3 py-1 rounded-full text-xs tracking-wider text-slate-100 bg-black/40 border border-white/20 backdrop-blur-md flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              {city.province}
            </span>
            {city.coordinates && (
              <span className="px-3 py-1 rounded-full text-xs tracking-wider text-slate-300 bg-black/40 border border-white/10 backdrop-blur-md hidden sm:inline-block font-mono">
                {city.coordinates}
              </span>
            )}
          </div>

          {/* Big City Typography */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-[1] mb-2 drop-shadow-2xl">
            {city.name}
          </h1>

          {/* Nickname & English Tagline */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-serif italic text-xl sm:text-2xl text-gold-light dark:text-gold-gradient font-medium drop-shadow">
              "{city.nickname}"
            </span>
            {city.taglineEn && (
              <span className="text-xs uppercase tracking-[0.2em] text-slate-200 font-sans hidden md:inline">
                • {city.taglineEn}
              </span>
            )}
          </div>

          {/* Short City Description */}
          <p className="text-slate-100 text-sm sm:text-lg max-w-3xl leading-relaxed font-light drop-shadow-md">
            {city.shortDescription}
          </p>
        </div>
      </section>

      {/* ========================================================
          B. ABOUT THE CITY: Sejarah, Geografi, Budaya, Keunikan
      ======================================================== */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <GoldBadge className="mb-3">
            Eksplorasi Mendalam
          </GoldBadge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white tracking-tight transition-colors">
            Tentang <span className="text-gold-gradient">{city.name}</span>
          </h2>
          <BatikDivider className="my-2" />
          <p className="text-stone-600 dark:text-slate-400 text-sm sm:text-base transition-colors">
            Mengenal jejak peradaban masa lalu, bentang alam, dan karakter masyarakat lokal yang membentuk keunikan kota ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* 1. Sejarah Singkat */}
          <div className="relative p-7 sm:p-9 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl shadow-stone-900/5 dark:shadow-black/30">
            <CornerOrnament className="absolute top-4 right-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold block">
                  Naratif Sejarah
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                  Jejak Masa Silam
                </h3>
              </div>
            </div>
            <p className="text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {city.about?.history}
            </p>
          </div>

          {/* 2. Letak Geografis */}
          <div className="relative p-7 sm:p-9 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl shadow-stone-900/5 dark:shadow-black/30">
            <CornerOrnament className="absolute top-4 right-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold block">
                  Bentang Alam
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                  Letak Geografis & Iklim
                </h3>
              </div>
            </div>
            <p className="text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {city.about?.geography}
            </p>
          </div>

          {/* 3. Budaya Masyarakat */}
          <div className="relative p-7 sm:p-9 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl shadow-stone-900/5 dark:shadow-black/30">
            <CornerOrnament className="absolute top-4 right-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-600 dark:text-rose-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold block">
                  Kearifan Lokal
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                  Budaya Masyarakat
                </h3>
              </div>
            </div>
            <p className="text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {city.about?.cultureCommunity}
            </p>
          </div>

          {/* 4. Keunikan Kota */}
          <div className="relative p-7 sm:p-9 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl shadow-stone-900/5 dark:shadow-black/30">
            <CornerOrnament className="absolute top-4 right-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold block">
                  Ikon & Daya Tarik
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                  Keunikan Kota
                </h3>
              </div>
            </div>
            <p className="text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {city.about?.uniqueness}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          C. LOCAL CULTURE (Kebudayaan Khas Daerah)
          Pakaian, Senjata, Tarian, Makanan, Rumah Adat, Kesenian
      ======================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#f5ede0] dark:bg-gradient-to-b dark:from-[#0a1124] dark:via-slate-950 dark:to-[#070c18] border-y border-amber-500/20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <GoldBadge className="mb-3">
              Identitas Budaya
            </GoldBadge>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white tracking-tight transition-colors">
              Khazanah Budaya Khas <span className="text-gold-gradient">{city.name}</span>
            </h2>
            <BatikDivider className="my-2" />
            <p className="text-stone-600 dark:text-slate-400 text-sm sm:text-base transition-colors">
              Menyelami enam pilar kebudayaan tradisional yang diwariskan dari generasi ke generasi.
            </p>
          </div>

          {/* Culture Grid: 6 Pillars with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* 1. Pakaian Tradisional */}
            <div className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col shadow-lg shadow-stone-900/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 dark:text-slate-400 block font-medium">
                    Busana Luhur
                  </span>
                  <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                    Pakaian Tradisional
                  </h4>
                </div>
              </div>
              <h5 className="font-semibold text-amber-700 dark:text-amber-300 text-sm mb-2">
                {city.culture?.traditionalAttire?.name}
              </h5>
              <p className="text-stone-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-auto">
                {city.culture?.traditionalAttire?.description}
              </p>
            </div>

            {/* 2. Senjata Tradisional */}
            <div className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col shadow-lg shadow-stone-900/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 dark:text-slate-400 block font-medium">
                    Senjata Pusaka
                  </span>
                  <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                    Senjata Tradisional
                  </h4>
                </div>
              </div>
              <h5 className="font-semibold text-amber-700 dark:text-amber-300 text-sm mb-2">
                {city.culture?.traditionalWeapon?.name}
              </h5>
              <p className="text-stone-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-auto">
                {city.culture?.traditionalWeapon?.description}
              </p>
            </div>

            {/* 3. Tarian Tradisional */}
            <div className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col shadow-lg shadow-stone-900/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 dark:text-slate-400 block font-medium">
                    Seni Gerak Sakral
                  </span>
                  <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                    Tarian Tradisional
                  </h4>
                </div>
              </div>
              <h5 className="font-semibold text-amber-700 dark:text-amber-300 text-sm mb-2">
                {city.culture?.traditionalDance?.name}
              </h5>
              <p className="text-stone-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-auto">
                {city.culture?.traditionalDance?.description}
              </p>
            </div>

            {/* 4. Makanan Khas */}
            <div className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col shadow-lg shadow-stone-900/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 dark:text-slate-400 block font-medium">
                    Cita Rasa Kuliner
                  </span>
                  <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                    Makanan Khas
                  </h4>
                </div>
              </div>
              <h5 className="font-semibold text-amber-700 dark:text-amber-300 text-sm mb-2">
                {city.culture?.signatureFood?.name}
              </h5>
              <p className="text-stone-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-auto">
                {city.culture?.signatureFood?.description}
              </p>
            </div>

            {/* 5. Rumah Adat */}
            <div className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col shadow-lg shadow-stone-900/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 dark:text-slate-400 block font-medium">
                    Arsitektur Leluhur
                  </span>
                  <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                    Rumah Adat
                  </h4>
                </div>
              </div>
              <h5 className="font-semibold text-amber-700 dark:text-amber-300 text-sm mb-2">
                {city.culture?.traditionalHouse?.name}
              </h5>
              <p className="text-stone-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-auto">
                {city.culture?.traditionalHouse?.description}
              </p>
            </div>

            {/* 6. Kesenian Tradisional */}
            <div className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col shadow-lg shadow-stone-900/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 dark:text-slate-400 block font-medium">
                    Musik & Pertunjukan
                  </span>
                  <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                    Kesenian Tradisional
                  </h4>
                </div>
              </div>
              <h5 className="font-semibold text-amber-700 dark:text-amber-300 text-sm mb-2">
                {city.culture?.artsAndMusic?.name}
              </h5>
              <p className="text-stone-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-auto">
                {city.culture?.artsAndMusic?.description}
              </p>
            </div>
          </div>

          {/* Regional Animation Showcase in Cultural Context with Glass Panel */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-2xl border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl shadow-stone-900/5 dark:shadow-black/40">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold block mb-1">
                Visual Art Tradisi
              </span>
              <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-white mb-3">
                Elemen Animasi Budaya {city.name}
              </h3>
              <p className="text-stone-600 dark:text-slate-300 text-sm leading-relaxed">
                Ilustrasi vektor dan animasi ini dirancang secara khusus untuk menghormati makna filosofis simbol kebudayaan {city.province}, menggambarkan keanggunan motif tradisional dan identitas masyarakatnya.
              </p>
            </div>
            <div className="w-full max-w-[340px] flex items-center justify-center">
              <CultureAnimation type={city.cultureAnimType} />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          D. POPULAR DESTINATIONS: Galeri Tempat Wisata Populer
          Varied Editorial Asymmetric Grid
      ======================================================== */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <GoldBadge className="mb-2">
              Galeri Pariwisata
            </GoldBadge>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white tracking-tight transition-colors">
              Destinasi Populer di <span className="text-gold-gradient">{city.name}</span>
            </h2>
          </div>
          <p className="text-stone-500 dark:text-slate-400 text-sm max-w-md">
            Klik foto destinasi untuk melihat tampilan resolusi tinggi serta deskripsi lengkapnya.
          </p>
        </div>

        {/* Varied Asymmetrical Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {city.destinations?.map((dest, idx) => {
            const colSpan =
              idx === 0
                ? 'md:col-span-12 lg:col-span-8'
                : idx === 1
                ? 'md:col-span-6 lg:col-span-4'
                : 'md:col-span-6 lg:col-span-12';

            return (
              <div
                key={idx}
                onClick={() => setSelectedDestination(dest)}
                className={`group relative rounded-3xl overflow-hidden bg-white/70 dark:bg-slate-900 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/60 dark:hover:border-amber-400/50 transition-all duration-500 cursor-pointer shadow-xl ${colSpan} flex flex-col`}
              >
                <div className={`relative w-full ${idx === 0 ? 'aspect-[16/9]' : 'aspect-[16/10]'} overflow-hidden`}>
                  <ImageWithFallback
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent dark:from-slate-950 dark:via-slate-950/40" />
                  
                  {/* Category Pill with Frosted Glass */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/85 dark:bg-black/60 text-amber-800 dark:text-amber-300 border border-amber-500/30 backdrop-blur-md shadow-md">
                      {dest.category}
                    </span>
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
                    <Eye className="w-4 h-4 text-amber-400" />
                  </div>

                  {/* Destination Info at bottom of image */}
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-200 transition-colors mb-2 drop-shadow">
                      {dest.name}
                    </h4>
                    <p className="text-slate-200 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          ADJACENT CITY NAVIGATION (Next / Prev City)
      ======================================================== */}
      <section className="relative border-t border-amber-500/20 py-12 bg-white/60 dark:bg-slate-950 backdrop-blur-xl transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Previous City Link */}
          <Link
            to={`/city/${prevCity.id}`}
            className="group flex items-center gap-3 text-left p-3 rounded-2xl hover:bg-stone-100/70 dark:hover:bg-slate-900/60 transition-colors w-full sm:w-auto"
          >
            <div className="p-3 rounded-full bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 group-hover:border-amber-500 text-stone-600 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-stone-400 dark:text-slate-400 block font-medium">
                Kota Sebelumnya
              </span>
              <span className="font-serif text-lg font-bold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                {prevCity.name} ({prevCity.province})
              </span>
            </div>
          </Link>

          {/* Central Back to Explore Button */}
          <Link
            to="/explore"
            className="px-6 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-amber-500/35 text-amber-800 dark:text-amber-300 hover:text-amber-900 dark:hover:text-white hover:border-amber-500 text-xs uppercase tracking-widest font-semibold transition-all shadow-sm"
          >
            Semua Kota
          </Link>

          {/* Next City Link */}
          <Link
            to={`/city/${nextCity.id}`}
            className="group flex items-center justify-end gap-3 text-right p-3 rounded-2xl hover:bg-stone-100/70 dark:hover:bg-slate-900/60 transition-colors w-full sm:w-auto"
          >
            <div>
              <span className="text-[11px] uppercase tracking-widest text-stone-400 dark:text-slate-400 block font-medium">
                Kota Selanjutnya
              </span>
              <span className="font-serif text-lg font-bold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                {nextCity.name} ({nextCity.province})
              </span>
            </div>
            <div className="p-3 rounded-full bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 group-hover:border-amber-500 text-stone-600 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </section>

      {/* Lightbox Photo Viewer Modal */}
      <LightboxModal
        isOpen={!!selectedDestination}
        onClose={() => setSelectedDestination(null)}
        destination={selectedDestination}
        cityName={city.name}
      />
    </div>
  );
}
