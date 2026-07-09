from django.db import models

class SystemMetric(models.Model):
    metric_id = models.CharField(max_length=50, unique=True)
    title = models.CharField(max_length=100)
    icon = models.CharField(max_length=50)
    mod = models.CharField(max_length=50)
    value = models.CharField(max_length=50)
    unit = models.CharField(max_length=50)
    percentage = models.CharField(max_length=10)

    def __str__(self):
        return self.title

class TrafficAnalysis(models.Model):
    label = models.CharField(max_length=100)
    percentage = models.CharField(max_length=10)

    def __str__(self):
        return self.label

class HomeVenture(models.Model):
    venture_id = models.CharField(max_length=50, unique=True)
    title = models.CharField(max_length=100)
    icon = models.CharField(max_length=100)
    is_material_icon = models.BooleanField(default=False)
    icon_color = models.CharField(max_length=100)
    description = models.TextField()
    badge = models.CharField(max_length=100)
    status = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class HeroConfig(models.Model):
    photo = models.ImageField(upload_to='hero_photos/', blank=True, null=True)
    title = models.CharField(max_length=200, default='ROZIL THAPA')
    subtitle = models.CharField(max_length=200, default='FOUNDER // BUILDER // VISIONARY')
    description = models.TextField(blank=True)
    button_1_text = models.CharField(max_length=50, default='VIEW_CORE_BRIEF')
    button_1_url = models.CharField(max_length=200, default='/about-ceo')
    button_2_text = models.CharField(max_length=50, default='CONNECT_NOW')
    button_2_url = models.CharField(max_length=200, default='/contact')

    def __str__(self):
        return "Homepage Hero Configuration"

    class Meta:
        verbose_name = "Hero Configuration"
        verbose_name_plural = "Hero Configuration"

class AboutBrief(models.Model):
    title = models.CharField(max_length=200, default='THE_FOUNDER_PROTOCOL')
    subtitle = models.CharField(max_length=200, default='INITIATE_BIOGRAPHY_SEQUENCE')
    description = models.TextField(blank=True)
    stats_years = models.CharField(max_length=50, default='6+')
    stats_projects = models.CharField(max_length=50, default='500+')
    stats_retention = models.CharField(max_length=50, default='98.5%')
    signature_text = models.CharField(max_length=100, default='— ROZIL THAPA')

    def __str__(self):
        return "About Brief Configuration"

    class Meta:
        verbose_name = "About Brief"
        verbose_name_plural = "About Brief"

class NavbarLink(models.Model):
    label = models.CharField(max_length=100)
    url = models.CharField(max_length=200)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Navbar Link"
        verbose_name_plural = "Navbar Links"

    def __str__(self):
        return self.label

class VisionManifesto(models.Model):
    headline = models.CharField(max_length=200, default='VISION_MANIFESTO')
    subtitle = models.CharField(max_length=300, default='ROZIL THAPA // THE VISION BEHIND NIGHTVISION')
    main_text = models.TextField(blank=True)
    founder_directive = models.TextField(blank=True)
    roadmap_title = models.CharField(max_length=200, blank=True)
    roadmap_text = models.TextField(blank=True)
    latency_value = models.CharField(max_length=50, default='0.02ms')
    accuracy_value = models.CharField(max_length=50, default='99.9%')
    hero_image = models.ImageField(upload_to='vision/', blank=True, null=True)
    monitor_image = models.ImageField(upload_to='vision/', blank=True, null=True)

    def __str__(self):
        return "Vision Manifesto Configuration"

    class Meta:
        verbose_name = "Vision Manifesto"
        verbose_name_plural = "Vision Manifesto"

class StrategicPillar(models.Model):
    icon = models.CharField(max_length=100, help_text="Material icon name, e.g. 'router'")
    title = models.CharField(max_length=200)
    description = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Strategic Pillar"
        verbose_name_plural = "Strategic Pillars"

    def __str__(self):
        return self.title

class LeadershipDirector(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    clearance = models.CharField(max_length=100)
    tenure = models.CharField(max_length=100)
    sector = models.CharField(max_length=100)
    uptime = models.CharField(max_length=100)
    image = models.ImageField(upload_to='leadership/', blank=True, null=True)

    def __str__(self):
        return self.name

class StrategicNode(models.Model):
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    level = models.CharField(max_length=100)
    description = models.TextField()
    status_color = models.CharField(max_length=50, default='bg-nightvision-neon')
    status_width = models.CharField(max_length=10, default='100%')
    image = models.ImageField(upload_to='leadership/', blank=True, null=True)
    has_shadow = models.BooleanField(default=False)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name

class CommandPrinciple(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

class SocialLink(models.Model):
    platform = models.CharField(max_length=50)
    url = models.URLField(max_length=500)
    icon = models.CharField(max_length=50, blank=True, null=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.platform
