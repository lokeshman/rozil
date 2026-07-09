import Navbar from '../../components/layout/Navbar';


import Footer from '../../components/layout/Footer';
import OperationsHeader from './sections/OperationsHeader';
import OperationsOverview from './sections/OperationsOverview';
import OperationsGrid from './sections/OperationsGrid';

export default function Operations() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-nightvision-neon selection:text-void-black min-h-screen">

      <Navbar />
      
      <div className="flex pt-16 min-h-screen relative z-20">

        
        <main className="flex-grow p-6 lg:p-grid-margin flex flex-col">
          <OperationsHeader />
          <OperationsOverview />
          <OperationsGrid />
          
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-glass-stroke pt-6 opacity-60">
            <div className="text-label-sm text-on-surface-variant">
              © 2024 ROZIL THAPA // ALL RIGHTS RESERVED
            </div>
            <div className="flex gap-6 mt-4 md:mt-0 font-label-sm">
              <a className="hover:text-nightvision-neon transition-colors" href="#">PRIVACY_GUIDELINES</a>
              <a className="hover:text-nightvision-neon transition-colors" href="#">API_DOCS</a>
              <a className="hover:text-nightvision-neon transition-colors" href="#">OS_v4.2.0</a>
            </div>
          </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-nightvision-neon text-void-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.6)] z-50 group hover:scale-110 active:scale-95 transition-all">
        <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform">add</span>
      </button>


    </div>
  );
}
