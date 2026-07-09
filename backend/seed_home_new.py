import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from apps.home.models import HeroConfig, AboutBrief

def run():
    print("Seeding new Home app data...")

    # HeroConfig
    if HeroConfig.objects.exists():
        hero = HeroConfig.objects.first()
        hero.title = "ROZIL THAPA"
        hero.subtitle = "FOUNDER // BUILDER // VISIONARY"
        hero.description = "Architect of high-stakes digital ecosystems and director of the NightVision initiative. Strategically navigating the intersection of military-grade precision and aggressive market growth. Rozil leads Rozil Thapa with an unwavering commitment to data-driven expansion and operational excellence."
        hero.button_1_text = "VIEW_CORE_BRIEF"
        hero.button_1_url = "/about-ceo"
        hero.button_2_text = "CONNECT_NOW"
        hero.button_2_url = "/contact"
        hero.save()
    else:
        HeroConfig.objects.create(
            title="ROZIL THAPA",
            subtitle="FOUNDER // BUILDER // VISIONARY",
            description="Architect of high-stakes digital ecosystems and director of the NightVision initiative. Strategically navigating the intersection of military-grade precision and aggressive market growth. Rozil leads Rozil Thapa with an unwavering commitment to data-driven expansion and operational excellence.",
            button_1_text="VIEW_CORE_BRIEF",
            button_1_url="/about-ceo",
            button_2_text="CONNECT_NOW",
            button_2_url="/contact"
        )

    # AboutBrief
    AboutBrief.objects.all().delete()
    AboutBrief.objects.create(
        title="THE_FOUNDER_PROTOCOL",
        subtitle="INITIATE_BIOGRAPHY_SEQUENCE",
        description="Rozil Thapa transformed a foundation of field electronics into a dominant trademarked enterprise. NightVision isn't just about cameras—it's about absolute operational superiority, unmatched reliability, and a brand presence that commands respect.",
        stats_years="6+",
        stats_projects="500+",
        stats_retention="98.5%",
        signature_text="— ROZIL THAPA"
    )

    print("Home app data seeded successfully!")

if __name__ == '__main__':
    run()
