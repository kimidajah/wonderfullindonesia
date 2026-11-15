import { motion } from 'framer-motion';

export default function FloatingOrnaments({ density = 'normal' }) {
  const isDense = density === 'dense';

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none"
    >
      {/* 1. Subtle Radial Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-amber-400/5 dark:bg-amber-500/10 blur-[120px]" />
      <div className="absolute top-2/3 -right-32 w-96 h-96 rounded-full bg-orange-400/5 dark:bg-sky-500/10 blur-[130px]" />

      {/* 2. Floating Batik Kawung Geometric Rings */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 w-72 h-72 rounded-full border border-amber-500/10 dark:border-amber-400/15 opacity-40 dark:opacity-30 flex items-center justify-center"
      >
        <div className="w-48 h-48 rounded-full border border-dashed border-amber-500/10 dark:border-amber-400/10" />
      </motion.div>

      {/* 3. Floating Light Particles */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          opacity: [0.15, 0.45, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/5 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(212,175,55,0.6)]"
      />

      <motion.div
        animate={{
          y: [0, -45, 0],
          opacity: [0.1, 0.5, 0.1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-2/3 left-3/4 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(212,175,55,0.7)]"
      />

      {isDense && (
        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(212,175,55,0.5)]"
        />
      )}

      {/* 4. Delicate Traditional Indonesian Carving Silhouettes in Corner */}
      <svg
        viewBox="0 0 100 100"
        className="absolute bottom-10 left-6 w-24 h-24 text-amber-500/10 dark:text-amber-400/10 animate-float"
        fill="currentColor"
      >
        <path d="M50 0 C 60 25, 75 40, 100 50 C 75 60, 60 75, 50 100 C 40 75, 25 60, 0 50 C 25 40, 40 25, 50 0 Z" />
      </svg>
    </div>
  );
}

