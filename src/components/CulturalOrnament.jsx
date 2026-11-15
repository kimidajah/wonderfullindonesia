export function BatikDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-4 ${className}`}>
      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-r from-transparent via-amber-500/50 to-amber-500" />
      <svg className="w-5 h-5 text-amber-500 dark:text-amber-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-l from-transparent via-amber-500/50 to-amber-500" />
    </div>
  );
}

export function CornerOrnament({ className = '' }) {
  return (
    <div className={`pointer-events-none select-none text-amber-500/30 dark:text-amber-400/25 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M2 38 V 10 Q 2 2 10 2 H 38" stroke="currentColor" strokeWidth="2" />
        <circle cx="10" cy="10" r="3" fill="currentColor" />
        <path d="M6 14 Q 6 6 14 6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    </div>
  );
}

export function GoldBadge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/15 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30 backdrop-blur-md shadow-sm ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-ping" />
      {children}
    </span>
  );
}
