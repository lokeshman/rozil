import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import useFetch from '../../hooks/useFetch';
import { LoadingState, ErrorState } from '../../components/common/StateDisplays';

const API_BASE = 'http://localhost:8000';

const DEFAULT_MANIFESTO = {
  headline: 'VISION_MANIFESTO',
  subtitle: 'ROZIL THAPA // THE VISION BEHIND NIGHTVISION',
  main_text: 'Our core philosophy revolves around the transition from reactive privacy to proactive, intelligent environments. In a rapidly evolving world, operations must transcend simple recording—it must become a sentient layer of protection that anticipates needs and ensures absolute tranquility.',
  founder_guideline: 'Engineering systems that meet the increasing demands of a dynamic privacy landscape.',
  roadmap_title: 'The Vision Roadmap',
  roadmap_text: 'NightVision is not merely a product line—it is a blueprint for the future of global infrastructure. We are on a mission to become the worldwide architect of high-tech privacy ecosystems, integrating AI-driven analytics with impenetrable physical hardware.',
  latency_value: '0.02ms',
  accuracy_value: '99.9%',
  hero_image: null,
  monitor_image: null,
};

const DEFAULT_PILLARS = [
  { id: 1, icon: 'router', title: 'SEAMLESS_INTEGRATION', description: 'Wi-Fi based plug and play deployment. Our architecture eliminates complex wiring, allowing for instantaneous operational operations setup.' },
  { id: 2, icon: 'bolt', title: 'ADVANCED_FEATURES', description: 'Practical usage focused design. Every feature is engineered to serve a specific mission-critical purpose in real-world scenarios.' },
  { id: 3, icon: 'shield', title: 'DURABLE_ENGINEERING', description: 'High-performance in extreme environments (-20°C to 50°C+). Ruggedized hardware built for perpetual operations under stress.' },
  { id: 4, icon: 'lock', title: 'DATA_PROTECTION', description: 'Secured hardware/software stack. Proprietary protection guidelines ensure your operations data remains your eyes only.' },
];

const FALLBACK_HERO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbkBMyy83CHkpZjLKzeV3NDGQ6rTf-nSV6nl_ab0sEgr3JQgccQByBz2frm2SufG-MgRrXHzAAUvFBH0ee9zuwD-KKlJqTVVLVNnxs3olH7SQBG5xHBsULxmzxxI-QiXNl5ewZhCL7OuMTczqWzsL_YzX2tvxVkIDAq0nr0ApPjEvJW0HPKCC9xXjdybWjC4dFdvhF9zhOjny2SvKNtRho9_Hezeg9U7xnD_T-CYr6XCgUBTdtJ-1S';
const FALLBACK_MONITOR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJsD41OrGJT3ibgzR5nS3Glh1croyrJk5eUbPcgxNXC1N8oJieYYOwH0RpF1VTOmsW_0IJ9bcEbRPGkC_254s1ULIEA6F4rQ8uU3hDdxNL1_UAyN15mgAXRp8bqs8inQESC7kLf3NACNb_9HBpsjdqnfivDt-Z6d3Ylyum5zoPCJqoPDGGiRv0N0RLxCN9K0y-3NkrbxslVTpPeYa1n_RHKSBX6om08aNCMvQoJt8R64-U1xKuwU2t';

function getImageUrl(img) {
  if (!img) return null;
  return img.startsWith('http') ? img : `${API_BASE}${img}`;
}

