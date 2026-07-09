import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
django.setup()

from apps.home.models import LeadershipDirector, StrategicNode, CommandPrinciple
from django.core.files.base import ContentFile

# Clear existing
LeadershipDirector.objects.all().delete()
StrategicNode.objects.all().delete()
CommandPrinciple.objects.all().delete()

print("Creating Director...")
LeadershipDirector.objects.create(
    name='ROZIL THAPA',
    title='FOUNDER & CEO',
    clearance='ROLE_LEVEL_01',
    tenure='12.4 YRS',
    sector='CORE_GOVERNANCE',
    uptime='99.99%',
)

print("Creating Locations...")
StrategicNode.objects.create(
    name='OPERATIONS_LEAD',
    department='LOGISTICS_MGT',
    level='LVL_02',
    description='Optimizing global distribution locations with 98% efficiency.',
    status_color='bg-nightvision-neon',
    status_width='85%',
    has_shadow=False,
    order=1
)

StrategicNode.objects.create(
    name='TECH_ARCHITECT',
    department='R&D_DIVISION',
    level='LVL_02',
    description='Implementing next-gen neural protection guidelines.',
    status_color='bg-nightvision-neon',
    status_width='92%',
    has_shadow=False,
    order=2
)

StrategicNode.objects.create(
    name='RISK_DIRECTOR',
    department='RISK_MANAGEMENT',
    level='LVL_02',
    description='Absolute zero-breach record over the last 48 months.',
    status_color='bg-alert-red',
    status_width='98%',
    has_shadow=True,
    order=3
)

print("Creating Principles...")
CommandPrinciple.objects.create(
    title='DISCIPLINE_ABOVE_ALL',
    description='The core of operational stability is unwavering adherence to guidelines and strategic rigor.',
    order=1
)

CommandPrinciple.objects.create(
    title='AGGRESSIVE_INNOVATION',
    description='We do not wait for the future; we architect the next leap through persistent iteration.',
    order=2
)

CommandPrinciple.objects.create(
    title='TRUST_THROUGH_TRANSPARENCY',
    description='Management clarity is built on verifiable data and horizontal accountability.',
    order=3
)

print("Done.")
