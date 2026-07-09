import Card from '../../../components/common/Card';
import useFetch from '../../../hooks/useFetch';
import { LoadingState, ErrorState, EmptyState } from '../../../components/common/StateDisplays';

export default function Media() {
  const { data: mediaItemsData, loading, error } = useFetch('archives/media/');

  // Use API data or fallback
  const mediaItems = mediaItemsData?.results || mediaItemsData || [
    {
      id: 1,
      outlet: "FORBES",
      title: "Disrupting the Venture Ecosystem: How Rozil Thapa is Building the Next-Gen OS",
      date: "MARCH 2026",
      summary: "An in-depth profile on the systems-driven architecture behind Rozil Thapa and the rapid growth of the Venture Empire.",
      url: "#"
    },
    {
      id: 2,
      outlet: "TECHCRUNCH",
      title: "Rozil Thapa Active Connection: The Strategy Redefining Digital Operations",
      date: "JANUARY 2026",
      summary: "Exploring the technical integration of AI-driven location mapping and high-throughput execution guidelines.",
      url: "#"
    },
    {
      id: 3,
      outlet: "WIRED",
      title: "Inside the NightVision Initiative: Military-Grade Precision in Digital Growth",
      date: "OCTOBER 2025",
      summary: "How precision engineering, cognitive OS models, and strict operational privacy are merging to form resilient strategy layers.",
      url: "#"
    }
  ];

  return (
    <section id="media" className="py-24 px-grid-margin bg-void-black border-t border-glass-stroke">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-label-sm text-[10px] text-nightvision-neon tracking-[0.3em] uppercase mb-4 block">
            PRESS & MEDIA
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-wider">
            MEDIA_COVERAGE
          </h2>
        </div>

        {loading && <LoadingState minHeight="min-h-[200px]" />}
        {error && <ErrorState error={error} minHeight="min-h-[200px]" />}
        {!loading && !error && (!mediaItems || mediaItems.length === 0) && <EmptyState message="NO MEDIA COVERAGE FOUND" />}

        {!loading && !error && mediaItems && mediaItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {mediaItems.map((item) => (
              <Card 
                key={item.id} 
                className="p-8 flex flex-col justify-between group hover:border-nightvision-neon/60 transition-colors border-glass-stroke/50 bg-gradient-to-b from-surface-container-low to-void-black relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-nightvision-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-label-sm text-[10px] text-nightvision-neon px-2.5 py-1 bg-nightvision-neon/10 border border-nightvision-neon/20 uppercase tracking-widest">
                      {item.outlet}
                    </span>
                    <span className="font-label-sm text-[10px] text-on-surface-variant">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-xl text-on-surface mb-4 group-hover:text-nightvision-neon transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant font-body-md leading-relaxed mb-8">
                    {item.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-glass-stroke/20 flex items-center justify-between">
                  <a href={item.url || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
                    <span className="font-label-sm text-[10px] text-on-surface-variant group-hover:text-nightvision-neon transition-colors uppercase tracking-widest">
                      ACCESS_BRIEF
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-nightvision-neon transition-all group-hover:translate-x-1 duration-150">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
