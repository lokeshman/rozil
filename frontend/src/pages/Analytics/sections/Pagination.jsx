export default function Pagination() {
  return (
    <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-glass-stroke pt-8">
      <div className="flex items-center gap-2">
        <span className="font-label-md text-label-md text-on-surface-variant uppercase">Archive Capacity:</span>
        <div className="w-32 h-2 bg-surface-container-highest rounded-full overflow-hidden">
          <div className="h-full bg-nightvision-neon w-[72%]"></div>
        </div>
        <span className="font-label-sm text-label-sm text-nightvision-neon">72%</span>
      </div>
      
      <div className="flex items-center gap-1">
        <button className="w-10 h-10 flex items-center justify-center border border-nightvision-neon text-nightvision-neon bg-nightvision-neon/10 font-label-md">01</button>
        <button className="w-10 h-10 flex items-center justify-center border border-glass-stroke hover:border-nightvision-neon transition-colors font-label-md">02</button>
        <button className="w-10 h-10 flex items-center justify-center border border-glass-stroke hover:border-nightvision-neon transition-colors font-label-md">03</button>
        <span className="px-2 font-label-md">...</span>
        <button className="w-10 h-10 flex items-center justify-center border border-glass-stroke hover:border-nightvision-neon transition-colors font-label-md">14</button>
      </div>
      
      <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-2">
        <span className="material-symbols-outlined text-[16px] text-nightvision-neon animate-pulse">lock</span>
        PROTECTION_LAYER_6_ACTIVE
      </div>
    </div>
  );
}
