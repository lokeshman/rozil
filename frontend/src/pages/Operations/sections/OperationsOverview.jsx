import useFetch from '../../../hooks/useFetch';
import { LoadingState, ErrorState, EmptyState } from '../../../components/common/StateDisplays';
import Card from '../../../components/common/Card';
import StatusBadge from '../../../components/common/StatusBadge';

export default function OperationsOverview() {
  const { data: metrics, loading, error } = useFetch('operations/kpis/');

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!metrics || metrics.length === 0) return <EmptyState message="NO METRICS DATA" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-gutter">
      {metrics.map(metric => (
        <Card key={metric.id} className="p-panel-padding relative group hover:border-nightvision-neon transition-colors duration-500 overflow-hidden">
          {metric.kpi_id === 'uptime' && <div className="hud-bracket-tl"></div>}
          
          <div className="flex justify-between items-start mb-4">
            <span className={`material-symbols-outlined text-${metric.theme} text-3xl`}>
              {metric.icon}
            </span>
            <StatusBadge theme={metric.theme}>{metric.status}</StatusBadge>
          </div>
          
          <h4 className="font-label-sm text-on-surface-variant mb-1">{metric.title}</h4>
          <p className="font-headline-md text-headline-md text-on-surface tabular-nums">{metric.value}</p>
          
          {metric.is_bars ? (
            <div className="flex gap-1 mt-4">
              <div className="h-4 w-1 bg-terminal-cyan/40"></div>
              <div className="h-4 w-1 bg-terminal-cyan/60"></div>
              <div className="h-4 w-1 bg-terminal-cyan/80"></div>
              <div className="h-4 w-1 bg-terminal-cyan shadow-[0_0_5px_#00F0FF]"></div>
              <div className="h-4 w-1 bg-terminal-cyan shadow-[0_0_5px_#00F0FF]"></div>
              <div className="h-4 w-1 bg-surface-container-highest"></div>
            </div>
          ) : metric.progress ? (
            <div className={`mt-4 h-1 w-full bg-surface-container-highest ${metric.progress === '100%' ? 'flex' : 'rounded-full overflow-hidden'}`}>
              <div className={`h-full ${metric.theme === 'alert-red' ? 'bg-alert-red/20 w-full' : `bg-nightvision-neon`} ${metric.description || ''}`} style={{ width: metric.progress }}></div>
            </div>
          ) : metric.custom_bottom && (
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-nightvision-neon animate-ping"></span>
              <span className="text-[10px] font-label-sm text-on-surface-variant uppercase tracking-tighter">
                {metric.custom_bottom}
              </span>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
