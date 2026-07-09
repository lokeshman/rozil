import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from apps.about.models import CEOProfile, Education, TimelineEvent, CareerHighlight

def run():
    print("Seeding About app data...")

    # CEO Profile
    CEOProfile.objects.all().delete()
    CEOProfile.objects.create(
        title="RAM BAHADUR'S LEGACY // ROZIL THAPA",
        subtitle="A visionary entrepreneur who transitioned from high-field technician to the founder of Nepal's premiere trademarked operations brand.",
        quote="I didn't just want to sell cameras. I wanted to create a brand that makes people feel secure, proud, and connected.",
        quote_author="— ROZIL THAPA",
        biography_text="""Raised by his grandfather Ram Bahadur Thapa (GM at DDC Nepal), Rozil was forged in an environment of military-grade discipline, honesty, and responsibility.

Initially rejecting conventional business wisdom, Rozil spent his early career mastering technical implementations in the field. He personally oversaw the installation of over 500 CCTV systems across Kathmandu before realizing the industry lacked a cohesive, reliable brand identity.

In 2021, he founded Founder OS, which later evolved into NightVision, establishing a new standard for operational security and technological oversight in the region.""",
        identity_verified=True
    )

    # Education
    Education.objects.all().delete()
    Education.objects.create(
        degree="SEE_CERTIFICATION",
        school="Modern Boarding Secondary",
        description="Foundation in systematic analysis and core sciences.",
        order=1
    )
    Education.objects.create(
        degree="DIPLOMA_+2",
        school="Texas International College",
        description="Advanced studies in technology and management principles.",
        order=2
    )

    # Timeline Events
    TimelineEvent.objects.all().delete()
    TimelineEvent.objects.create(
        year="2016-2018",
        title="FIELD_OPERATIONS",
        description="Completed 500+ security installations. Mastered hardware implementation and tactical deployment.",
        category="Early Career",
        order=1
    )
    TimelineEvent.objects.create(
        year="2019",
        title="SYSTEM_INTEGRATION",
        description="Transitioned from hardware deployment to system-wide network integration for enterprise clients.",
        category="Mid Career",
        order=2
    )
    TimelineEvent.objects.create(
        year="2021",
        title="FOUNDER_OS_INIT",
        description="Established initial operations brand focusing on B2B security consulting.",
        category="Venture",
        order=3
    )
    TimelineEvent.objects.create(
        year="2023",
        title="NIGHTVISION_LAUNCH",
        description="Rebranded and trademarked the core ecosystem. Achieved 200% YOY growth in enterprise contracts.",
        category="Venture",
        order=4
    )

    # Career Highlights
    CareerHighlight.objects.all().delete()
    CareerHighlight.objects.create(
        title="ENTERPRISE_DEPLOYMENTS",
        metric="500+",
        description="Successful system installations across commercial and government sectors.",
        order=1
    )
    CareerHighlight.objects.create(
        title="CLIENT_RETENTION",
        metric="98.5%",
        description="Maintained near-perfect retention through obsessive focus on reliability.",
        order=2
    )
    CareerHighlight.objects.create(
        title="TEAM_EXPANSION",
        metric="300%",
        description="Grew the technical and operational team across two strategic locations.",
        order=3
    )

    print("About app data seeded successfully!")

if __name__ == '__main__':
    run()
