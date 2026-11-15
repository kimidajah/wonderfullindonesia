import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ArrowDown, ChevronRight, Sparkles } from 'lucide-react';
import { BatikDivider } from './CulturalOrnament';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    title: 'Raja Ampat',
    location: 'Papua Barat Daya',
    subtitle: 'Zamrud Karang Khatulistiwa Terkaya di Dunia'
  },
  {
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2560&q=85',
    title: 'Gunung Bromo',
    location: 'Jawa Timur',
    subtitle: 'Lautan Pasir Berbisik di Kaki Kaldera Suci'
  },
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2560&q=85',
    title: 'Ulun Danu Beratan',
    location: 'Bedugul, Bali',
    subtitle: 'Pura Air Suci Mengambang di Atas Danau Mistis'
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    title: 'Labuan Bajo & Padar',
    location: 'Nusa Tenggara Timur',
    subtitle: 'Bukit Karang Tiga Warna & Suaka Komodo Purba'
  }
];

export default function Hero({ onExploreClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate background every 9 seconds for cinematic travel feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Fullscreen Background Images with Slow Ken Burns Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover animate-ken-burns"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Dark Transparent Gradient Overlays for Universal Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-black/45 to-black/60 dark:from-[#070c18] dark:via-black/50 dark:to-black/60" />
      <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/75 pointer-events-none" />

      {/* Floating Traditional Indonesian Batik Motifs in Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-amber-400/15 pointer-events-none opacity-40 flex items-center justify-center"
      >
        <div className="w-3/4 h-3/4 rounded-full border border-amber-400/15 border-dashed" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tagline with Glass Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 dark:bg-slate-950/60 border border-white/30 dark:border-amber-400/40 backdrop-blur-xl mb-6 shadow-xl"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs sm:text-sm font-cinzel font-semibold tracking-[0.25em] text-amber-200 dark:text-amber-300 uppercase">
            Wonderful Indonesia • Official Explorer
          </span>
        </motion.div>

        {/* Main Big Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1] max-w-4xl drop-shadow-2xl"
        >
          DISCOVER THE BEAUTY OF{' '}
          <span className="text-gold-light dark:text-gold-gradient block mt-1">
            INDONESIA
          </span>
        </motion.h1>

        {/* Traditional Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <BatikDivider className="my-2" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-base sm:text-xl text-slate-100 max-w-2xl font-light leading-relaxed mb-8 drop-shadow-md"
        >
          An unforgettable journey through thousands of islands, cultures, traditions, and extraordinary destinations.
        </motion.p>

        {/* Action Buttons with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/explore"
            onClick={onExploreClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold tracking-widest text-sm uppercase shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-105"
          >
            <Compass className="w-5 h-5 transition-transform group-hover:rotate-45 duration-500" />
            <span>Explore Indonesia</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/culture"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/25 hover:bg-white/35 dark:bg-slate-950/60 dark:hover:bg-slate-900 border border-white/40 dark:border-slate-700/80 text-white font-semibold tracking-wider text-sm uppercase backdrop-blur-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Warisan Budaya</span>
          </Link>
        </motion.div>
      </div>

      {/* Slide Navigation Dots & Location Badge */}
      <div className="absolute bottom-10 left-6 sm:left-12 z-20 hidden md:flex items-center gap-4 bg-white/25 dark:bg-slate-950/60 border border-white/30 dark:border-white/10 px-4 py-2.5 rounded-full backdrop-blur-xl shadow-lg">
        <span className="text-xs text-amber-200 dark:text-amber-300 font-semibold tracking-wider uppercase font-cinzel">
          {slide.title}
        </span>
        <span className="text-slate-200 text-xs">• {slide.location}</span>
        <div className="flex items-center gap-1.5 ml-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Smooth Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('highlights') || document.getElementById('explore-preview');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group flex flex-col items-center text-slate-300 hover:text-amber-300 transition-colors cursor-pointer"
          aria-label="Scroll down to explore"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium mb-1.5 group-hover:tracking-[0.4em] transition-all">
            Scroll to Explore
          </span>
          <ArrowDown className="w-4 h-4 text-amber-400 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
