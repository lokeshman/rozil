import Card from '../../../components/common/Card';
import SectionTitle from '../../../components/common/SectionTitle';
import { filters } from '../../../data/articles';

export default function FilterPanel() {
  return (
    <>
      <Card withBrackets className="p-6">
        <SectionTitle>SIGNAL_FILTER</SectionTitle>
        <div className="space-y-4">
          {filters.map(filter => (
            <div key={filter.id} className="group cursor-pointer">
              <div className={`flex items-center justify-between font-label-md text-label-md mb-2 group-hover:text-${filter.theme} transition-colors ${filter.theme === 'terminal-cyan' ? 'text-terminal-cyan' : ''}`}>
                <span>{filter.label}</span>
                <span className={`px-2 py-0.5 bg-surface-container-highest text-[10px] ${filter.theme === 'terminal-cyan' ? 'text-terminal-cyan' : 'text-on-surface-variant'}`}>
                  {filter.count}
                </span>
              </div>
              <div className="w-full h-1 bg-surface-container-highest overflow-hidden">
                <div className={`h-full bg-${filter.theme} w-[${filter.percentage}] group-hover:shadow-[0_0_8px_var(--tw-shadow-color)] shadow-${filter.theme} transition-all`}></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      <Card withBrackets className="p-6 overflow-hidden">
        <h4 className="font-label-sm text-label-sm text-on-surface-variant opacity-60 mb-4 uppercase tracking-[0.2em]">
          Live Data Stream
        </h4>
        <div className="space-y-2 font-label-sm text-[10px] text-nightvision-neon/60">
          <p className="animate-pulse">&gt;&gt; INCOMING_INTEL_STREAM: PACKET_741_RECV</p>
          <p>&gt;&gt; DECRYPTING: SHA-256_V4.0</p>
          <p className="text-terminal-cyan">&gt;&gt; STATUS: NODE_ACTIVE</p>
          <p>&gt;&gt; LATENCY: 12ms</p>
        </div>
        
        <div className="mt-6 flex justify-center">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-nightvision-neon/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-2 rounded-full border border-nightvision-neon/60 animate-[spin_5s_linear_infinite_reverse]"></div>
            <span className="material-symbols-outlined text-nightvision-neon dashboard-glow text-[32px]">radar</span>
          </div>
        </div>
      </Card>
    </>
  );
}
