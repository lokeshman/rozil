import { useState, useEffect, useCallback } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import useFetch from '../../hooks/useFetch';

export default function Gallery() {
  // Selection/Filtering State
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  // Lightbox Modal State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch unique categories list
  const { data: categoriesData } = useFetch('archives/gallery/categories/');
  const categories = categoriesData ? ['All', ...categoriesData] : ['All'];

  // Fetch gallery items when page or category changes
  const queryParams = { page: currentPage };
  if (selectedCategory !== 'All') {
    queryParams.category = selectedCategory;
  }
  const { data: galleryData, loading, error: fetchError } = useFetch('archives/gallery/', [currentPage, selectedCategory], { params: queryParams });
  
  const galleryItems = galleryData?.results || galleryData || [];
  const totalPages = galleryData?.count ? Math.ceil(galleryData.count / 6) : 1;

  const error = fetchError ? "Failed to synchronize visual archives database. Connection timeout." : null;

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e) => {
    if (!lightboxOpen) return;
    
    if (e.key === 'Escape') {
      setLightboxOpen(false);
    } else if (e.key === 'ArrowRight') {
      setActiveIndex(prev => (prev + 1) % galleryItems.length);
    } else if (e.key === 'ArrowLeft') {
      setActiveIndex(prev => (prev - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [lightboxOpen, galleryItems.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-background text-on-surface selection:bg-nightvision-neon selection:text-void-black min-h-screen overflow-x-hidden">
      <div className="scanline"></div>
      <Navbar />

      <main className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-grid-margin py-12">
          
          {/* Hero Section */}
          <section className="mb-16 relative overflow-hidden bg-surface-container-lowest border border-glass-stroke p-6 lg:p-10">
            <div className="absolute inset-0 opacity-10" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 255, 65, 0.05) 50%)', backgroundSize: '100% 4px' }}></div>
            <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 border-nightvision-neon"></div>
            <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 border-nightvision-neon"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-glass-stroke pb-8 mb-8">
              <div>
                <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white leading-tight">GALLERY</h1>
              </div>
              <div className="text-right">
              </div>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Browse cinematic documentation, public keynotes, panel discussions, and behind-the-scenes visual logs captured under the Rozil Thapa mandate.
            </p>
          </section>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-glass-stroke pb-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 border font-label-sm text-xs tracking-wider transition-all ${
                  selectedCategory === cat 
                    ? 'border-nightvision-neon text-nightvision-neon bg-nightvision-neon/5' 
                    : 'border-glass-stroke text-on-surface-variant hover:border-nightvision-neon/40 hover:text-white'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Loading / Error States */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3].map(i => (
                <div key={i} className="border border-glass-stroke bg-surface-container-low/40 h-80 animate-pulse"></div>
              ))}
            </div>
          ) : error ? (
            <div className="text-alert-red text-center py-16 font-label-md">
              [CRITICAL_ERROR] {error}
            </div>
          ) : galleryItems.length === 0 ? (
            <div className="text-on-surface-variant text-center py-16 font-label-md">
              [NO_VISUALS_LOADED_FOR_CATEGORY]
            </div>
          ) : (
            <>
              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {galleryItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    onClick={() => openLightbox(index)}
                    className="group border border-glass-stroke bg-surface-container-low/40 p-2 cursor-pointer hover:border-nightvision-neon transition-colors overflow-hidden relative"
                  >
                    <div className="absolute top-4 right-4 z-20">
                      <span className="font-label-sm text-[9px] text-white bg-void-black/80 px-2 py-0.5 border border-glass-stroke uppercase">
                        {item.category}
                      </span>
                    </div>

                    <div className="relative w-full h-72 overflow-hidden bg-void-black">
                      {item.media_type === 'Video' ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <video 
                            src={item.url} 
                            className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                            muted
                            playsInline
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-void-black/30 group-hover:bg-transparent transition-colors z-10">
                            <span className="material-symbols-outlined text-nightvision-neon text-4xl shadow-[0_0_15px_rgba(0,255,65,0.4)] bg-void-black/60 rounded-full p-2">
                              play_arrow
                            </span>
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={item.url} 
                          alt={item.title} 
                          loading="lazy"
                          className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                        />
                      )}
                    </div>

                    <div className="p-4 border-t border-glass-stroke/30 mt-2 flex justify-between items-center">
                      <h3 className="font-label-md text-label-md text-white group-hover:text-nightvision-neon transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <span className="material-symbols-outlined text-on-surface-variant text-sm group-hover:text-nightvision-neon transition-all">
                        {item.media_type === 'Video' ? 'videocam' : 'visibility'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 border-t border-glass-stroke pt-8">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-glass-stroke text-on-surface-variant font-label-sm text-xs tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:border-nightvision-neon hover:text-white transition-colors"
                  >
                    PREV_PAGE
                  </button>
                  <span className="font-label-md text-label-md text-nightvision-neon">
                    {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
                  </span>
                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-glass-stroke text-on-surface-variant font-label-sm text-xs tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:border-nightvision-neon hover:text-white transition-colors"
                  >
                    NEXT_PAGE
                  </button>
                </div>
              )}
            </>
          )}

          <Footer />
        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxOpen && galleryItems.length > 0 && (
        <div 
          className="fixed inset-0 z-[100] bg-void-black/95 backdrop-blur-md flex flex-col justify-between p-6 select-none"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center z-50">
            <span className="font-label-md text-label-md text-nightvision-neon uppercase tracking-widest">
              GALLERY_ITEM: {activeIndex + 1} / {galleryItems.length}
            </span>
            <button 
              onClick={() => setLightboxOpen(false)}
              className="text-white hover:text-nightvision-neon transition-colors"
              aria-label="Close Lightbox"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          {/* Main Content Area */}
          <div 
            className="flex-grow flex items-center justify-between gap-6"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking image
          >
            {/* Prev Button */}
            <button 
              onClick={() => setActiveIndex(prev => (prev - 1 + galleryItems.length) % galleryItems.length)}
              className="text-white hover:text-nightvision-neon transition-colors p-4 z-50"
              aria-label="Previous Media"
            >
              <span className="material-symbols-outlined text-4xl">arrow_back_ios</span>
            </button>

            {/* Render Active Item */}
            <div className="relative max-w-5xl max-h-[75vh] w-full flex items-center justify-center">
              {galleryItems[activeIndex].media_type === 'Video' ? (
                <video 
                  src={galleryItems[activeIndex].url} 
                  controls 
                  autoPlay
                  className="max-w-full max-h-[75vh] object-contain border border-glass-stroke shadow-2xl"
                />
              ) : (
                <img 
                  src={galleryItems[activeIndex].url} 
                  alt={galleryItems[activeIndex].title} 
                  className="max-w-full max-h-[75vh] object-contain border border-glass-stroke shadow-2xl"
                />
              )}
            </div>

            {/* Next Button */}
            <button 
              onClick={() => setActiveIndex(prev => (prev + 1) % galleryItems.length)}
              className="text-white hover:text-nightvision-neon transition-colors p-4 z-50"
              aria-label="Next Media"
            >
              <span className="material-symbols-outlined text-4xl">arrow_forward_ios</span>
            </button>
          </div>

          {/* Bottom Bar Title & Description */}
          <div className="text-center z-50 border-t border-glass-stroke/40 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
            <h4 className="font-label-md text-lg text-white">
              {galleryItems[activeIndex].title}
            </h4>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase bg-surface-container px-3 py-1 border border-glass-stroke">
              {galleryItems[activeIndex].category}
            </span>
          </div>
        </div>
      )}


    </div>
  );
}
