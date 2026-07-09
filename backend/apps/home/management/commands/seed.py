from django.core.management.base import BaseCommand
from apps.home.models import SystemMetric, TrafficAnalysis, HomeVenture
from apps.operations.models import OperationKPI, VentureNode
from apps.intelligence.models import IntelLog
from apps.archives.models import ArchiveAsset, FeaturedAsset

class Command(BaseCommand):
    help = 'Seed the database with initial static data'

    def handle(self, *args, **kwargs):
        self.stdout.write("Seeding SystemMetrics...")
        metrics = [
            {'metric_id': 'ventures', 'title': 'Ventures', 'icon': 'hub', 'mod': 'MOD_01', 'value': '12', 'unit': 'ACTIVE', 'percentage': '85%'},
            {'metric_id': 'growth', 'title': 'Growth', 'icon': 'trending_up', 'mod': 'MOD_02', 'value': '+412%', 'unit': 'YOY', 'percentage': '94%'},
            {'metric_id': 'reach', 'title': 'Network Reach', 'icon': 'language', 'mod': 'MOD_03', 'value': '2.4M', 'unit': 'NODES', 'percentage': '72%'},
            {'metric_id': 'uptime', 'title': 'System Uptime', 'icon': 'update', 'mod': 'MOD_04', 'value': '99.9', 'unit': 'PERCENT', 'percentage': '99%'},
        ]
        for m in metrics:
            SystemMetric.objects.get_or_create(metric_id=m['metric_id'], defaults=m)

        self.stdout.write("Seeding TrafficAnalysis...")
        traffic = [
            {'label': 'SERVER_MEM', 'percentage': '72%'},
            {'label': 'ACCESS_KEY', 'percentage': '64%'},
            {'label': 'NETWORK_CAPACITY', 'percentage': '98%'},
        ]
        for t in traffic:
            TrafficAnalysis.objects.get_or_create(label=t['label'], defaults=t)

        self.stdout.write("Seeding HomeVentures...")
        ventures = [
            {'venture_id': 'nv', 'title': 'NIGHTVISION', 'icon': 'NV//', 'icon_color': 'text-nightvision-neon', 'description': 'Advanced operations and operational systems engineering.', 'badge': 'NV_PROTO_42', 'status': 'ACTIVE_NODE', 'is_material_icon': False},
            {'venture_id': 'rt', 'title': 'RT DREAM STATE', 'icon': 'cloud_queue', 'icon_color': 'text-terminal-cyan', 'description': 'Innovative incubator for next-gen ideas.', 'badge': 'DREAM_SEQ_99', 'status': 'SYS_ONLINE', 'is_material_icon': True},
            {'venture_id': 'yp', 'title': 'YARD PRODUCTION', 'icon': 'movie', 'icon_color': 'text-on-surface', 'description': 'Premium media and content engine.', 'badge': 'MEDIA_VAULT', 'status': 'RENDER_FARM', 'is_material_icon': True},
        ]
        for v in ventures:
            HomeVenture.objects.get_or_create(venture_id=v['venture_id'], defaults=v)

        self.stdout.write("Seeding OperationKPIs...")
        kpis = [
            {'kpi_id': 'network_efficiency', 'title': 'NETWORK_EFFICIENCY', 'value': '94.2%', 'icon': 'speed', 'status': 'OPTIMAL', 'theme': 'nightvision-neon', 'progress': '94%', 'description': 'Core routing protocols operating at peak efficiency.', 'is_bars': False},
            {'kpi_id': 'data_throughput', 'title': 'DATA_THROUGHPUT', 'value': '1.2 PB/s', 'icon': 'analytics', 'status': 'STABLE', 'theme': 'terminal-cyan', 'is_bars': True, 'custom_bottom': 'bar-chart'},
            {'kpi_id': 'privacy_integrity', 'title': 'PRIVACY_INTEGRITY', 'value': '100%', 'icon': 'privacy', 'status': 'SECURE', 'theme': 'on-surface', 'progress': '100%', 'description': 'All firewalls active. Zero breaches detected in the last 30 days.', 'is_bars': False},
        ]
        for k in kpis:
            OperationKPI.objects.get_or_create(kpi_id=k['kpi_id'], defaults=k)

        self.stdout.write("Seeding VentureNodes...")
        ops_ventures = [
            {'node_id': 'project_alpha', 'title': 'PROJECT_ALPHA', 'badge': 'CLASS_S', 'theme': 'nightvision-neon', 'image': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80', 'uptime': '99.9%', 'growth': '+124%', 'active_nodes': '1,024', 'action_text': 'ACCESS_NODE'},
            {'node_id': 'nexus_hub', 'title': 'NEXUS_HUB', 'badge': 'CLASS_A', 'theme': 'terminal-cyan', 'image': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80', 'uptime': '99.5%', 'growth': '+84%', 'active_nodes': '512', 'action_text': 'ACCESS_NODE'},
            {'node_id': 'void_engine', 'title': 'VOID_ENGINE', 'badge': 'EXPERIMENTAL', 'theme': 'alert-red', 'image': 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80', 'uptime': '89.2%', 'growth': '+412%', 'active_nodes': '64', 'action_text': 'WARNING_PROCEED'},
        ]
        for v in ops_ventures:
            VentureNode.objects.get_or_create(node_id=v['node_id'], defaults=v)

        self.stdout.write("Seeding Archives...")
        archives = [
            {'asset_id': 'sys_core', 'title': 'SYSTEM_CORE_V1', 'sector': 'INFRASTRUCTURE', 'icon': 'dns', 'theme': 'nightvision-neon', 'stats_label': 'EFFICIENCY', 'stats_value': '98.2%', 'stats_progress': '98%', 'stats_glow': True, 'last_mod': '04.12.2023'},
            {'asset_id': 'neural_net', 'title': 'NEURAL_NET_BETA', 'sector': 'AI_MODELS', 'icon': 'memory', 'theme': 'terminal-cyan', 'stats_label': 'ACCURACY', 'stats_value': '94.5%', 'stats_progress': '94%', 'stats_glow': False, 'last_mod': '11.05.2023'},
            {'asset_id': 'quantum', 'title': 'QUANTUM_LEDGER', 'sector': 'FINANCE', 'icon': 'account_balance', 'theme': 'on-surface', 'stats_label': 'SYNC_RATE', 'stats_value': '99.9%', 'stats_progress': '99%', 'stats_glow': False, 'last_mod': '02.18.2024'},
            {'asset_id': 'holo', 'title': 'HOLO_INTERFACE', 'sector': 'UX_DESIGN', 'icon': 'view_in_ar', 'theme': 'nightvision-neon', 'stats_label': 'ADOPTION', 'stats_value': '87.4%', 'stats_progress': '87%', 'stats_glow': False, 'last_mod': '01.30.2024'},
        ]
        for a in archives:
            ArchiveAsset.objects.get_or_create(asset_id=a['asset_id'], defaults=a)

        self.stdout.write("Seeding FeaturedAsset...")
        FeaturedAsset.objects.get_or_create(
            asset_id='project_omega',
            defaults={
                'title': 'PROJECT_OMEGA',
                'image': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
                'sector': 'AEROSPACE',
                'description': 'Next-generation orbital tracking system. Fully integrated with global satellite networks for real-time telemetry processing.',
                'res': '4K_UHD',
                'status': 'ARCHIVED',
                'span': '24_MONTHS'
            }
        )

        self.stdout.write(self.style.SUCCESS("Database seeded successfully!"))
