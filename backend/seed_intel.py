import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from apps.intelligence.models import IntelLog

logs = [
    {
      'log_id': 'log_001',
      'title': 'Quantum Encryption Standard v4 Deployed',
      'summary': 'Successfully rolled out QES-v4 across all tier-1 secure nodes. Latency impact: <0.02ms. Security rating upgraded to OMEGA.',
      'category': 'SECURITY',
      'classification': 'TOP_SECRET',
      'access_level': 'Lvl_9',
      'source': 'INTERNAL_SEC',
      'date': '2024.10.15',
      'status': 'VERIFIED',
      'icon': 'security'
    },
    {
      'log_id': 'log_002',
      'title': 'Venture Node Alpha Reaches 1M active connections',
      'summary': 'Milestone achieved for Node Alpha. Scaling protocols successfully managed the burst traffic with 0% packet loss.',
      'category': 'INFRASTRUCTURE',
      'classification': 'INTERNAL',
      'access_level': 'Lvl_3',
      'source': 'SYS_METRICS',
      'date': '2024.10.14',
      'status': 'LOGGED',
      'icon': 'analytics'
    },
    {
      'log_id': 'log_003',
      'title': 'Anomalous Data Pattern Detected in Sector 7',
      'summary': 'Unidentified ping requests originating from Sector 7 routing nodes. Firewall maxed. Auto-mitigation deployed.',
      'category': 'THREAT_INTEL',
      'classification': 'RESTRICTED',
      'access_level': 'Lvl_7',
      'source': 'WATCHDOG',
      'date': '2024.10.12',
      'status': 'INVESTIGATING',
      'icon': 'warning'
    }
]

for log in logs:
    IntelLog.objects.get_or_create(log_id=log['log_id'], defaults=log)

print("IntelLogs seeded successfully!")
