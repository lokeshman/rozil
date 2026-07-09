import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'));
const Network = lazy(() => import('./pages/Network'));
const Analytics = lazy(() => import('./pages/Analytics/Analytics'));
const Operations = lazy(() => import('./pages/Operations/Operations'));
const Archives = lazy(() => import('./pages/Archives/Archives'));
const VisionManifesto = lazy(() => import('./pages/Vision/VisionManifesto'));
const AboutCEO = lazy(() => import('./pages/About/AboutCEO'));
const LeadershipDashboard = lazy(() => import('./pages/Leadership/LeadershipDashboard'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Media = lazy(() => import('./pages/Media/Media'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));

// Simple loading fallback for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-nightvision-neon border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Resets page scroll position to the top on router transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/network" element={<Network />} />
          <Route path="/intelligence" element={<Analytics />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/achievements" element={<Archives />} />
          <Route path="/vision" element={<VisionManifesto />} />
          <Route path="/about-ceo" element={<AboutCEO />} />
          <Route path="/leadership" element={<LeadershipDashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
