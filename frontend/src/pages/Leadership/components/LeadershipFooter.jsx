import React from 'react';

export default function LeadershipFooter() {
  return (
    <footer className="mt-auto pt-12 border-t border-glass-stroke grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-2">
        <p className="font-label-sm text-label-sm text-on-surface-variant mb-4 uppercase tracking-widest">System Status Feed</p>
        <div className="font-label-sm text-[10px] text-nightvision-neon/60 space-y-1">
          <p>&gt; [09:14:02] LOGIN_SUCCESS: USER_772_THAPA</p>
          <p>&gt; [09:14:05] SYNC_COMPLETE: GLOBAL_LOCATIONS_ACTIVE</p>
          <p>&gt; [09:15:11] ACTIVE_CONNECTION: SECTOR_B_ACTIVE</p>
        </div>
      </div>
      <div>
        <p className="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">Core Sectors</p>
        <ul className="font-label-sm text-label-sm text-white space-y-1">
          <li>Dakar Operations</li>
          <li>Lalitpur R&amp;D Hub</li>
          <li>Global Grid Defense</li>
        </ul>
      </div>
      <div className="flex flex-col items-end justify-end">
        <p className="font-label-sm text-label-sm text-nightvision-neon font-bold">© 2024 NIGHTVISION_SYSTEMS</p>
        <p className="font-label-sm text-[10px] text-on-surface-variant">SYSTEM_PLATFORM_V4</p>
      </div>
    </footer>
  );
}
