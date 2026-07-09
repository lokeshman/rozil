import Navbar from '../../components/layout/Navbar';


import Footer from '../../components/layout/Footer';
import ArchivesHeader from './sections/ArchivesHeader';
import ArchiveGrid from './sections/ArchiveGrid';

export default function Archives() {
  return (
    <div className="bg-background selection:bg-nightvision-neon selection:text-void-black font-body-md custom-scrollbar min-h-screen text-on-surface overflow-x-hidden">
      <Navbar />
      
      <div className="flex pt-16 min-h-screen relative z-20">

        
        <main className="flex-grow pt-6 min-h-screen">
          <div className="p-6 lg:p-grid-margin">
            <ArchivesHeader />
            <ArchiveGrid />
            
            
            {/* Footer Meta */}
            <Footer />
          </div>
        </main>
      </div>


    </div>
  );
}
