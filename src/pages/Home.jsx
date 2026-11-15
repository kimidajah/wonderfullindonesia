import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import CityCard from '../components/CityCard';
import CultureAnimation from '../components/CultureAnimation';
import { BatikDivider, GoldBadge } from '../components/CulturalOrnament';
import { getFeaturedCities } from '../data/cities';
import { REGION_DETAILS } from '../data/regions';
import ImageWithFallback from '../components/ImageWithFallback';

export default function Home() {
  const featuredCities = getFeaturedCities();

  return (
    <div className="w-full overflow-hidden transition-colors duration-500">
      {/* 1. Fullscreen Cinematic Hero */}
      <Hero />

      {/* 2. Curated Highlights: Destinasi Ikonik Nusantara */}
      <section id="highlights" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <GoldBadge className="mb-3">
            Destinasi Terpilih
          </GoldBadge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white tracking-tight mb-4 transition-colors">
            Pesona Kota-Kota <span className="text-gold-gradient">Ikonik Indonesia</span>
          </h2>
          <BatikDivider className="my-2" />
          <p className="text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed transition-colors">
            Dari kemegahan kraton kuno di Jawa hingga puncak surga zamrud Raja Ampat di Papua, temukan kisah dan jiwa setiap kota di Nusantara.
          </p>
        </div>

        {/* Featured Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {featuredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>

        {/* View All Cities CTA with Glass Styling */}
        <div className="text-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/80 dark:bg-slate-900/90 hover:bg-amber-500 text-amber-800 dark:text-amber-300 hover:text-slate-950 dark:hover:text-slate-950 border border-amber-500/35 hover:border-amber-400 font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-stone-900/5 dark:shadow-black/40 backdrop-blur-xl group hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            <span>Lihat Semua 29 Kota di 7 Wilayah</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* 3. Interactive Archipelago Regions (7 Kepulauan Besar) */}
      <section className="relative py-20 sm:py-28 bg-[#f5efe3] dark:bg-gradient-to-b dark:from-slate-950 dark:via-[#0a1124] dark:to-[#070c18] border-y border-amber-500/20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-500/15 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30 mb-2 backdrop-blur-md">
                <Compass className="w-3.5 h-3.5" />
                <span>Geografi Nusantara</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white transition-colors">
                Tujuh Kepulauan <span className="text-gold-gradient">Megah</span>
              </h2>
            </div>
            <p className="text-stone-600 dark:text-slate-400 text-sm sm:text-base max-w-md transition-colors">
              Jelajahi keragaman lanskap dan peradaban yang membentang lebih dari 5.000 kilometer dari Sabang hingga Merauke.
            </p>
          </div>

          {/* Region Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {REGION_DETAILS.map((reg) => (
              <Link
                key={reg.id}
                to={`/explore?region=${reg.id}`}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-white/80 dark:bg-slate-900/85 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 hover:border-amber-500/60 dark:hover:border-amber-400/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(180,130,40,0.12)] dark:hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)]"
              >
                {/* Image Aspect Box */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <ImageWithFallback
                    src={reg.image}
                    alt={reg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent dark:from-slate-950 dark:via-slate-950/40" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs uppercase tracking-widest text-amber-300 dark:text-amber-400 font-semibold block mb-0.5">
                      Wilayah
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {reg.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 bg-white/70 dark:bg-slate-950/90 transition-colors">
                  <span className="text-xs font-serif italic text-amber-800 dark:text-amber-300/90 mb-2 block font-medium">
                    {reg.tagline}
                  </span>
                  <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {reg.description}
                  </p>

                  {/* Symbols */}
                  <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    {reg.symbols.slice(0, 3).map((sym, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 dark:bg-slate-900 text-stone-600 dark:text-slate-400">
                        {sym}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:text-amber-600 dark:group-hover:text-amber-300">
                    <span>Lihat Kota {reg.name}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cultural Identity Showcase with Animated Traditional Elements */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <GoldBadge>
              Adiluhung & Autentik
            </GoldBadge>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white leading-tight transition-colors">
              Animasi Khas & <span className="text-gold-gradient">Simbol Kebudayaan Daerah</span>
            </h2>
            <p className="text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed transition-colors">
              Setiap wilayah Indonesia memiliki ikon identitas spiritual dan budaya tersendiri. Kami merancang elemen visual animasi autentik untuk merayakan keagungan Keris dan Pura di Bali, Wayang Kulit Mataram di Yogyakarta, Rumah Gadang Minangkabau di Sumatera Barat, hingga Burung Cenderawasih di Tanah Papua.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-amber-500/20 dark:border-slate-800 backdrop-blur-xl shadow-sm">
                <span className="text-amber-700 dark:text-amber-400 font-serif text-lg font-bold block mb-1">
                  Pura & Keris Bali
                </span>
                <span className="text-xs text-stone-500 dark:text-slate-400">
                  Simbol spiritual Tri Hita Karana & senjata pamor meteorit pusaka leluhur.
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-amber-500/20 dark:border-slate-800 backdrop-blur-xl shadow-sm">
                <span className="text-amber-700 dark:text-amber-400 font-serif text-lg font-bold block mb-1">
                  Gunungan Wayang
                </span>
                <span className="text-xs text-stone-500 dark:text-slate-400">
                  Mahakarya filosofis pohon hayat lambang kosmis kehidupan Jawa.
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-amber-500/20 dark:border-slate-800 backdrop-blur-xl shadow-sm">
                <span className="text-amber-700 dark:text-amber-400 font-serif text-lg font-bold block mb-1">
                  Gonjong Gadang
                </span>
                <span className="text-xs text-stone-500 dark:text-slate-400">
                  Lengkungan atap tanduk kerbau Minang sarat keteguhan adat.
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-amber-500/20 dark:border-slate-800 backdrop-blur-xl shadow-sm">
                <span className="text-amber-700 dark:text-amber-400 font-serif text-lg font-bold block mb-1">
                  Cenderawasih
                </span>
                <span className="text-xs text-stone-500 dark:text-slate-400">
                  Burung surga berbulu emas kebanggaan rimba dan budaya Papua.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/culture"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-white transition-colors"
              >
                <span>Pelajari Warisan Budaya Selengkapnya</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Interactive Animated Culture Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-6 sm:p-10 rounded-3xl bg-white/75 dark:bg-slate-900/70 border border-amber-500/30 backdrop-blur-2xl shadow-2xl shadow-amber-900/5 dark:shadow-black/60 overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest text-stone-500 dark:text-slate-400 block mb-1">
                  Interactive Cultural Preview
                </span>
                <h3 className="font-serif text-2xl text-stone-900 dark:text-white font-bold">
                  Kekayaan Tradisi Nusantara
                </h3>
              </div>

              {/* Animated Cultural Component */}
              <div className="min-h-[300px] flex items-center justify-center py-4">
                <CultureAnimation type="bali" className="w-full" />
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-stone-500 dark:text-slate-400">
                <span>Format: Vector SVG & Framer Motion</span>
                <span className="text-amber-600 dark:text-amber-300 font-semibold">Autentik & Beretika</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Virtual Journey Stats & Facts: Indonesia in Numbers */}
      <section className="relative py-20 bg-[#f4ede1] dark:bg-slate-950/80 border-t border-amber-500/20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/40 border border-amber-500/20 dark:border-slate-800/60 backdrop-blur-xl shadow-sm">
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-gold-gradient block mb-2">
                17.508
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-600 dark:text-slate-400 font-semibold block">
                Pulau Eksotis
              </span>
              <span className="text-[11px] text-stone-500 dark:text-slate-500 mt-1 block">
                Negara kepulauan terbesar di dunia
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/40 border border-amber-500/20 dark:border-slate-800/60 backdrop-blur-xl shadow-sm">
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-gold-gradient block mb-2">
                300+
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-600 dark:text-slate-400 font-semibold block">
                Kelompok Etnis
              </span>
              <span className="text-[11px] text-stone-500 dark:text-slate-500 mt-1 block">
                Harmonis dalam Bhinneka Tunggal Ika
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/40 border border-amber-500/20 dark:border-slate-800/60 backdrop-blur-xl shadow-sm">
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-gold-gradient block mb-2">
                718
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-600 dark:text-slate-400 font-semibold block">
                Bahasa Daerah
              </span>
              <span className="text-[11px] text-stone-500 dark:text-slate-500 mt-1 block">
                Disatukan Bahasa Indonesia
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/40 border border-amber-500/20 dark:border-slate-800/60 backdrop-blur-xl shadow-sm">
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-gold-gradient block mb-2">
                13+
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-600 dark:text-slate-400 font-semibold block">
                Warisan UNESCO
              </span>
              <span className="text-[11px] text-stone-500 dark:text-slate-500 mt-1 block">
                Diakui dunia sebagai mahakarya kemanusiaan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action: Start Your Virtual Journey */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-radial from-amber-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <GoldBadge className="mb-4">
            Mulai Perjalanan Anda
          </GoldBadge>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white mb-6 transition-colors">
            Siap Menjelajahi Keindahan Nusantara?
          </h2>
          <p className="text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8 transition-colors">
            Pilihlah kota yang ingin Anda kunjungi dan rasakan pengalaman virtual sinematik yang mendekatkan Anda pada pesona sejati Indonesia.
          </p>
          <Link
            to="/explore"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold tracking-widest text-sm uppercase shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-105"
          >
            <Compass className="w-5 h-5" />
            <span>Mulai Eksplorasi Sekarang</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
