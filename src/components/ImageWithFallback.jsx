import { useState } from 'react';

/**
 * ImageWithFallback: Resilient image component with loading skeleton and guaranteed fallback
 */
export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt = '',
  className = '',
  loading = 'lazy',
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reliable default fallback image (Raja Ampat pristine landscape)
  const defaultFallback = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80';

  const imageSource = hasError ? (fallbackSrc || defaultFallback) : src;

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      {/* Skeleton Shimmer while loading */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 animate-pulse flex items-center justify-center">
          <span className="w-8 h-8 rounded-full border-2 border-amber-500/20 border-t-amber-400 animate-spin" />
        </div>
      )}

      <img
        src={imageSource}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setIsLoading(false);
          }
        }}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoading ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
        {...props}
      />
    </div>
  );
}
