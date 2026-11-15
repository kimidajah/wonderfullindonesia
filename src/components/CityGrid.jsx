import { useState, useMemo } from 'react';
import { Search, X, Filter, Compass } from 'lucide-react';
import CityCard from './CityCard';
import { REGIONS } from '../data/cities';

export default function CityGrid({
  cities = [],
  initialRegion = 'all',
  title = 'Jelajahi Kota di Indonesia',
  subtitle = 'Pilih kota tujuan Anda dan rasakan kekayaan budaya serta sejarahnya.'
}) {
  const [selectedRegion, setSelectedRegion] = useState(initialRegion);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Filter & sort logic
  const filteredCities = useMemo(() => {
    return cities.filter((city) => {
      // Region filter
      const matchesRegion =
        selectedRegion === 'all' || city.regionId === selectedRegion;

      // Search query filter (matches name, province, description, badges)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        city.name.toLowerCase().includes(q) ||
        city.province.toLowerCase().includes(q) ||
        city.region.toLowerCase().includes(q) ||
        city.shortDescription.toLowerCase().includes(q) ||
        city.cultureBadges?.some((b) => b.toLowerCase().includes(q));

      return matchesRegion && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return 0; // Default order
    });
  }, [cities, selectedRegion, searchQuery, sortBy]);

  return (
    <div className="w-full">
      {/* Header section with Glass Search & Controls */}
      <div className="mb-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-500/15 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 mb-2 backdrop-blur-md">
              <Compass className="w-3.5 h-3.5" />
              <span>Nusantara Destination Grid</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-white font-bold transition-colors">
              {title}
            </h2>
            <p className="text-stone-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl transition-colors">
              {subtitle}
            </p>
          </div>

          {/* Result counter */}
          <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-slate-400">
            Menampilkan{' '}
            <span className="text-amber-600 dark:text-amber-300 font-bold text-sm">
              {filteredCities.length}
            </span>{' '}
            dari {cities.length} Destinasi
          </div>
        </div>

        {/* Glass Search Bar & Sort Row */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Real-time Glass Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-600 dark:text-amber-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama kota, provinsi, budaya (contoh: Gudeg, Tari Saman, Rendang)..."
              className="w-full pl-11 pr-10 py-3 rounded-full bg-white/80 dark:bg-slate-900/80 border border-amber-500/30 dark:border-white/10 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 backdrop-blur-xl shadow-lg shadow-black/5 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 dark:hover:text-white cursor-pointer"
                aria-label="Hapus pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Glass Sort Selector */}
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-full bg-white/80 dark:bg-slate-900/80 border border-amber-500/30 dark:border-white/10 text-stone-700 dark:text-slate-200 text-sm focus:outline-none focus:border-amber-500 cursor-pointer backdrop-blur-xl shadow-sm transition-all"
            >
              <option value="default">Urutan Standar</option>
              <option value="name-asc">Nama Kota (A - Z)</option>
              <option value="name-desc">Nama Kota (Z - A)</option>
            </select>
          </div>
        </div>

        {/* 7 Regional Filter Buttons (Sumatera, Jawa, Bali & Nusra, Kalimantan, Sulawesi, Maluku, Papua) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
          <span className="text-stone-500 dark:text-slate-400 font-medium whitespace-nowrap flex items-center gap-1.5 mr-1 hidden lg:flex">
            <Filter className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            Wilayah:
          </span>
          {REGIONS.map((region) => {
            const active = selectedRegion === region.id;
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setSelectedRegion(region.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-medium tracking-wide transition-all duration-300 cursor-pointer border ${
                  active
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-white/60 dark:bg-slate-900/60 text-stone-700 dark:text-slate-300 border-amber-500/20 dark:border-slate-800 hover:border-amber-500/50 hover:text-amber-700 dark:hover:text-white'
                } backdrop-blur-xl shadow-sm`}
              >
                {region.name}
                <span
                  className={`ml-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    active ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-200 dark:bg-slate-800 text-stone-600 dark:text-slate-400'
                  }`}
                >
                  {region.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of City Cards */}
      {filteredCities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center rounded-3xl bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 shadow-lg">
          <p className="font-serif text-xl text-stone-900 dark:text-white mb-2">
            Tidak ada kota yang sesuai pencarian
          </p>
          <p className="text-sm text-stone-500 dark:text-slate-400 mb-6">
            Coba kata kunci lain atau pilih filter wilayah yang berbeda.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedRegion('all');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 rounded-full bg-amber-500 text-slate-950 font-semibold text-xs tracking-wider uppercase hover:bg-amber-400 transition-colors shadow-md"
          >
            Reset Semua Filter
          </button>
        </div>
      )}
    </div>
  );
}
