from django.db import models

class CEOProfile(models.Model):
    title = models.CharField(max_length=200, default="RAM BAHADUR'S LEGACY // ROZIL THAPA")
    subtitle = models.CharField(max_length=500, blank=True)
    quote = models.TextField(blank=True)
    quote_author = models.CharField(max_length=100, default="— ROZIL THAPA")
    biography_text = models.TextField()
    hero_image = models.ImageField(upload_to='about/', blank=True, null=True)
    identity_verified = models.BooleanField(default=True)

    def __str__(self):
        return "CEO Profile Configuration"

    class Meta:
        verbose_name = "CEO Profile"
        verbose_name_plural = "CEO Profiles"

class Education(models.Model):
    degree = models.CharField(max_length=200)
    school = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Education"
        verbose_name_plural = "Education Records"

    def __str__(self):
        return f"{self.degree} at {self.school}"

class TimelineEvent(models.Model):
    year = models.CharField(max_length=50)
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=100, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Timeline Event"
        verbose_name_plural = "Timeline Events"

    def __str__(self):
        return f"{self.year}: {self.title}"

class CareerHighlight(models.Model):
    title = models.CharField(max_length=200)
    metric = models.CharField(max_length=100)
    description = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Career Highlight"
        verbose_name_plural = "Career Highlights"

    def __str__(self):
        return self.title
