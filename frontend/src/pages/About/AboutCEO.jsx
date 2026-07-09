import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import useFetch from '../../hooks/useFetch';
import { LoadingState, ErrorState, EmptyState } from '../../components/common/StateDisplays';

export default function AboutCEO() {
  const { data, loading, error } = useFetch('about/data/');

  if (loading) return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <LoadingState message="VERIFYING_IDENTITY..." />
      <Footer />
    </div>
  );

  if (error) return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <ErrorState message={error} />
      <Footer />
    </div>
  );

  if (!data || !data.profile) return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <EmptyState message="NO_PROFILE_DATA_FOUND" />
      <Footer />
    </div>
  );

  const { profile, education, timeline, highlights } = data;

  return (
    <div className="bg-background text-on-surface min-h-screen font-body-md overflow-x-hidden selection:bg-nightvision-neon selection:text-void-black">
      <Navbar />

      <main className="pt-24 p-6 lg:p-grid-margin pb-32 max-w-7xl mx-auto">
        {/* Hero Profile */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-12">
          <div className="lg:col-span-8 relative h-[500px] lg:h-[600px] overflow-hidden bg-surface-container-lowest/80 backdrop-blur-xl border border-glass-stroke p-6 lg:p-8">
            {/* Corner Brackets */}
            <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 border-nightvision-neon"></div>
            <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 border-nightvision-neon"></div>
            
            <div 
              className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" 
              style={{ backgroundImage: `url('${profile.hero_image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_li90IPgyYrhgLlKbOP4IShMLc8h3eto-5r_Rocz2S3qDXWBXWQP6GBUYXu1xl0jgJbjsKB1_qnAFppncB6Mim_3JK1xnEd-Z9bi3_KMw9ESx6ZKGd2E_JYZ7SVY1dPFfqyLoIoMvGVjkK8YelprxyYqc-8D71D9XRYrh1f6nK9aE4SmnZbbw7j7n2VtFkGdfYtlvzZNA_EPGcH1iD8S809hY-dthZMb-HFn9hxXpnBxH3rWF7CpWDz_ziS9VEUHxrQ'}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/20 to-transparent"></div>
            
            <div className="absolute bottom-8 lg:bottom-12 left-6 lg:left-12 max-w-2xl z-10">
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-4 tracking-tighter leading-none" dangerouslySetInnerHTML={{ __html: profile.title }}>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl hidden sm:block">
                {profile.subtitle}
              </p>
            </div>
          </div>
          
          {/* Stats/Guideline Side Panel */}
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            <div className="bg-surface-container-lowest/80 backdrop-blur-xl border border-glass-stroke p-6 lg:p-panel-padding flex-grow flex flex-col justify-center relative">
              <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 border-nightvision-neon"></div>
              <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 border-nightvision-neon"></div>
              
              <div className="mb-6 flex justify-start items-start">
                <span className="material-symbols-outlined text-nightvision-neon text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              </div>
              <p className="font-headline-md text-headline-md italic text-white leading-tight mb-6">
                "{profile.quote}"
              </p>
              <p className="font-label-md text-label-md text-nightvision-neon">{profile.quote_author}</p>
            </div>
            
            <div className="bg-surface-container-lowest/80 backdrop-blur-xl border border-glass-stroke p-6 lg:p-panel-padding grid grid-cols-2 gap-4 relative">
              <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 border-nightvision-neon"></div>
              <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 border-nightvision-neon"></div>

              <div className="border-l-2 border-nightvision-neon pl-4">
                <p className="font-label-sm text-on-surface-variant">ESTABLISHED</p>
                <p className="font-headline-md text-headline-md text-nightvision-neon">2023</p>
              </div>
              <div className="border-l-2 border-nightvision-neon pl-4">
                <p className="font-label-sm text-on-surface-variant">XP_YEARS</p>
                <p className="font-headline-md text-headline-md text-nightvision-neon">6+</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chronological Brief */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-headline-md text-headline-md text-white">CHRONOLOGICAL_BRIEF</h2>
            <div className="h-px flex-grow bg-glass-stroke"></div>
            {profile.identity_verified && <span className="font-label-sm text-nightvision-neon">AUTH_ACCESS_GRTD</span>}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* EARLY LIFE / BIO */}
            <div className="bg-surface-container-lowest/80 backdrop-blur-xl border border-glass-stroke p-6 lg:p-panel-padding group hover:border-nightvision-neon/50 transition-all lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-nightvision-neon">family_history</span>
                <h3 className="font-label-md text-label-md font-bold tracking-widest text-on-surface-variant">BIOGRAPHY</h3>
              </div>
              <div className="font-body-md text-body-md text-on-surface leading-relaxed mb-4 whitespace-pre-wrap">
                {profile.biography_text}
              </div>
            </div>
            
            {/* EDUCATION */}
            <div className="bg-surface-container-lowest/80 backdrop-blur-xl border border-glass-stroke p-6 lg:p-panel-padding group hover:border-nightvision-neon/50 transition-all border-t-2 lg:border-t-0 lg:border-l-2 border-nightvision-neon">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-nightvision-neon">school</span>
                <h3 className="font-label-md text-label-md font-bold tracking-widest text-on-surface-variant">EDUCATION_TRACK</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-label-sm text-on-surface-variant">{edu.degree}</p>
                    <p className="text-white">{edu.school} {edu.description && <span className="text-nightvision-neon font-bold">[{edu.description}]</span>}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brand Milestones & Global Expansion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-12">
          {/* Milestones */}
          <section className="bg-surface-container-lowest/80 backdrop-blur-xl border border-glass-stroke p-6 lg:p-panel-padding relative overflow-hidden">
            <div className="absolute -right-8 -top-8 opacity-5">
              <span className="material-symbols-outlined text-[160px]">military_tech</span>
            </div>
            <h2 className="font-label-md text-label-md font-bold text-nightvision-neon mb-8 flex items-center gap-2 relative z-10">
              <span className="material-symbols-outlined">flag</span> BRAND_MILESTONES
            </h2>
            <div className="space-y-8 relative z-10">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-glass-stroke"></div>
              
              {timeline.map((event, index) => (
                <div key={event.id} className={`relative pl-10 ${index === timeline.length - 1 ? 'opacity-50' : ''}`}>
                  <div className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-void-black border-2 ${index === timeline.length - 1 ? 'border-dashed border-nightvision-neon' : index === 0 ? 'border-nightvision-neon' : 'border-glass-stroke'} flex items-center justify-center`}>
                    {index < timeline.length - 1 && <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-nightvision-neon' : 'bg-glass-stroke'}`}></div>}
                  </div>
                  <p className="font-label-sm text-on-surface-variant">{event.year} // {event.category}</p>
                  <h4 className={`font-bold text-lg mt-1 ${index === timeline.length - 1 ? 'text-nightvision-neon' : 'text-white'}`}>{event.title}</h4>
                  <p className="text-on-surface-variant text-sm mt-1">{event.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Deployment Visual */}
          <section className="bg-surface-container-lowest/80 backdrop-blur-xl border border-glass-stroke relative flex items-center justify-center overflow-hidden min-h-[400px]">
            {/* Corner brackets */}
            <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 border-nightvision-neon"></div>
            <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 border-nightvision-neon"></div>
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-nightvision-neon/10 via-transparent to-transparent z-0"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #00FF41 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            
            <div className="z-10 text-center space-y-6 relative w-full">
              <div className="relative inline-block">
                <div className="absolute inset-0 border border-nightvision-neon animate-ping rounded-full opacity-20"></div>
                <div className="w-32 h-32 rounded-full border-2 border-nightvision-neon flex items-center justify-center bg-background/50 backdrop-blur-md">
                  <span className="material-symbols-outlined text-6xl text-nightvision-neon">public</span>
                </div>
              </div>
              <div className="px-6">
                <h3 className="font-headline-md text-headline-md text-white">CAREER_HIGHLIGHTS</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  {highlights.map((highlight) => (
                     <div key={highlight.id} className="bg-surface-container-high border border-glass-stroke p-4 flex flex-col items-center text-center">
                        <span className="font-headline-md text-nightvision-neon block mb-2">{highlight.metric}</span>
                        <span className="font-label-sm text-white block mb-1">{highlight.title}</span>
                        <span className="text-xs text-on-surface-variant">{highlight.description}</span>
                     </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </div>

        <Footer />
      </main>
    </div>
  );
}
