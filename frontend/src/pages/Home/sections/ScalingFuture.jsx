import useFetch from '../../../hooks/useFetch';

export default function ScalingFuture() {
  const { data } = useFetch('home/about-brief/');

  const brief = data?.[0] || {
    title: 'THE_FOUNDER_PROTOCOL',
    subtitle: 'INITIATE_BIOGRAPHY_SEQUENCE',
    description: 'Rozil Thapa transformed a foundation of field electronics into a dominant trademarked enterprise. NightVision isn\'t just about cameras—it\'s about absolute operational superiority, unmatched reliability, and a brand presence that commands respect.',
    stats_years: '6+',
    stats_projects: '500+',
    stats_retention: '98.5%',
    signature_text: '— ROZIL THAPA'
  };

  return (
    <section id="vision" className="py-24 px-grid-margin bg-void-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,65,0.03),transparent_40%)] pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 relative z-10">
          <span className="font-label-sm text-[10px] text-nightvision-neon tracking-[0.3em] bg-nightvision-neon/10 px-3 py-1 border border-nightvision-neon/30 inline-block mb-8">
            {brief.subtitle}
          </span>
          
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight leading-[1.1] mb-16">
            {brief.title.replace(/_/g, ' ')}
          </h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="font-label-md text-label-md text-nightvision-neon font-bold mt-1">01 /</div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface font-bold uppercase mb-3">The Protocol</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {brief.description}
                </p>
              </div>
            </div>

            <div className="flex gap-6 mt-8">
              <div className="grid grid-cols-3 gap-8 w-full border-t border-glass-stroke pt-8">
                <div>
                  <p className="font-headline-md text-nightvision-neon mb-1">{brief.stats_years}</p>
                  <p className="font-label-sm text-on-surface-variant text-[10px]">YEARS_ACTIVE</p>
                </div>
                <div>
                  <p className="font-headline-md text-nightvision-neon mb-1">{brief.stats_projects}</p>
                  <p className="font-label-sm text-on-surface-variant text-[10px]">DEPLOYMENTS</p>
                </div>
                <div>
                  <p className="font-headline-md text-nightvision-neon mb-1">{brief.stats_retention}</p>
                  <p className="font-label-sm text-on-surface-variant text-[10px]">RETENTION</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-right">
              <p className="font-label-md text-nightvision-neon italic">{brief.signature_text}</p>
            </div>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="lg:w-1/2 relative z-10">
          <div className="relative border border-glass-stroke p-2 bg-surface-container-lowest shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute bottom-4 right-4 z-20 text-alert-red font-label-sm text-[10px] bg-void-black/80 backdrop-blur px-2 py-1 border border-alert-red/30 flex items-center gap-2" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-alert-red animate-pulse"></span>
              LIVE_FEED
            </div>
            
            <div className="aspect-[4/3] overflow-hidden scanline-effect relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCY2u-o_fG8_U6n_8G2M7z8M6n-5p8V8fG_u5V7a-G2rV2Z3o_tF6xR_yM7M6U2M2V_zR7fX4F7Q8R-6p-xG3zV2o_5zY2G_6n6n_xM-8G2o-5zX6F_7o6p" 
                alt="Rozil Thapa giving award" 
                className="w-full h-full object-cover filter brightness-75 contrast-125 hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-nightvision-neon mix-blend-overlay opacity-10" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
