import { useEffect } from 'react';
import { X } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function LightboxModal({ isOpen, onClose, destination, cityName }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !destination) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white/90 dark:bg-slate-900/95 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white/90 hover:text-white hover:bg-black/90 transition-all cursor-pointer border border-white/20 backdrop-blur-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
          <ImageWithFallback
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 dark:from-slate-950" />
        </div>

        {/* Content Info */}
        <div className="p-6 sm:p-8 bg-white/80 dark:bg-slate-900/95 border-t border-amber-500/20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
              {destination.category} • {cityName}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 dark:text-white mb-3">
            {destination.name}
          </h3>
          <p className="text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {destination.description}
          </p>
        </div>
      </div>
    </div>
  );
}
