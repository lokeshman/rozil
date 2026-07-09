import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';
import useFetch from '../../../hooks/useFetch';

const API_BASE = 'http://localhost:8000';
const DEFAULT_PHOTO = "https://lh3.googleusercontent.com/aida-public/AB6AXuCm7f4Opo2tj2xSWO8CUI2L0NXzZycBz_ZcYui1Wuzdit7FOd0VbpAPcwo769wSOaEpu5WGiy0mrCVRMFPoI9x-eCLhzoLTv-51zfF_ayMKJ9ql9hx78POvM5vevDkHupuac7YwFMFnL-pAkhVt5wZT4Q73xhNq4zbts4ZEBuwL3-23W2mNHJL97C3QUEKHjmMNml9nO_3BTdCCDldTHS6RnoZ8BU4LXzQJOUcEcEs07vBUhmo9K4x8";

export default function Hero() {
  const navigate = useNavigate();
  const { data } = useFetch('home/hero-config/');
  
  const heroData = data?.[0] || {};
  const heroPhoto = heroData.photo 
    ? (heroData.photo.startsWith('http') ? heroData.photo : `${API_BASE}${heroData.photo}`)
    : DEFAULT_PHOTO;

  return (
    <section id="overview" className="relative w-full min-h-[600px] lg:h-[870px] flex items-center overflow-hidden border-b border-glass-stroke py-20 lg:py-0">
      {/* Background HUD Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20" aria-hidden="true">
        <div className="hud-ring-1 absolute w-[600px] h-[600px] border-[1px] border-dashed border-nightvision-neon rounded-full hidden md:block"></div>
        <div className="hud-ring-2 absolute w-[750px] h-[750px] border-[0.5px] border-nightvision-neon rounded-full flex items-center justify-center hidden lg:flex">
          <div className="w-[740px] h-[740px] border-[0.5px] border-nightvision-neon rounded-full opacity-30"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-grid-margin z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Portrait with HUD frames */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-[450px] lg:h-[600px] glass-panel p-2 shadow-[0_0_30px_rgba(0,255,65,0.15)]">
            <img 
              className="w-full h-full object-cover" 
              alt="Portrait of Rozil Thapa"
              src={heroPhoto}
            />
            {/* HUD Overlays */}
            <div className="absolute top-4 right-4 bg-void-black/80 border border-nightvision-neon px-2 py-1" aria-hidden="true"></div>
            <div className="absolute bottom-4 left-4 bg-void-black/80 border border-nightvision-neon px-3 py-2 max-w-[200px]" aria-hidden="true">
              <div className="flex gap-1">
                <div className="h-1 w-8 bg-nightvision-neon"></div>
                <div className="h-1 w-8 bg-nightvision-neon"></div>
                <div className="h-1 w-8 bg-nightvision-neon"></div>
                <div className="h-1 w-8 bg-nightvision-neon opacity-30"></div>
              </div>
            </div>
          </div>
          {/* Technical Decorations */}
          <div className="absolute -top-10 -right-10 hidden lg:block opacity-40" aria-hidden="true">
            <div className="w-32 h-32 border-t-2 border-r-2 border-nightvision-neon"></div>
          </div>
        </div>
        
        {/* Biography & CTA */}
        <div id="about-ceo" className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <div className="space-y-1">
            <h2 className="font-label-md text-label-md text-nightvision-neon tracking-[0.3em] font-bold">ABOUT</h2>
            <h1 className="font-headline-lg text-headline-lg lg:text-8xl tracking-widest text-on-surface uppercase">
              {heroData.title || "ROZIL THAPA"}
            </h1>
            <p className="font-label-md text-label-md text-nightvision-neon font-bold mt-2">
              {heroData.subtitle || "FOUNDER // BUILDER // VISIONARY"}
            </p>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mx-auto lg:mx-0">
            {heroData.description || ""}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <Button onClick={() => navigate(heroData.button_1_url || '/about-ceo')} className="px-8 py-4 shadow-[0_0_15px_rgba(0,255,65,0.4)] w-full sm:w-auto" variant="primary">
              {heroData.button_1_text || "VIEW_CORE_BRIEF"}
            </Button>
            <Button onClick={() => navigate(heroData.button_2_url || '/contact')} className="px-8 py-4 border-2 hover:bg-nightvision-neon/10 w-full sm:w-auto" variant="outline">
              {heroData.button_2_text || "CONNECT_NOW"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
