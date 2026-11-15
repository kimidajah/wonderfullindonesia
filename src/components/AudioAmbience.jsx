import { Volume2, VolumeX } from 'lucide-react';

export default function AudioAmbience({ isPlaying, onToggle }) {
  return (
    <button
      onClick={onToggle}
      type="button"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
        isPlaying
          ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/50 shadow-[0_0_15px_rgba(212,175,55,0.25)]'
          : 'bg-white/60 dark:bg-slate-900/60 text-stone-600 dark:text-slate-400 border-amber-500/20 dark:border-slate-700/60 hover:text-amber-700 dark:hover:text-slate-200'
      } backdrop-blur-md cursor-pointer`}
      title={isPlaying ? 'Matikan Suara Gamelan Nusantara' : 'Nyalakan Suara Gamelan Nusantara (Web Audio Slendro)'}
      aria-label="Toggle Nusantara Gamelan Ambient Sound"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 animate-pulse" />
          <span className="hidden md:inline font-sans text-[11px] font-semibold">Gamelan: Aktif</span>
          <span className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-1.5 bg-amber-500 dark:bg-amber-400 animate-[bounce_1s_infinite_100ms]" />
            <span className="w-0.5 h-3 bg-amber-500 dark:bg-amber-400 animate-[bounce_1s_infinite_200ms]" />
            <span className="w-0.5 h-2 bg-amber-500 dark:bg-amber-400 animate-[bounce_1s_infinite_300ms]" />
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span className="hidden md:inline font-sans text-[11px]">Gamelan</span>
        </>
      )}
    </button>
  );
}
