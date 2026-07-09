import { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';


import Footer from '../../components/layout/Footer';
import FilterPanel from './sections/FilterPanel';
import AnalyticsHeader from './sections/AnalyticsHeader';
import AnalyticsList from './sections/AnalyticsList';
import Pagination from './sections/Pagination';

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll('.glass-panel').forEach(panel => {
        const rect = panel.getBoundingClientRect();
        panel.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        panel.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-background text-on-surface selection:bg-nightvision-neon selection:text-void-black min-h-screen overflow-x-hidden">
      
      <Navbar />
      
      <div className="flex pt-16 min-h-screen relative z-10">

        
        <main className="flex-grow p-6 lg:p-10 overflow-y-auto flex flex-col justify-between">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-6 flex-grow">
            <aside className="lg:w-72 shrink-0 space-y-4">
              <FilterPanel />
            </aside>
            
            <div className="flex-grow space-y-6">
              <AnalyticsHeader />
              <AnalyticsList />
              <Pagination />
            </div>
          </div>
          
          <Footer />
        </main>
      </div>
      

    </div>
  );
}
