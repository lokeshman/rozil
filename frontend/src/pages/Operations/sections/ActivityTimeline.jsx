import { useState, useEffect, useRef } from 'react';
import Card from '../../../components/common/Card';
import { timelineLogs, possibleLogs } from '../../../data/timeline';

export default function ActivityTimeline() {
  const [logs, setLogs] = useState(timelineLogs);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLogText = possibleLogs[Math.floor(Math.random() * possibleLogs.length)];
      setLogs(prev => {
        const newLogs = [newLogText, ...prev];
        if (newLogs.length > 15) newLogs.pop();
        return newLogs;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-panel-padding h-48 overflow-hidden font-label-sm text-[10px] text-nightvision-neon/70 bg-void-black/90">
      <div className="flex justify-between items-center border-b border-nightvision-neon/20 pb-1 mb-2">
        <span>LIVE_LOG_FEED</span>
        <span className="animate-pulse">● REC</span>
      </div>
      <div ref={scrollRef} className="space-y-1 overflow-y-auto h-full scrollbar-hide pb-8">
        {logs.map((log, index) => {
          const isObj = typeof log === 'object';
          const text = isObj ? log.text : log;
          const type = isObj ? log.type : 'normal';
          
          let colorClass = '';
          if (type === 'success') colorClass = 'text-nightvision-neon';
          if (type === 'error') colorClass = 'text-alert-red';
          
          return (
            <p key={index} className={colorClass}>
              {text}
            </p>
          );
        })}
      </div>
    </Card>
  );
}
