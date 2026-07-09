import { useState, useEffect } from 'react';

export default function OperationsHeader() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, '0');
      const m = String(now.getUTCMinutes()).padStart(2, '0');
      const s = String(now.getUTCSeconds()).padStart(2, '0');
      setTime(`${h}:${m}:${s} UTC`);
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
      <div>
        <p className="font-label-sm text-nightvision-neon mb-1 tracking-[0.3em]">CENTRAL_HUB // MISSION_CONTROL</p>
        <h1 className="font-headline-lg text-headline-lg text-on-surface leading-none">OPERATIONS DASHBOARD</h1>
      </div>
      <div className="glass-panel px-4 py-2 flex items-center gap-4">
        <div className="flex flex-col">
          <span className="font-label-sm text-[10px] text-on-surface-variant">NODE_LATENCY</span>
          <span className="font-label-md text-nightvision-neon">0.042ms</span>
        </div>
        <div className="h-8 w-px bg-glass-stroke"></div>
        <div className="flex flex-col text-right">
          <span className="font-label-sm text-[10px] text-on-surface-variant">SYS_TIME</span>
          <span className="font-label-md text-nightvision-neon">{time}</span>
        </div>
      </div>
    </div>
  );
}
