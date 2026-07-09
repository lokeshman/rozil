import useFetch from '../../../hooks/useFetch';
import Card from '../../../components/common/Card';
import { LoadingState, ErrorState, EmptyState } from '../../../components/common/StateDisplays';

export default function VentureEmpire() {
  const { data: ventures, loading, error } = useFetch('home/ventures/');

  return (
    <section id="leadership" className="py-16 lg:py-24 px-6 lg:px-grid-margin bg-void-black">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="font-label-sm text-[10px] text-nightvision-neon tracking-[0.3em] uppercase mb-4 block">
          PORTFOLIO
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-wider">
          THE_VENTURE_EMPIRE
        </h2>
      </div>

      {loading && <LoadingState minHeight="min-h-[200px]" />}
      {error && <ErrorState error={error} minHeight="min-h-[200px]" />}
      {!loading && !error && (!ventures || ventures.length === 0) && <EmptyState message="NO VENTURES FOUND" />}
      
      {!loading && !error && ventures && ventures.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter max-w-6xl mx-auto">
          {ventures.map((venture) => (
            <Card 
              key={venture.id} 
              className="p-6 lg:p-10 flex flex-col items-center text-center group hover:border-nightvision-neon/60 transition-colors border-glass-stroke/50 bg-gradient-to-b from-surface-container-low to-void-black relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-nightvision-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-16 h-16 bg-surface-container-lowest border border-glass-stroke flex items-center justify-center mb-8 shadow-inner shadow-black group-hover:border-nightvision-neon/50 transition-colors">
                {venture.is_material_icon ? (
                  <span className={`material-symbols-outlined text-3xl ${venture.icon_color}`}>
                    {venture.icon}
                  </span>
                ) : (
                  <span className={`font-headline-md font-bold italic ${venture.icon_color} text-2xl`}>
                    {venture.icon}
                  </span>
                )}
              </div>

              <h3 className="font-headline-md text-headline-md text-on-surface mb-4 uppercase tracking-wide">
                {venture.title}
              </h3>
              
              <p className="text-on-surface-variant font-label-md text-label-md leading-relaxed mb-10 flex-grow">
                {venture.description}
              </p>

              <div className="w-full flex justify-between items-center pt-6 border-t border-glass-stroke/30 mt-auto">
                <span className="font-label-sm text-[10px] text-nightvision-neon px-2 py-1 bg-nightvision-neon/10 uppercase tracking-widest border border-nightvision-neon/20">
                  {venture.badge}
                </span>
                <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                  {venture.status}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
