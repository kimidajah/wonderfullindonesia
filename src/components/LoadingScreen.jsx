import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 1100);

    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 1600);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070c18] transition-opacity duration-500 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Emblem Pulsing */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-amber-500/10 border border-amber-400/40 shadow-[0_0_30px_rgba(212,175,55,0.4)] mb-4 animate-pulse">
          <Sparkles className="w-8 h-8 text-amber-400" />
        </div>

        <h2 className="font-cinzel text-2xl font-bold tracking-[0.25em] text-white">
          WONDERFUL
        </h2>
        <span className="text-xs font-sans uppercase tracking-[0.4em] text-amber-400 mt-0.5">
          INDONESIA
        </span>

        {/* Golden loading bar */}
        <div className="w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden mt-6">
          <div className="w-full h-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full animate-[shimmer_1.2s_infinite]" />
        </div>

        <span className="text-[11px] uppercase tracking-widest text-slate-500 mt-3 font-mono">
          Nusantara Virtual Journey
        </span>
      </div>
    </div>
  );
}
