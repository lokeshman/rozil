import Card from '../../../components/common/Card';

export default function ArchiveCard({ asset }) {
  return (
    <Card className="md:col-span-4 p-panel-padding scanline-effect hover:border-nightvision-neon/50 transition-colors cursor-pointer group">
      <div className="p-panel-padding bg-surface-container-highest/20 flex-1 flex flex-col justify-between group-hover:bg-nightvision-neon/5 transition-colors duration-500">
        <div>
          <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">{asset.sector}</span>
          <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-6 flex items-center gap-2">
            <span className={`material-symbols-outlined text-${asset.theme} text-sm`}>{asset.icon}</span>
            {asset.title}
          </h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between font-label-sm text-[10px] tracking-widest">
            <span className="text-on-surface-variant">{asset.stats_label}</span>
            <span className={`text-${asset.theme} font-bold`}>{asset.stats_value}</span>
          </div>
          <div className="h-1 w-full bg-surface-container-highest overflow-hidden">
            <div 
              className={`h-full bg-${asset.theme} ${asset.stats_glow ? 'shadow-[0_0_10px_currentColor]' : ''}`}
              style={{ width: asset.stats_progress }}
            ></div>
          </div>
          <div className="flex justify-between items-end border-t border-glass-stroke/30 pt-4 mt-6">
            <span className="font-label-sm text-[10px] text-on-surface-variant">LAST_MOD: {asset.last_mod}</span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-on-surface text-sm transition-colors">download</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
