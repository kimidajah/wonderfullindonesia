import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './hooks/useScrollToTop';
import { useSoundAmbience } from './hooks/useSoundAmbience';
import { ThemeProvider } from './context/ThemeContext';
import MusicPlayer from './components/MusicPlayer';
import FloatingOrnaments from './components/FloatingOrnaments';

// Lazy loaded pages for optimal chunking and fast initial load
const Home = lazy(() => import('./pages/Home'));
const Explore = lazy(() => import('./pages/Explore'));
const CityDetail = lazy(() => import('./pages/CityDetail'));
const Culture = lazy(() => import('./pages/Culture'));
const About = lazy(() => import('./pages/About'));

function PageLoader() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-amber-500 dark:border-amber-400 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-300 font-cinzel">
          Memuat Destinasi...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const { isPlaying: isAudioPlaying, toggleSound: onToggleAudio } = useSoundAmbience();

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />

        {/* Cinematic Splash Loading Screen on first load */}
        {showLoadingScreen && (
          <LoadingScreen onFinish={() => setShowLoadingScreen(false)} />
        )}

        {/* Global Floating Background Ornaments */}
        <FloatingOrnaments />

        <div className="min-h-screen flex flex-col bg-[#fcfaf6] dark:bg-[#070c18] text-stone-900 dark:text-slate-100 antialiased selection:bg-amber-500/30 selection:text-amber-700 dark:selection:text-amber-200 transition-colors duration-500 relative z-10">
          {/* Glassmorphic Sticky Navigation */}
          <Navbar
            isAudioPlaying={isAudioPlaying}
            onToggleAudio={onToggleAudio}
          />

          {/* Main Content Router View */}
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/city/:id" element={<CityDetail />} />
                <Route path="/culture" element={<Culture />} />
                <Route path="/about" element={<About />} />
                {/* Fallback to Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>

          {/* Persistent Background YouTube Music Player */}
          <MusicPlayer />

          {/* Global Cinematic Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
