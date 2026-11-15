import { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

const YOUTUBE_VIDEO_ID = '_B4NpBJIKq0';

export default function MusicPlayer() {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [status, setStatus] = useState('Memuat Player...');

  const playerRef = useRef(null);
  const containerId = 'yt-bg-music-player';

  // Initialize YouTube IFrame Player
  useEffect(() => {
    let isCancelled = false;

    function initPlayer() {
      if (!window.YT || !window.YT.Player) return;
      if (playerRef.current) return;

      try {
        new window.YT.Player(containerId, {
          height: '1',
          width: '1',
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            playsinline: 1,
            origin: window.location.origin
          },
          events: {
            onReady: (event) => {
              if (isCancelled) return;
              playerRef.current = event.target;
              event.target.setVolume(70);
              setIsReady(true);
              setStatus('Siap Diputar');
            },
            onStateChange: (event) => {
              if (isCancelled) return;
              // YT.PlayerState.PLAYING = 1, PAUSED = 2, ENDED = 0
              if (event.data === 1) {
                setIsPlaying(true);
                setStatus('Sedang Memutar');
              } else if (event.data === 2) {
                setIsPlaying(false);
                setStatus('Jeda');
              } else if (event.data === 0) {
                // Loop video
                event.target.playVideo();
              }
            },
            onError: () => {
              if (isCancelled) return;
              setHasError(true);
              setStatus('Audio Tidak Tersedia');
            }
          }
        });
      } catch {
        if (!isCancelled) {
          setHasError(true);
          setStatus('Gagal Memuat Audio');
        }
      }
    }

    // Load YouTube API script if not present
    if (!window.YT) {
      const existingScript = document.querySelector('script[src*="youtube.com/iframe_api"]');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        document.body.appendChild(tag);
      }

      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };
    } else {
      initPlayer();
    }

    return () => {
      isCancelled = true;
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch {
          // Ignore destruction error
        }
        playerRef.current = null;
      }
    };
  }, []);

  const togglePlay = useCallback(() => {
    if (!playerRef.current || !isReady) return;

    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    } catch {
      setHasError(true);
      setStatus('Kesalahan Pemutar');
    }
  }, [isPlaying, isReady]);

  const toggleMute = useCallback(() => {
    if (!playerRef.current || !isReady) return;

    try {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch {
      // Ignore
    }
  }, [isMuted, isReady]);

  const handleVolumeChange = (e) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (playerRef.current && isReady) {
      try {
        playerRef.current.setVolume(val);
        if (val === 0) {
          setIsMuted(true);
        } else if (isMuted) {
          setIsMuted(false);
          playerRef.current.unMute();
        }
      } catch {
        // Ignore
      }
    }
  };

  return (
    <>
      {/* Hidden YouTube IFrame Holder */}
      <div
        id={containerId}
        aria-hidden="true"
        className="fixed -top-[9999px] -left-[9999px] w-1 h-1 pointer-events-none opacity-0 overflow-hidden"
      />

      {/* Floating Glassmorphic Mini Music Player at Bottom-Right */}
      <aside
        aria-label="Pemutar Musik Latar Wonderful Indonesia"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none transition-all duration-500 ease-out"
      >
        <div
          className={`flex flex-col rounded-2xl transition-all duration-300 ${
            isExpanded
              ? 'w-72 sm:w-80 p-4'
              : 'p-2 sm:px-3 sm:py-2.5'
          } bg-white/75 dark:bg-slate-900/80 backdrop-blur-xl border border-amber-500/30 dark:border-amber-500/25 shadow-2xl shadow-black/25 dark:shadow-black/60`}
        >
          {/* Header / Compact Bar */}
          <div className="flex items-center justify-between gap-3">
            {/* Left: Music Icon + Equalizer */}
            <div
              className="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0"
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Kecilkan Pemutar Musik' : 'Buka Pengaturan Musik'}
            >
              <div
                className={`relative w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                  isPlaying
                    ? 'bg-amber-500/20 text-amber-500 dark:text-amber-400 border border-amber-500/40'
                    : 'bg-slate-200/70 dark:bg-slate-800/70 text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700'
                }`}
              >
                <Music className="w-4 h-4" />
                {isPlaying && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
                )}
              </div>

              {/* Title & Status */}
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-100 truncate font-cinzel tracking-wider">
                  Wonderful Indonesia
                </span>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
                  {isPlaying ? (
                    <div className="flex items-end gap-0.5 h-2.5 w-3.5">
                      <span className="w-0.5 bg-amber-500 dark:bg-amber-400 rounded-full animate-eq-1" />
                      <span className="w-0.5 bg-amber-500 dark:bg-amber-400 rounded-full animate-eq-2" />
                      <span className="w-0.5 bg-amber-500 dark:bg-amber-400 rounded-full animate-eq-3" />
                      <span className="w-0.5 bg-amber-500 dark:bg-amber-400 rounded-full animate-eq-4" />
                    </div>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  )}
                  <span className="truncate">{status}</span>
                </div>
              </div>
            </div>

            {/* Quick Play/Pause Button */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={togglePlay}
                disabled={!isReady || hasError}
                aria-label={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  isPlaying
                    ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-amber-500/15 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300 hover:bg-amber-500 hover:text-slate-950 border border-amber-500/30'
                } disabled:opacity-40 disabled:cursor-not-allowed`}
                title={isPlaying ? 'Jeda Musik' : 'Putar Musik Latar'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>

              {/* Expand Toggle */}
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={isExpanded ? 'Tutup Kontrol Musik' : 'Buka Kontrol Musik Lengkap'}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Expanded Drawer: Volume Slider, Mute, Attribution */}
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3 animate-fadeIn">
              {/* Volume & Mute Row */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleMute}
                  disabled={!isReady || hasError}
                  aria-label={isMuted ? 'Nyalakan Suara' : 'Bisukan Suara'}
                  className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-300 transition-colors cursor-pointer"
                  title={isMuted ? 'Nyalakan Suara' : 'Bisukan'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-rose-500" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    disabled={!isReady || hasError}
                    aria-label="Volume Musik"
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 w-7 text-right font-mono">
                    {isMuted ? '0%' : `${volume}%`}
                  </span>
                </div>
              </div>

              {/* Attribution / Info */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 pt-1">
                <span>Soundtrack Wonderful Indonesia</span>
                {hasError && (
                  <span className="flex items-center gap-1 text-rose-400">
                    <AlertCircle className="w-3 h-3" /> Error
                  </span>
                )}
                {!hasError && isReady && (
                  <span className="text-amber-500 dark:text-amber-400 font-medium">YouTube Audio</span>
                )}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
