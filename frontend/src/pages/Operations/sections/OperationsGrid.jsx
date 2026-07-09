import useFetch from '../../../hooks/useFetch';
import { LoadingState, ErrorState, EmptyState } from '../../../components/common/StateDisplays';
import OperationCard from '../components/OperationCard';
import ActivityTimeline from './ActivityTimeline';
import LocationMap from './LocationMap';
import Card from '../../../components/common/Card';

export default function OperationsGrid() {
  const { data: ventures, loading, error } = useFetch('operations/ventures/');

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!ventures || ventures.length === 0) return <EmptyState message="NO VENTURES ACTIVE" />;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      {/* Left Column: Venture Status Cards */}
      <div className="lg:col-span-2 flex flex-col gap-gutter">
        <h2 className="font-label-md text-label-md text-nightvision-neon tracking-[0.2em] flex items-center gap-3">
          <span className="material-symbols-outlined text-sm">rocket_launch</span>
          VENTURE_STATUS_OVERRIDE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {ventures.map(venture => (
            <OperationCard key={venture.id} venture={venture} />
          ))}
          
          {/* Venture: Yard Production (Full Width on md) */}
          <Card className="md:col-span-2 p-panel-padding relative overflow-hidden group border-glass-stroke border">
            <div className="hud-bracket-br"></div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col justify-center">
                <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Heavy Ops</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Yard Production</h3>
                <p className="text-on-surface-variant text-sm mb-4">Industrial-scale deployment and hardware orchestration systems active.</p>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[10px] text-on-surface-variant">UPTIME</span>
                    <span className="text-nightvision-neon font-bold">98.2%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[10px] text-on-surface-variant">OUTPUT</span>
                    <span className="text-nightvision-neon font-bold">12.4k/hr</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 grid grid-cols-5 gap-2 items-end h-32">
                <div className="bg-nightvision-neon/20 h-[40%] hover:bg-nightvision-neon transition-all"></div>
                <div className="bg-nightvision-neon/20 h-[60%] hover:bg-nightvision-neon transition-all"></div>
                <div className="bg-nightvision-neon/20 h-[85%] hover:bg-nightvision-neon transition-all"></div>
                <div className="bg-nightvision-neon/20 h-[70%] hover:bg-nightvision-neon transition-all"></div>
                <div className="bg-nightvision-neon/20 h-[95%] hover:bg-nightvision-neon transition-all shadow-[0_0_15px_rgba(0,255,65,0.4)]"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Right Column: Location Map & Data Stream */}
      <div className="flex flex-col gap-gutter h-full">
        <h2 className="font-label-md text-label-md text-nightvision-neon tracking-[0.2em] flex items-center gap-3">
          <span className="material-symbols-outlined text-sm">hub</span>
          NODE_MAP_VISUAL
        </h2>
        
        <LocationMap />
        <ActivityTimeline />
      </div>
    </div>
  );
}
