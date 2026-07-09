export const initialLogs = [
  {
    time: "09:42:11",
    tag: "AUTH_VERIFIED",
    message: 'Asset "Infrastructure_04" meta-sync complete.',
    status: "OK",
    statusColor: "text-terminal-cyan"
  },
  {
    time: "10:15:04",
    tag: "FILE_INDEX",
    message: 'New 8K sequence added to "NightVision" archive.',
    status: "OK",
    statusColor: "text-terminal-cyan"
  },
  {
    time: "11:02:59",
    tag: "CACHE_PURGE",
    message: 'Temporary build fragments cleared (45GB).',
    status: "OK",
    statusColor: "text-terminal-cyan"
  },
  {
    time: "12:30:12",
    tag: "UI_RENDER",
    message: 'HUD Overlay v4.2 applied to media assets.',
    status: "OK",
    statusColor: "text-terminal-cyan"
  },
  {
    time: "13:45:00",
    tag: "SEC_SCAN",
    message: 'Asset integrity check initiated...',
    status: "SCANNING",
    statusColor: "text-primary-fixed"
  }
];

export const possibleAssetLogs = [
  "[14:20:11] SECTOR_7_SYNC - SUCCESS",
  "[14:22:45] PROTECTION_ROTATED - 4096_BIT",
  "[14:25:01] ASSET_QUERY - NO_ERRORS",
  "[14:28:19] SYSTEM_IDLE - POWER_SAVE_MODE",
  "[14:31:00] MONITORING_ACTIVE - ALL_STATIONS"
];
