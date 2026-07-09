from django.db import models

class OperationKPI(models.Model):
    kpi_id = models.CharField(max_length=50, unique=True)
    title = models.CharField(max_length=100)
    value = models.CharField(max_length=50)
    icon = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    theme = models.CharField(max_length=50)
    progress = models.CharField(max_length=50, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    is_bars = models.BooleanField(default=False)
    custom_bottom = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.title

class VentureNode(models.Model):
    node_id = models.CharField(max_length=50, unique=True)
    title = models.CharField(max_length=100)
    badge = models.CharField(max_length=50)
    theme = models.CharField(max_length=50)
    image = models.URLField(max_length=500)
    uptime = models.CharField(max_length=20)
    growth = models.CharField(max_length=20)
    active_nodes = models.CharField(max_length=20)
    action_text = models.CharField(max_length=50)

    def __str__(self):
        return self.title
