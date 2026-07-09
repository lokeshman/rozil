import Card from '../../../components/common/Card';

export default function LocationMap() {
  return (
    <Card className="p-panel-padding flex-grow relative overflow-hidden min-h-[300px]">
      {/* Mock Map Interface */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-grow flex items-center justify-center relative">
          {/* HUD Rings */}
          <div className="absolute w-64 h-64 border border-nightvision-neon/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute w-48 h-48 border border-dashed border-nightvision-neon/40 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
          <div className="absolute w-32 h-32 border-2 border-nightvision-neon shadow-[0_0_20px_rgba(0,255,65,0.3)] rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-nightvision-neon text-4xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
              language
            </span>
          </div>
          
          {/* Location Icons Scattered */}
          <div className="absolute top-10 right-10 flex flex-col items-center">
            <span className="material-symbols-outlined text-nightvision-neon text-xl">satellite_alt</span>
            <span className="text-[8px] font-label-sm text-nightvision-neon">LON_01</span>
          </div>
          
          <div className="absolute bottom-10 left-10 flex flex-col items-center">
            <span className="material-symbols-outlined text-terminal-cyan text-xl">router</span>
            <span className="text-[8px] font-label-sm text-terminal-cyan">NYC_04</span>
          </div>
          
          <div className="absolute top-1/4 left-10 flex flex-col items-center opacity-60">
            <span className="material-symbols-outlined text-on-surface-variant text-xl">dns</span>
            <span className="text-[8px] font-label-sm text-on-surface-variant">TYO_09</span>
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-nightvision-neon shadow-[0_0_5px_#00FF41]"></div>
            <span className="text-label-sm text-on-surface-variant">PRIMARY_CORE: STABLE</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-terminal-cyan shadow-[0_0_5px_#00F0FF]"></div>
            <span className="text-label-sm text-on-surface-variant">EDGE_NODES: EXPANDING</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-alert-red animate-pulse"></div>
            <span className="text-label-sm text-on-surface-variant">MAINTENANCE: REQD_S3</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
