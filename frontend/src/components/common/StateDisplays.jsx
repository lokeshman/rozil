import React from 'react';

export function LoadingState({ message = 'INITIALIZING...', minHeight = 'min-h-[400px]' }) {
  return (
    <div className={`w-full ${minHeight} flex flex-col items-center justify-center font-label-md`}>
      <div className="flex items-center gap-3 text-nightvision-neon">
        <span className="w-2 h-2 rounded-full bg-nightvision-neon animate-pulse"></span>
        <span className="tracking-widest">{message}</span>
      </div>
      <div className="w-48 h-[1px] bg-glass-stroke mt-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-1/3 bg-nightvision-neon animate-[scan_2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
}

export function ErrorState({ error, minHeight = 'min-h-[400px]' }) {
  return (
    <div className={`w-full ${minHeight} flex flex-col items-center justify-center font-label-md`}>
      <div className="border border-alert-red/30 bg-alert-red/5 p-6 text-center max-w-md">
        <div className="flex items-center justify-center gap-2 text-alert-red mb-2">
          <span className="material-symbols-outlined">warning</span>
          <span className="tracking-widest">SYSTEM_ERROR</span>
        </div>
        <p className="text-on-surface-variant font-body-sm mt-2">{error || 'Unable to retrieve data.'}</p>
      </div>
    </div>
  );
}

export function EmptyState({ message = 'NO DATA FOUND', icon = 'search_off', minHeight = 'min-h-[200px]' }) {
  return (
    <div className={`w-full ${minHeight} flex flex-col items-center justify-center font-label-md text-on-surface-variant opacity-60`}>
      <span className="material-symbols-outlined text-4xl mb-4 text-glass-stroke">{icon}</span>
      <span className="tracking-widest">{message}</span>
    </div>
  );
}
