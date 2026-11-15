import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function CityCard({ city }) {
  if (!city) return null;

  return (
    <div
      className="group relative flex flex-col rounded-3xl overflow-hidden bg-white/75 dark:bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800/80 hover:border-amber-500/60 dark:hover:border-amber-400/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(180,130,40,0.12)] dark:hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1.5"
    >
      {/* City Hero Image Container with Ken Burns Hover */}
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <ImageWithFallback
          src={city.heroImage}
          fallbackSrc={city.fallbackHero}
          alt={`${city.name}, ${city.province}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlays for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent dark:from-slate-950 dark:via-slate-950/40" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

        {/* Region Tag at Top Left - Frosted Glass Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/85 dark:bg-black/60 text-amber-800 dark:text-amber-300 border border-amber-500/30 backdrop-blur-md shadow-md">
            {city.region}
          </span>
        </div>

        {/* Nickname / Tagline Badge at Top Right */}
        {city.nickname && (
          <div className="absolute top-4 right-4 z-10 hidden sm:block">
            <span className="px-3 py-1 rounded-full text-[10px] tracking-wide text-slate-200 bg-black/50 border border-white/20 backdrop-blur-md">
              {city.nickname}
            </span>
          </div>
        )}

        {/* City Title Overlay at Bottom of Image */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="flex items-center gap-1.5 text-xs text-amber-300 dark:text-amber-400 font-semibold tracking-wider uppercase mb-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{city.province}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide group-hover:text-amber-200 transition-colors drop-shadow">
            {city.name}
          </h3>
        </div>
      </div>

      {/* Card Content & Details - Theme Adapted */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 bg-gradient-to-b from-stone-50/50 to-white/90 dark:from-slate-900/90 dark:to-slate-950 transition-colors">
        <p className="text-stone-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
          {city.shortDescription}
        </p>

        {/* Culture Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {city.cultureBadges?.slice(0, 3).map((badge, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-lg bg-amber-500/10 dark:bg-slate-800/80 text-amber-800 dark:text-amber-300/90 border border-amber-500/25 dark:border-amber-500/20"
            >
              <Sparkles className="w-2.5 h-2.5 text-amber-500 dark:text-amber-400" />
              {badge}
            </span>
          ))}
          {city.cultureBadges?.length > 3 && (
            <span className="text-[10px] text-stone-400 dark:text-slate-400 self-center">
              +{city.cultureBadges.length - 3} lainnya
            </span>
          )}
        </div>

        {/* Explore Button with Glass & Glow Effect */}
        <Link
          to={`/city/${city.id}`}
          className="group/btn w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500 dark:bg-amber-500/10 text-amber-800 hover:text-slate-950 dark:text-amber-300 dark:hover:text-slate-950 border border-amber-500/35 hover:border-amber-500 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          aria-label={`Explore ${city.name}`}
        >
          <span>Explore {city.name}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
