import ArchiveCard from '../components/ArchiveCard';
import useFetch from '../../../hooks/useFetch';
import { LoadingState, ErrorState, EmptyState } from '../../../components/common/StateDisplays';

export default function ArchiveGrid() {
  const { data: featured, loading: loadingFeatured, error: errorFeatured } = useFetch('archives/featured/');
  const { data: assets, loading: loadingAssets, error: errorAssets } = useFetch('archives/assets/');

  if (loadingFeatured || loadingAssets) return <LoadingState />;
  if (errorFeatured) return <ErrorState error={errorFeatured} />;
  if (errorAssets) return <ErrorState error={errorAssets} />;

  const infraFeature = featured && featured.find(a => a.asset_id === 'project_omega');
  // fallback if second feature doesn't exist just use the same or conditionally render
  const nvFeature = featured && featured.find(a => a.asset_id !== 'project_omega') || infraFeature; 

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Large Feature 1 */}
      {infraFeature && (
        <div className="md:col-span-8 group cursor-pointer">
          <div className="relative glass-panel corner-bracket scanline-effect aspect-video overflow-hidden border border-glass-stroke">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
              src={infraFeature.image} 
              alt={infraFeature.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-panel-padding flex justify-between items-end">
              <div>
                <span className="bg-nightvision-neon text-void-black font-label-sm text-label-sm px-2 py-0.5 mb-3 inline-block">FEATURED_OP</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">{infraFeature.title}</h3>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">SECTOR:</span>
                    <span className="font-label-sm text-label-sm text-nightvision-neon">{infraFeature.sector}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">RES:</span>
                    <span className="font-label-sm text-label-sm text-nightvision-neon">{infraFeature.res}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="status-pulse font-label-md text-label-md text-nightvision-neon mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-nightvision-neon"></span> {infraFeature.status}
                </span>
                <span className="material-symbols-outlined text-nightvision-neon text-3xl">open_in_full</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Side Card 1 */}
      {nvFeature && (
        <div className="md:col-span-4 group cursor-pointer">
          <div className="glass-panel corner-bracket h-full flex flex-col border border-glass-stroke overflow-hidden scanline-effect">
            <div className="relative h-64 overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                src={nvFeature.image} 
                alt={nvFeature.title} 
              />
              <div className="absolute top-4 right-4 bg-void-black/80 backdrop-blur border border-nightvision-neon/30 p-2">
                <span className="material-symbols-outlined text-nightvision-neon">visibility</span>
              </div>
            </div>
            <div className="p-panel-padding flex-1 flex flex-col">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{nvFeature.title}</h3>
              <p className="text-on-surface-variant text-body-md mb-6 flex-1">{nvFeature.description}</p>
              <div className="grid grid-cols-2 gap-4 border-t border-glass-stroke pt-4">
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">RESOLUTION</p>
                  <p className="font-label-md text-label-md text-nightvision-neon">{nvFeature.res}</p>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">STATUS</p>
                  <p className="font-label-md text-label-md text-nightvision-neon">{nvFeature.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Asset Grid Items */}
      {assets && assets.map(asset => (
        <ArchiveCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
