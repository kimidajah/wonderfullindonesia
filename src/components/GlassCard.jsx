export default function GlassCard({
  children,
  className = '',
  variant = 'default', // 'default' | 'subtle' | 'gold' | 'card'
  hover = true,
  ...props
}) {
  const variantStyles = {
    default:
      'bg-white/70 dark:bg-slate-900/70 border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30',
    subtle:
      'bg-white/50 dark:bg-slate-900/50 border-amber-500/20 dark:border-white/5 shadow-md shadow-black/5 dark:shadow-black/20',
    gold:
      'bg-gradient-to-br from-amber-500/10 via-white/70 to-amber-500/5 dark:from-amber-500/15 dark:via-slate-900/75 dark:to-slate-950/80 border-amber-500/30 dark:border-amber-500/30 shadow-xl shadow-amber-500/5 dark:shadow-amber-500/10',
    card:
      'bg-white/80 dark:bg-slate-900/80 border-amber-500/25 dark:border-slate-800 shadow-xl shadow-stone-900/5 dark:shadow-black/40'
  };

  const hoverStyle = hover
    ? 'transition-all duration-300 hover:border-amber-500/50 dark:hover:border-amber-400/50 hover:shadow-2xl hover:-translate-y-1'
    : '';

  return (
    <div
      className={`rounded-2xl backdrop-blur-xl border ${variantStyles[variant] || variantStyles.default} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

