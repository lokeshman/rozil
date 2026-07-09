import React from 'react';

export default function LeadershipStructure({ principles }) {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Location Map visualization */}
        <div className="lg:col-span-2 border border-glass-stroke bg-surface-container-lowest/40 backdrop-blur-md relative overflow-hidden p-panel-padding min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-8 relative z-20">
            <h3 className="font-label-md text-label-md text-nightvision-neon font-bold tracking-widest">LEADERSHIP_STRUCTURE.viz</h3>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-nightvision-neon"></div>
              <div className="w-2 h-2 rounded-full bg-nightvision-neon/30"></div>
              <div className="w-2 h-2 rounded-full bg-nightvision-neon/30"></div>
            </div>
          </div>
          
          <div className="flex-1 relative flex items-center justify-center z-10">
            {/* Simulated Location Map */}
            <div className="relative w-full h-full border border-glass-stroke flex items-center justify-center">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#00FF41 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              {/* Center Location */}
              <div className="z-10 w-24 h-24 rounded-full border-2 border-nightvision-neon flex flex-col items-center justify-center bg-void-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,65,0.3)]">
                <span className="material-symbols-outlined text-nightvision-neon text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>shield</span>
                <span className="font-label-sm text-[8px] text-white mt-1 uppercase">HQ_NODE</span>
              </div>
              
              {/* Branching lines (CSS only) */}
              <div className="absolute w-[80%] h-[1px] bg-nightvision-neon/30 -rotate-45"></div>
              <div className="absolute w-[80%] h-[1px] bg-nightvision-neon/30 rotate-45"></div>
              <div className="absolute w-[60%] h-[1px] bg-nightvision-neon/30 rotate-90"></div>
              
              {/* Satellite Locations */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-nightvision-neon rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-nightvision-neon rounded-full"></div>
              <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-nightvision-neon rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-nightvision-neon rounded-full animate-pulse"></div>
              
              <div className="absolute bottom-4 left-4 font-label-sm text-[10px] text-on-surface-variant flex gap-4">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-nightvision-neon rounded-full"></span> ACTIVE</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-nightvision-neon/30 rounded-full"></span> IDLE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Module: LEADERSHIP_PRINCIPLES */}
        <div className="border border-nightvision-neon/20 bg-nightvision-neon/5 p-panel-padding flex flex-col relative overflow-hidden">
          <h3 className="font-headline-md text-headline-md text-nightvision-neon mb-8">LEADERSHIP_PRINCIPLES</h3>
          
          <div className="space-y-8 flex-1">
            {principles.map((principle) => (
              <div key={principle.id} className="border-l-2 border-nightvision-neon pl-4 py-2">
                <h4 className="font-label-md text-label-md text-white font-bold mb-1">{principle.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{principle.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-glass-stroke">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-nightvision-neon">verified</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">EXECUTIVE_GUIDELINE_NV_001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
