import { useState, useEffect, useRef } from 'react';
import Card from '../../../components/common/Card';
import { initialLogs, possibleAssetLogs } from '../../../data/assetLogs';

export default function ArchiveLogStream() {
  const [logs, setLogs] = useState(initialLogs);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString('en-GB', { hour12: false });
      const randomMsg = possibleAssetLogs[Math.floor(Math.random() * possibleAssetLogs.length)];
      
      const newLog = {
        time,
        tag: 'SYSTEM_MSG',
        message: randomMsg,
        status: 'OK',
        statusColor: 'text-terminal-cyan',
        isNew: true
      };

      setLogs(prev => {
        const updatedLogs = [newLog, ...prev];
        if (updatedLogs.length > 20) {
          updatedLogs.pop();
        }
        return updatedLogs;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="lg:col-span-2 p-panel-padding">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-label-md text-label-md text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-nightvision-neon text-sm">list</span>
          ASSET_LOG_STREAM
        </h3>
        <span className="font-label-sm text-label-sm text-nightvision-neon animate-pulse">LIVE_MONITOR</span>
      </div>
      
      <div ref={scrollRef} className="font-label-sm text-label-sm space-y-2 max-h-64 overflow-y-auto custom-scrollbar pr-2">
        {logs.map((log, index) => (
          <div 
            key={`${log.time}-${index}`} 
            className={`flex gap-4 text-on-surface-variant hover:text-on-surface py-1 border-b border-glass-stroke/5 ${log.isNew ? 'animate-pulse' : ''}`}
          >
            <span className="text-nightvision-neon">[{log.time}]</span>
            <span className="w-24 shrink-0">{log.tag}</span>
            <span className="flex-1 line-clamp-1">{log.message}</span>
            <span className={log.statusColor}>{log.status}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