export default function VisionManifesto() {
  const { data: manifestoData, loading: loadingManifesto, error: errorManifesto } = useFetch('home/vision-manifesto/');
  const { data: pillarsData, loading: loadingPillars, error: errorPillars } = useFetch('home/strategic-pillars/');

  const manifesto = manifestoData && manifestoData.length > 0 ? manifestoData[0] : DEFAULT_MANIFESTO;
  const pillars = pillarsData && pillarsData.length > 0 ? pillarsData : DEFAULT_PILLARS;

  useEffect(() => {
    // Mouse tracking for HUD glow on pillar cards
    const handleMouseMove = (e) => {
      const panels = document.querySelectorAll('.pillar-card');
      panels.forEach(panel => {
        const rect = panel.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
          panel.style.boxShadow = 'inset 0 0 20px rgba(0, 255, 65, 0.05)';
        } else {
          panel.style.boxShadow = 'none';
        }
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroImg = getImageUrl(manifesto.hero_image) || FALLBACK_HERO;
  const monitorImg = getImageUrl(manifesto.monitor_image) || FALLBACK_MONITOR;

  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden selection:bg-nightvision-neon selection:text-void-black">

      <Navbar />

      <main className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-grid-margin py-12">

          {/* ===== Hero Section: VISION_MANIFESTO ===== */}
          <section className="mb-16 relative overflow-hidden bg-surface-container-lowest border border-glass-stroke p-6 md:p-10">
            {/* Scanline + HUD corners */}
            <div className="absolute inset-0 opacity-10" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 255, 65, 0.05) 50%)', backgroundSize: '100% 4px' }}></div>
            <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 border-nightvision-neon"></div>
            <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 border-nightvision-neon"></div>

            {/* Header Row */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-glass-stroke pb-8 mb-8">
              <div>
                <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white leading-tight uppercase">{manifesto.headline}</h1>
              </div>
              <div className="text-left md:text-right">
                <div className="font-label-md text-label-md text-nightvision-neon">{manifesto.subtitle}</div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left: Text Content */}
              <div className="md:col-span-7">
                <div className="bg-surface-container/50 backdrop-blur-xl border border-glass-stroke p-6 md:p-8 h-full relative overflow-hidden">
                  {/* Live dots */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-nightvision-neon animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-nightvision-neon/30"></div>
                    <div className="w-2 h-2 rounded-full bg-nightvision-neon/30"></div>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-nightvision-neon mb-6">Advanced Operations for Peace of Mind</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                    {manifesto.main_text}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-l-2 border-nightvision-neon pl-4">
                      <div className="font-label-sm text-label-sm text-nightvision-neon">LATENCY_INDEX</div>
                      <div className="font-headline-md text-headline-md text-white">{manifesto.latency_value}</div>
                    </div>
                    <div className="border-l-2 border-nightvision-neon pl-4">
                      <div className="font-label-sm text-label-sm text-nightvision-neon">ACCURACY_RATE</div>
                      <div className="font-headline-md text-headline-md text-white">{manifesto.accuracy_value}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Hero Image */}
              <div className="md:col-span-5">
                <div className="relative h-full min-h-[300px] border border-glass-stroke group overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Portrait of Rozil Thapa"
                    src={heroImg}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-surface-container-lowest/80 backdrop-blur-md border border-glass-stroke p-4">
                      <div className="font-label-sm text-label-sm text-nightvision-neon mb-1">CEO_MESSAGE</div>
                      <p className="text-xs text-on-surface-variant leading-snug">
                        "{manifesto.founder_guideline}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Strategic Pillars Grid ===== */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-headline-md text-headline-md text-white">STRATEGIC_PILLARS</h2>
              <div className="h-px flex-1 bg-glass-stroke"></div>
              <span className="font-label-sm text-label-sm text-nightvision-neon">V.2.4.0</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map(pillar => (
                <div key={pillar.id} className="pillar-card bg-surface-container-low border border-glass-stroke p-6 hover:border-nightvision-neon transition-all group">
                  <div className="w-12 h-12 bg-nightvision-neon/10 border border-nightvision-neon/30 flex items-center justify-center mb-6 group-hover:bg-nightvision-neon/20 transition-all">
                    <span className="material-symbols-outlined text-nightvision-neon">{pillar.icon}</span>
                  </div>
                  <h3 className="font-label-md text-label-md text-nightvision-neon mb-3">{pillar.title}</h3>
                  <p className="text-sm text-on-surface-variant opacity-80 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Real-world Application / Monitoring Section ===== */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Live Monitoring Simulation */}
            <div className="bg-surface-container border border-glass-stroke p-1 relative group overflow-hidden">
              <img
                className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                alt="Control Room Monitoring"
                src={monitorImg}
              />
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 255, 65, 0.05) 50%)', backgroundSize: '100% 4px' }}></div>
            </div>

            {/* Roadmap */}
            <div className="flex flex-col gap-6">
              <div className="bg-surface-container-low border border-glass-stroke p-6 md:p-8 flex-1 flex flex-col justify-center">
                <h2 className="font-headline-md text-headline-md text-white mb-6">{manifesto.roadmap_title}</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {manifesto.roadmap_text}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="bg-nightvision-neon text-void-black font-bold px-8 py-3 text-label-md border-2 border-nightvision-neon hover:bg-transparent hover:text-nightvision-neon transition-all w-full sm:w-auto">
                    VIEW_BLUEPRINTS
                  </button>
                  <button className="border-2 border-glass-stroke text-on-surface-variant px-8 py-3 text-label-md hover:border-nightvision-neon hover:text-nightvision-neon transition-all w-full sm:w-auto">
                    TECHNICAL_SPECS
                  </button>
                </div>
              </div>
              <div className="h-[180px] border border-glass-stroke relative group">
                <img
                  alt="NV NightVision CCTV Home Entrance"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLsGb6Ge2si0-Vz3idGq7y7Fyxx4ggpQ23X_0EviTouHWUjAbNh1nkf1xqdmUjem-TGFEZ2mRbnhRk0CYFEdzkj5DJXe7hruj8BvRFvrKfpE2bPjUFPlGG1n6_kNuAyllnpPvTajuBioC5En89JfkZbkrgb0Hoi3jega9XIihR15z2a7YLZ4uWjbPr51y9W6TBzf_E6-J0WPHAyi5Lf0f7eY6X5iBX7FOhBzd-dcBInXa_vgS5u4Hgj3ro4"
                />
                <div className="absolute inset-0 bg-nightvision-neon/10 mix-blend-overlay"></div>
              </div>
            </div>
          </section>

          {/* ===== Footer ===== */}
          <Footer />
        </div>
      </main>


    </div>
  );
}
