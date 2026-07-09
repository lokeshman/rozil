export default function Founder() {
  return (
    <section className="py-stack-lg px-grid-margin bg-surface-container-lowest transition-all duration-1000 ease-out" id="network">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tighter flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">history_edu</span>
            FOUNDER_EVOLUTION
          </h2>
          <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Visual Asset Left */}
          <div className="md:col-span-5 relative group">
            <div className="absolute -inset-2 bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all"></div>
            <div className="relative glass-panel p-2">
              <img 
                alt="Rozil's early journey" 
                className="w-full aspect-[4/5] object-cover filter grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGxYgePyZyVIkgZT_1NzhPlkrpiy6Q5hT2mOWpE-lJGtd3EqAtKK4-5QYP4_aHcxh2N51AibTQ-SLpv3vG3SARO4uyChtqhU73enooWjt84h9v6G0AiEPOMXHr_PynA5G2Wg1pmYXU4U5C1V7xB8fjoPdGoZB3SAHADSSjM6IJoRTHncCXfV1NdrNWyn43E5pq_byFYs-Dr94Iyk8mjWlX1c0hBeC7Btb1OQmAUxc1px1U5JRYwHOmgyRYRIzo4fxC5KlumpQv9g"
              />
              <div className="absolute bottom-6 left-6 bg-void-black/80 px-4 py-2 border-l-2 border-primary">
                <span className="font-label-mono text-label-mono text-primary">PHASE_01: ORIGINS</span>
              </div>
            </div>
          </div>
          
          {/* Timeline Content Right */}
          <div className="md:col-span-7 flex flex-col justify-center gap-12">
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-nightvision-neon rounded-full border-4 border-void-black shadow-laser-glow"></div>
              <h3 className="font-headline-md text-headline-md text-white mb-2">The Privacy Vision</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Starting from roots in CCTV and privacy systems, Rozil identified the intersection of safety and technology before it became a mainstream necessity.
              </p>
              <div className="mt-4 font-label-mono text-[10px] text-primary">STAMP: 2018_SEC_CORE</div>
            </div>
            
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full border-2 border-void-black"></div>
              <h3 className="font-headline-md text-headline-md text-white mb-2">Empire Expansion</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Transitioning from individual projects to multi-venture governance. Scaling operations across multiple high-impact industries including media and tech.
              </p>
              <div className="mt-4 font-label-mono text-[10px] text-on-surface-variant">STAMP: 2021_MULTI_CORE</div>
            </div>
            
            <div className="relative pl-12 border-l border-outline-variant/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-2 border-void-black"></div>
              <h3 className="font-headline-md text-headline-md text-white mb-2">V1.0 Operating System</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The current state of pure execution. Managing Yard Production and RT Dream State with surgical precision and global ambition.
              </p>
              <div className="mt-4 font-label-mono text-[10px] text-primary">STAMP: 2024_ACTIVE_NODE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
