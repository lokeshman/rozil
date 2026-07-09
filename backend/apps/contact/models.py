from django.db import models

class CommandMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    category = models.CharField(max_length=50, default='General')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message ({self.category}) from {self.name} at {self.created_at}"

class OfficeLocation(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    office_hours = models.CharField(max_length=100)
    emergency_contact = models.CharField(max_length=100, blank=True, null=True)
    map_coordinates = models.CharField(max_length=100, blank=True, null=True) # latitude,longitude string
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.name
