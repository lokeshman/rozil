import { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';

import Footer from '../../components/layout/Footer';
import Hero from './sections/Hero';
import VentureEmpire from './sections/VentureEmpire';
import ScalingFuture from './sections/ScalingFuture';
import Metrics from './sections/Metrics';
import Media from './sections/Media';
import Gallery from './sections/Gallery';
import ContactSection from './sections/ContactSection';

export default function Home() {
  useEffect(() => {
    // Handle scrolling to hash sections on mount and hashchange
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden selection:bg-nightvision-neon selection:text-void-black">

      
      <Navbar />
      
      <main className="pt-16 min-h-screen">
        <Hero />
        <VentureEmpire />
        <ScalingFuture />
        <Metrics />
        <Media />
        <Gallery />
        <ContactSection />
        <Footer />
      </main>
      

    </div>
  );
}
