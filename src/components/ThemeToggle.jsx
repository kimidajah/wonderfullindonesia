import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 ${
        isDark
          ? 'bg-slate-900/60 text-amber-300 hover:text-amber-200 border border-amber-500/30 hover:border-amber-400/60 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
          : 'bg-white/70 text-amber-700 hover:text-amber-900 border border-amber-500/30 hover:border-amber-500/60 shadow-[0_4px_15px_rgba(180,140,50,0.12)]'
      } backdrop-blur-md ${className}`}
      title={isDark ? 'Beralih ke Mode Terang (Light Mode)' : 'Beralih ke Mode Gelap (Dark Mode)'}
      aria-label="Toggle theme mode"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-500 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-amber-600 rotate-0 transition-transform duration-500 hover:-rotate-12" />
        )}
      </div>
      <span className="hidden lg:inline ml-1.5 font-sans tracking-wider uppercase text-[11px] font-semibold">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}

