import { useState, useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import useFetch from '../../hooks/useFetch';

export default function Media() {
  // Filtering & Pagination State
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch unique categories list
  const { data: categoriesData } = useFetch('archives/media/categories/');
  const categories = categoriesData ? ['All', ...categoriesData] : ['All'];

  // Fetch media items when page, category, or search query changes
  const queryParams = { page: currentPage };
  if (selectedCategory !== 'All') {
    queryParams.category = selectedCategory;
  }
  if (searchQuery.trim() !== '') {
    queryParams.search = searchQuery;
  }

  // Debounced search query for the hook dependency could be complex, but let's just pass the queryParams
  const { data: mediaData, loading: loadingMedia, error: fetchError } = useFetch('archives/media/', [currentPage, selectedCategory, searchQuery], { params: queryParams });
  
  const mediaItems = mediaData?.results || mediaData || [];
  const totalPages = mediaData?.count ? Math.ceil(mediaData.count / 6) : 1;

  const error = fetchError ? "Failed to synchronize media library. Connection link unstable." : null;
  const loading = loadingMedia;

  // Fetch featured item
  const { data: featData } = useFetch('archives/media/', [], { params: { is_featured: 'true' } });
  
  const featuredItem = (currentPage === 1 && selectedCategory === 'All' && searchQuery === '')
    ? (featData?.results || featData)?.[0] || null
    : null;

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
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
                <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white leading-tight">MEDIA_CENTER</h1>
              </div>
              <div className="text-right">
              </div>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Access the official archive of executive press releases, news features, publication briefs, interviews, and keynote conferences. For press materials and asset kit requests, consult media locations details.
            </p>
          </section>

          {/* Featured News Section */}
          {featuredItem && currentPage === 1 && selectedCategory === 'All' && searchQuery === '' && (
            <section className="mb-16 relative bg-surface-container-lowest border border-glass-stroke overflow-hidden group hover:border-nightvision-neon transition-colors">
              <div className="absolute top-4 right-4 flex gap-2 z-20">
                <span className="font-label-sm text-[10px] text-nightvision-neon bg-nightvision-neon/10 border border-nightvision-neon/30 px-3 py-1 uppercase tracking-widest">
                  FEATURED_COVERAGE
                </span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-6 relative min-h-[300px] lg:h-full overflow-hidden">
                  <img 
                    src={featuredItem.image || 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800'} 
                    alt={featuredItem.title} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-void-black to-transparent opacity-40"></div>
                </div>

                <div className="lg:col-span-6 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-4 items-center mb-4">
                      <span className="font-label-sm text-xs text-nightvision-neon font-bold">{featuredItem.outlet.toUpperCase()}</span>
                      <span className="font-label-sm text-xs text-on-surface-variant">• {featuredItem.date}</span>
                    </div>
                    <h2 className="font-headline-md text-2xl text-white mb-4 group-hover:text-nightvision-neon transition-colors leading-snug">
                      {featuredItem.title}
                    </h2>
                    <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
                      {featuredItem.summary}
                    </p>
                  </div>
                  
                  {featuredItem.url && (
                    <a 
                      href={featuredItem.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-nightvision-neon font-label-md text-sm border border-nightvision-neon/30 px-4 py-2 hover:bg-nightvision-neon hover:text-void-black transition-all w-fit"
                    >
                      READ_FULL_ARTICLE
                      <span className="material-symbols-outlined text-xs">arrow_outward</span>
                    </a>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Filtering and Search Controls */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-8 border-b border-glass-stroke pb-6">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <span className="absolute left-3 top-3.5 material-symbols-outlined text-on-surface-variant text-sm">search</span>
              <input 
                type="text" 
                placeholder="SEARCH_MEDIA_LOGS..." 
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-void-black border border-glass-stroke py-3.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-nightvision-neon font-label-sm transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
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
          </div>

          {/* Loading / Error States */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3].map(i => (
                <div key={i} className="border border-glass-stroke bg-surface-container-low/40 p-6 space-y-6 animate-pulse">
                  <div className="w-full h-48 bg-glass-stroke"></div>
                  <div className="h-6 w-3/4 bg-glass-stroke"></div>
                  <div className="h-16 w-full bg-glass-stroke"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-alert-red text-center py-16 font-label-md">
              [CRITICAL_ERROR] {error}
            </div>
          ) : mediaItems.length === 0 ? (
            <div className="text-on-surface-variant text-center py-16 font-label-md">
              [NO_RECORDS_MATCHING_THE_QUERY]
            </div>
          ) : (
            <>
              {/* Media Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {mediaItems.map((item) => (
                  <article 
                    key={item.id} 
                    className="bg-surface-container-low border border-glass-stroke hover:border-nightvision-neon transition-colors flex flex-col group relative"
                  >
                    {item.image && (
                      <div className="w-full h-48 overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
                        />
                        <div className="absolute top-3 left-3">
                          <span className="font-label-sm text-[9px] text-white bg-void-black/75 px-2.5 py-1 border border-glass-stroke uppercase">
                            {item.item_type}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex gap-4 items-center mb-3">
                          <span className="font-label-sm text-xs text-nightvision-neon font-bold">{item.outlet}</span>
                          <span className="font-label-sm text-[10px] text-on-surface-variant">{item.date}</span>
                        </div>
                        <h3 className="font-headline-md text-lg text-white mb-3 group-hover:text-nightvision-neon transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-3 mb-6">
                          {item.summary}
                        </p>
                      </div>

                      {item.url && (
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-label-sm text-[10px] text-nightvision-neon flex items-center gap-1 mt-auto uppercase hover:underline"
                        >
                          ACCESS_REPORT
                          <span className="material-symbols-outlined text-xs">arrow_right_alt</span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination controls */}
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


    </div>
  );
}
