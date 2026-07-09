import { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import Card from '../../../components/common/Card';
import { LoadingState, ErrorState, EmptyState } from '../../../components/common/StateDisplays';

export default function Metrics() {
  const { data: metrics, loading: loadingMetrics, error: errorMetrics } = useFetch('home/metrics/');
  const { data: traffic, loading: loadingTraffic, error: errorTraffic } = useFetch('home/traffic/');

  useEffect(() => {
    // Micro-interaction: Random "Glitch" effect on metrics
    const metricElements = document.querySelectorAll('.metric-value');
    if (!metricElements.length) return;

    const intervalId = setInterval(() => {
      const randomMetric = metricElements[Math.floor(Math.random() * metricElements.length)];
      const originalText = randomMetric.getAttribute('data-value') || randomMetric.innerText;
      
      if (!randomMetric.getAttribute('data-value')) {
        randomMetric.setAttribute('data-value', originalText);
      }
      
      const chars = "0123456789%+.ABC";
      let iterations = 0;
      
      const glitchInterval = setInterval(() => {
        randomMetric.innerText = originalText.split("")
          .map((char, index) => {
            if (index < iterations) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
        
        if (iterations >= originalText.length) {
          clearInterval(glitchInterval);
          randomMetric.innerText = originalText;
        }
        iterations += 1/3;
      }, 30);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [metrics]);

  return (
    <section id="achievements" className="py-16 lg:py-24 px-6 lg:px-grid-margin bg-void-black">
      <div className="mb-12">
        <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
          <span className="w-8 h-[2px] bg-nightvision-neon"></span>
          SYSTEM_METRICS
        </h3>
        <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">
          REAL-TIME METRICS
        </p>
      </div>
      
      {loadingMetrics && <LoadingState minHeight="min-h-[200px]" />}
      {errorMetrics && <ErrorState error={errorMetrics} minHeight="min-h-[200px]" />}
      {!loadingMetrics && !errorMetrics && (!metrics || metrics.length === 0) && <EmptyState message="NO METRICS DATA" />}

      {!loadingMetrics && !errorMetrics && metrics && metrics.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map(metric => (
            <Card key={metric.id} className="p-6 group hover:border-nightvision-neon transition-all">
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined text-nightvision-neon group-hover:scale-110 transition-transform">
                  {metric.icon}
                </span>
                <span className="font-label-sm text-[10px] text-nightvision-neon opacity-50">
                  {metric.mod}
                </span>
              </div>
              
              <p className="font-label-md text-label-md text-on-surface-variant uppercase">
                {metric.title}
              </p>
              
              <div className="flex items-end gap-2 mt-2">
                <h4 className="metric-value font-headline-lg text-headline-lg-mobile text-nightvision-neon">
                  {metric.value}
                </h4>
                <span className="font-label-sm text-label-sm text-nightvision-neon mb-2">
                  {metric.unit}
                </span>
              </div>
              
              <div className="mt-4 h-1 w-full bg-glass-stroke rounded-full overflow-hidden">
                <div className="h-full bg-nightvision-neon" style={{ width: metric.percentage }}></div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Traffic Analysis Extension */}
      <div className="mt-12 border border-glass-stroke p-6 lg:p-8 bg-surface-container-lowest grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-label-sm text-[10px] text-nightvision-neon tracking-[0.2em] mb-6 block">TRAFFIC_ANALYSIS</span>
          
          {loadingTraffic && <LoadingState minHeight="min-h-[150px]" />}
          {errorTraffic && <ErrorState error={errorTraffic} minHeight="min-h-[150px]" />}
          
          {!loadingTraffic && !errorTraffic && traffic && traffic.length > 0 && (
            <div className="space-y-6">
              {traffic.map(t => (
                <div key={t.id} className="space-y-2">
                  <div className="flex justify-between font-label-sm text-label-sm">
                    <span className="text-on-surface-variant">{t.label}</span>
                    <span className="text-on-surface">{t.percentage}</span>
                  </div>
                  <div className="h-6 w-full bg-surface-container-high relative border border-glass-stroke/50">
                    <div className="absolute top-0 left-0 h-full bg-nightvision-neon/30 border-r border-nightvision-neon" style={{ width: t.percentage }}></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Bar Chart Simulation */}
        <div className="h-48 border-t lg:border-t-0 lg:border-l border-glass-stroke/50 pt-8 lg:pt-0 lg:pl-8 flex items-end justify-between gap-2 relative group cursor-pointer">
          <div className="absolute top-8 lg:top-0 right-0 font-label-sm text-[10px] text-on-surface-variant">NET_TRAFFIC</div>
          {[40, 25, 55, 45, 90, 60, 45, 70, 35].map((height, i) => (
            <div key={i} className="w-full relative h-full flex items-end">
              <div 
                className={`w-full bg-nightvision-neon/40 hover:bg-nightvision-neon transition-all duration-300 ${height === 90 ? 'bg-nightvision-neon shadow-[0_0_15px_rgba(0,255,65,0.4)]' : ''}`}
                style={{ height: `${height}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
