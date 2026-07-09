from django.db import models

class IntelLog(models.Model):
    log_id = models.CharField(max_length=50, unique=True)
    title = models.CharField(max_length=200)
    summary = models.TextField()
    category = models.CharField(max_length=100)
    classification = models.CharField(max_length=100)
    access_level = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    icon = models.CharField(max_length=50, default='article')

    def __str__(self):
        return self.title
