import Card from '../../../components/common/Card';
import StatusBadge from '../../../components/common/StatusBadge';

export default function OperationCard({ venture }) {
  return (
    <Card className="overflow-hidden group hover:border-nightvision-neon transition-colors duration-500">
      <div className="relative h-40">
        <img 
          src={venture.image} 
          alt={venture.title}
          className="w-full h-full object-cover filter brightness-50 group-hover:brightness-100 transition-all duration-700"
        />
        <div className={`absolute inset-0 bg-${venture.theme} mix-blend-overlay opacity-20`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-void-black to-transparent"></div>
        
        <div className="absolute top-4 left-4 flex gap-2">
          <StatusBadge theme={venture.theme}>{venture.badge}</StatusBadge>
        </div>
        
        <h3 className="absolute bottom-4 left-4 font-headline-md text-headline-md text-on-surface flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full bg-${venture.theme} animate-pulse`}></span>
          {venture.title}
        </h3>
      </div>
      
      <div className="p-panel-padding space-y-4 border border-glass-stroke border-t-0 bg-surface-container-highest/20">
        <div className="flex justify-between items-center text-label-sm">
          <span className="text-on-surface-variant">UPTIME</span>
          <span className={`text-${venture.theme} font-bold`}>{venture.uptime}</span>
        </div>
        <div className="flex justify-between items-center text-label-sm">
          <span className="text-on-surface-variant">GROWTH</span>
          <span className={`text-${venture.theme} font-bold`}>{venture.growth}</span>
        </div>
        <div className="flex justify-between items-center text-label-sm">
          <span className="text-on-surface-variant">ACTIVE_LOCATIONS</span>
          <span className={`text-${venture.theme} font-bold`}>{venture.active_nodes}</span>
        </div>
        <div className="pt-2 border-t border-glass-stroke">
          <button className={`w-full py-2 text-label-sm text-${venture.theme} hover:bg-${venture.theme} hover:text-void-black transition-colors font-bold border border-${venture.theme}`}>
            {venture.action_text}
          </button>
        </div>
      </div>
    </Card>
  );
}
