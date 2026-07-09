import React from 'react';
import LocationCard from './LocationCard';

export default function DirectorPersonnel({ director, locations }) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline-md text-headline-md text-nightvision-neon tracking-tight">DIRECTOR_LEVEL_PERSONNEL</h2>
        <div className="flex-1 h-px bg-glass-stroke"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* CEO Featured Card */}
        <div className="lg:col-span-7 border border-glass-stroke bg-surface-container-lowest/40 backdrop-blur-md relative overflow-hidden p-0 group">
          {/* HUD Border effect using inline absolute divs */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-nightvision-neon z-20"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-nightvision-neon z-20"></div>
          
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 relative h-96 md:h-auto overflow-hidden">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt={`Portrait of ${director.name}`} 
                src={director.imageUrl} 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-void-black/80 via-transparent to-transparent"></div>
              {/* HUD Metadata Overlay */}
              <div className="absolute top-4 left-4 font-label-sm text-label-sm text-nightvision-neon bg-void-black/80 p-2 border border-nightvision-neon/30 backdrop-blur-sm z-10">
                [SCANNING_BIOMETRICS]
              </div>
            </div>
            
            <div className="md:w-1/2 p-panel-padding flex flex-col justify-center border-l border-glass-stroke bg-surface-container-low relative z-10">
              <div className="mb-6">
                <span className="px-2 py-1 bg-nightvision-neon/10 border border-nightvision-neon text-nightvision-neon font-label-sm text-label-sm mb-2 inline-block">
                  {director.access_level}
                </span>
                <h3 className="font-headline-md text-headline-md text-white mb-1">{director.name}</h3>
                <p className="font-label-md text-label-md text-nightvision-neon">{director.title}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-glass-stroke pb-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">TENURE</span>
                  <span className="font-label-sm text-label-sm text-white">{director.tenure}</span>
                </div>
                <div className="flex justify-between border-b border-glass-stroke pb-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">SECTOR</span>
                  <span className="font-label-sm text-label-sm text-white">{director.sector}</span>
                </div>
                <div className="flex justify-between border-b border-glass-stroke pb-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">UPTIME</span>
                  <span className="font-label-sm text-label-sm text-nightvision-neon">{director.uptime}</span>
                </div>
              </div>
              
              <button className="text-left font-label-md text-label-md text-nightvision-neon flex items-center gap-2 group/btn cursor-pointer bg-transparent border-none p-0 outline-none">
                <span className="border-b border-nightvision-neon">VIEW_FULL_BRIEF</span>
                <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Strategic Locations Bento Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {locations.map((location, index) => (
            <LocationCard key={location.id} location={location} />
          ))}
          
          {/* Placeholder Location */}
          <div className="border border-dashed border-nightvision-neon/20 bg-surface-container-lowest/40 p-panel-padding flex flex-col items-center justify-center text-center opacity-50 relative overflow-hidden">
            <span className="material-symbols-outlined text-nightvision-neon mb-2 text-[32px]">add_circle</span>
            <p className="font-label-sm text-label-sm text-nightvision-neon">AWAITING_APPOINTMENT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
