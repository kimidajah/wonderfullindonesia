import { useSearchParams } from 'react-router-dom';
import CityGrid from '../components/CityGrid';
import { CITIES } from '../data/cities';
import { BatikDivider, GoldBadge } from '../components/CulturalOrnament';
import ImageWithFallback from '../components/ImageWithFallback';

export default function Explore() {
  const [searchParams] = useSearchParams();
  const regionParam = searchParams.get('region') || 'all';

  return (
    <div className="w-full min-h-screen pt-24 pb-28 transition-colors duration-500">
      {/* Editorial Header Banner with Glass Effect */}
      <div className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mb-12 border-b border-amber-500/20 overflow-hidden">
        {/* Background Image with Dark/Light Adaptive Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85"
            alt="Pesisir Nusantara"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/75 dark:bg-[#070c18]/85 backdrop-blur-xs" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf6] via-stone-900/40 to-black/70 dark:from-[#070c18] dark:via-[#070c18]/70 dark:to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <GoldBadge className="mb-4">
            Ekspedisi Nusantara
          </GoldBadge>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4 drop-shadow-lg">
            Jelajahi Kota-Kota <span className="text-gold-light dark:text-gold-gradient">Indonesia</span>
          </h1>
          <BatikDivider className="my-2" />
          <p className="text-stone-200 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
            Temukan 29 kota ikonik dari ujung barat Sabang di Aceh hingga batas fajar Merauke di Papua, lengkap dengan sejarah, tradisi lokal, kuliner legendaris, dan destinasi wisata populer.
          </p>
        </div>
      </div>

      {/* Main Container with Grid & Interactive Glass Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CityGrid
          cities={CITIES}
          initialRegion={regionParam}
          title="Koleksi Kota Bersejarah & Modern"
          subtitle="Gunakan filter wilayah atau ketik nama kota dan ciri khas budaya untuk memulai pencarian."
        />
      </div>
    </div>
  );
}
