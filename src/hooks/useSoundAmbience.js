import { useState, useRef, useEffect, useCallback } from 'react';

// Pentatonic Slendro frequencies (Hz) for authentic Javanese/Balinese gamelan tuning
const SLENDRO_NOTES = [275, 312, 355, 415, 470, 550, 624];

/**
 * useSoundAmbience: Web Audio API synthesizer for meditative Nusantara Gamelan chime & nature breeze
 */
export function useSoundAmbience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);
  const isPlayingRef = useRef(false);

  const playGamelanTone = useCallback((ctx) => {
    if (!ctx || ctx.state !== 'running' || !isPlayingRef.current) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Pick a random harmonious tone from the Slendro scale
      const freq = SLENDRO_NOTES[Math.floor(Math.random() * SLENDRO_NOTES.length)];
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Gamelan chime bell decay envelope
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 3.6);
    } catch {
      // Ignore audio synthesis interruption
    }
  }, []);

  const toggleSound = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }

    const ctx = audioCtxRef.current;
    if (!ctx) return;

    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
      if (ctx.state === 'running') {
        ctx.suspend();
      }
    } else {
      ctx.resume().then(() => {
        isPlayingRef.current = true;
        setIsPlaying(true);
        // Play first chime immediately
        playGamelanTone(ctx);
        // Schedule next tranquil chimes every 4.5 seconds
        timerRef.current = setInterval(() => {
          if (isPlayingRef.current) {
            playGamelanTone(ctx);
          }
        }, 4500);
      });
    }
  }, [isPlaying, playGamelanTone]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return { isPlaying, toggleSound };
}
