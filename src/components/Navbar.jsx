import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, Sparkles, MapPin, Info } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import AudioAmbience from './AudioAmbience';

export default function Navbar({ isAudioPlaying, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Sparkles },
    { name: 'Explore', path: '/explore', icon: Compass },
    { name: 'Culture', path: '/culture', icon: MapPin },
    { name: 'About', path: '/about', icon: Info },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'py-3 sm:py-3.5'
            : 'py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
              isScrolled
                ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-amber-500/25 dark:border-white/10 shadow-xl shadow-amber-900/5 dark:shadow-black/50'
                : 'bg-white/45 dark:bg-black/35 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-lg shadow-black/5'
            }`}
          >
            {/* 1. Left: Brand Logo (Wonderful Indonesia) */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center gap-2.5 select-none"
              aria-label="Wonderful Indonesia Home"
            >
              {/* Stylized Archipelago Sun / Garuda Bird Emblem */}
              <div className="relative w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-500/40 dark:border-amber-400/40 group-hover:border-amber-500 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <svg
                  viewBox="0 0 32 32"
                  className="w-5 h-5 text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 3C18 7 24 10 28 11C23 15 20 21 16 29C12 21 9 15 4 11C8 10 14 7 16 3Z"
                    fill="url(#logoGoldGrad)"
                    stroke="#fef08a"
                    strokeWidth="0.75"
                  />
                  <circle cx="16" cy="14" r="3" fill="#fff" />
                  <defs>
                    <linearGradient id="logoGoldGrad" x1="4" y1="3" x2="28" y2="29">
                      <stop stopColor="#fef08a" />
                      <stop offset="0.5" stopColor="#d4af37" />
                      <stop offset="1" stopColor="#b45309" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.16em] text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                  WONDERFUL
                </span>
                <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400 font-semibold -mt-1">
                  INDONESIA
                </span>
              </div>
            </Link>

            {/* 2. Center: Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-2 px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/5 dark:border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                      active
                        ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                        : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* 3. Right: Theme Toggle + Sound Toggle + Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Optional Web Audio Chime */}
              <div className="hidden sm:block">
                <AudioAmbience isPlaying={isAudioPlaying} onToggle={onToggleAudio} />
              </div>

              {/* Theme Mode Toggle (Sun/Moon) */}
              <ThemeToggle />

              {/* Mobile Hamburger Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-slate-900/5 dark:bg-slate-800/60 border border-slate-300/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-white md:hidden cursor-pointer backdrop-blur-sm transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-amber-500" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Glassmorphism Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-stone-100/90 dark:bg-slate-950/90 backdrop-blur-2xl flex flex-col pt-28 px-6 animate-fadeIn">
          <div className="space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border text-sm font-semibold tracking-wider uppercase transition-all ${
                    active
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-white/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-slate-950' : 'text-amber-500 dark:text-amber-400'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Sound Toggle in Drawer */}
          <div className="mt-6 p-4 rounded-2xl bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300 font-cinzel">
              Gamelan Slendro Ambient
            </span>
            <AudioAmbience isPlaying={isAudioPlaying} onToggle={onToggleAudio} />
          </div>

          <div className="mt-auto mb-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1 font-cinzel font-semibold">
              Kementerian Pariwisata Republik Indonesia
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              Wonderful Indonesia • Explore the Beauty of Indonesia
            </p>
          </div>
        </div>
      )}
    </>
  );
}
