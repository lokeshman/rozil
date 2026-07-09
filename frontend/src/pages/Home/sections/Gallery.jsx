import useFetch from '../../../hooks/useFetch';
import { LoadingState, ErrorState, EmptyState } from '../../../components/common/StateDisplays';

export default function Gallery() {
  const { data: galleryItems, loading, error } = useFetch('archives/gallery/');

  // Use API data or fallback
  const images = galleryItems?.results || galleryItems || [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      title: "GLOBAL_INFRASTRUCTURE",
      category: "Sovereign satellite mesh network downlink"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      title: "CORE_SERVER_ROOM",
      category: "High-privacy operational intelligence grid"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      title: "OPERATIONAL_OS_HUD",
      category: "Rozil Thapa analytical operations control panel"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
      title: "DIGITAL_PORTFOLIO",
      category: "Real-time leadership operations and data streams"
    }
  ];

  return (
    <section id="gallery" className="py-24 px-grid-margin bg-void-black border-t border-glass-stroke">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-label-sm text-[10px] text-nightvision-neon tracking-[0.3em] uppercase mb-4 block">
            GALLERY
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-wider">
            OPERATION_GALLERY
          </h2>
        </div>

        {loading && <LoadingState minHeight="min-h-[200px]" />}
        {error && <ErrorState error={error} minHeight="min-h-[200px]" />}
        {!loading && !error && (!images || images.length === 0) && <EmptyState message="NO GALLERY ITEMS FOUND" />}

        {!loading && !error && images && images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img) => (
              <div 
                key={img.id}
                className="relative aspect-square border border-glass-stroke p-2 bg-surface-container-lowest overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.4)]"
              >
                <div className="w-full h-full overflow-hidden relative">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover filter brightness-75 contrast-125 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Operational HUD style Overlay on hover */}
                  <div className="absolute inset-0 bg-void-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    {/* Top indicators */}
                    <div className="flex justify-between items-start">
                      <span className="font-label-sm text-[8px] text-nightvision-neon border border-nightvision-neon/40 px-1 py-0.5">
                        LIVE_STREAM
                      </span>
                      <span className="font-label-sm text-[8px] text-on-surface-variant">
                        CAM_0{img.id}
                      </span>
                    </div>

                    {/* Bottom context */}
                    <div>
                      <h4 className="font-headline-md text-sm text-nightvision-neon tracking-wider uppercase mb-1">
                        {img.title}
                      </h4>
                      <p className="text-[10px] text-on-surface-variant leading-snug">
                        {img.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
