import React from 'react';

export default function LocationCard({ location }) {
  return (
    <div className="border border-glass-stroke bg-surface-container-lowest/40 backdrop-blur-md relative overflow-hidden p-panel-padding group hover:bg-surface-container-lowest/60 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 border border-glass-stroke p-1">
          <img 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
            alt={`Portrait of ${location.name}`} 
            src={location.imageUrl}
          />
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">{location.level}</span>
      </div>
      
      <h4 className="font-label-md text-label-md text-white font-bold">{location.name}</h4>
      <p className="font-label-sm text-label-sm text-nightvision-neon mb-4">{location.department}</p>
      
      <div className="h-1 w-full bg-glass-stroke mb-4 relative">
        <div 
          className={`h-full ${location.statusColor} ${location.hasShadow ? 'shadow-[0_0_8px_rgba(255,59,59,0.5)]' : ''}`} 
          style={{ width: location.statusWidth }}
        ></div>
      </div>
      
      <p className="text-[12px] font-label-sm text-on-surface-variant leading-tight">{location.description}</p>
      
      {/* Interactive hover overlay */}
      <div className="absolute inset-0 bg-nightvision-neon/5 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity pointer-events-none"></div>
    </div>
  );
}
