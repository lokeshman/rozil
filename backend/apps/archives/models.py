from django.db import models

class ArchiveAsset(models.Model):
    asset_id = models.CharField(max_length=50, unique=True)
    title = models.CharField(max_length=100)
    sector = models.CharField(max_length=50)
    icon = models.CharField(max_length=50)
    theme = models.CharField(max_length=50)
    stats_label = models.CharField(max_length=50)
    stats_value = models.CharField(max_length=50)
    stats_progress = models.CharField(max_length=50)
    stats_glow = models.BooleanField(default=False)
    last_mod = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class FeaturedAsset(models.Model):
    asset_id = models.CharField(max_length=50, unique=True)
    title = models.CharField(max_length=100)
    image = models.URLField(max_length=500)
    sector = models.CharField(max_length=50, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    res = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    span = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class MediaItem(models.Model):
    title = models.CharField(max_length=200)
    outlet = models.CharField(max_length=100)
    item_type = models.CharField(max_length=50, choices=[
        ('News', 'News'),
        ('Press Release', 'Press Release'),
        ('Interview', 'Interview'),
        ('Conference', 'Conference'),
        ('Publication', 'Publication'),
        ('Award', 'Award'),
    ])
    summary = models.TextField()
    url = models.URLField(blank=True, null=True)
    image = models.URLField(max_length=500, blank=True, null=True)
    date = models.CharField(max_length=50) # e.g. "MARCH 2026"
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"[{self.item_type}] {self.title} - {self.outlet}"

class GalleryItem(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    media_type = models.CharField(max_length=50, choices=[
        ('Image', 'Image'),
        ('Video', 'Video'),
    ], default='Image')
    url = models.URLField(max_length=500)
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"[{self.category}] {self.title}"

class ArchivesHeaderConfig(models.Model):
    title = models.CharField(max_length=200, default='Assets & Portfolio')
    description = models.TextField(default='A centralized repository of technological deployments, cinematic operations, and infrastructural engineering projects executed under the Rozil Thapa mandate.')
    total_assets = models.CharField(max_length=50, default='142')
    data_density = models.CharField(max_length=50, default='8.4PB')

    def __str__(self):
        return "Archives Header Configuration"

    class Meta:
        verbose_name = "Archives Header Configuration"
        verbose_name_plural = "Archives Header Configuration"
