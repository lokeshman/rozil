import React from 'react';
import Navbar from '../../components/layout/Navbar';
import DirectorPersonnel from './components/DirectorPersonnel';
import LeadershipStructure from './components/LeadershipStructure';
import Footer from '../../components/layout/Footer';
import useFetch from '../../hooks/useFetch';
import { LoadingState, ErrorState } from '../../components/common/StateDisplays';

export default function LeadershipDashboard() {
  const { data, loading, error } = useFetch('home/leadership/');

  if (loading) {
    return (
      <div className="bg-void-black min-h-screen">
        <Navbar />
        <div className="pt-24 px-6 max-w-7xl mx-auto">
          <LoadingState message="INITIALIZING_DASHBOARD..." minHeight="min-h-[500px]" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-void-black min-h-screen">
        <Navbar />
        <div className="pt-24 px-6 max-w-7xl mx-auto">
          <ErrorState error={error || 'DATA_NOT_FOUND'} minHeight="min-h-[500px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-void-black text-on-surface min-h-screen font-body-md overflow-x-hidden selection:bg-nightvision-neon selection:text-void-black">
      {/* Use the same global header as other pages */}
      <Navbar />

      {/* Removed the sidebar (md:ml-64) and LeadershipNavbar */}
      <main className="mt-16 p-6 lg:p-grid-margin min-h-screen flex flex-col">
        {/* Header: LEADERSHIP_MANIFESTO */}
        <section className="mb-12 relative pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-nightvision-neon/30 pb-8">
            <div className="max-w-3xl">
              <h1 className="font-headline-lg text-headline-lg text-nightvision-neon mb-4 drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">LEADERSHIP_MANIFESTO</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                The architecture of NightVision is built upon the synthesis of operational foresight and technical mastery. Our strategic governance ensures that every location in the Rozil Thapa ecosystem operates with absolute precision, privacy, and innovative momentum.
              </p>
            </div>
            
          </div>
        </section>

        <DirectorPersonnel director={data.director} locations={data.locations} />
        
        <LeadershipStructure principles={data.principles} />
        
        <Footer />
      </main>

      {/* FAB Action */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-nightvision-neon text-void-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.4)] hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined">bolt</span>
      </button>
    </div>
  );
}
