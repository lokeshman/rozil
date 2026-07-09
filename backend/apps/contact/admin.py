from django.contrib import admin
from .models import CommandMessage, OfficeLocation

@admin.register(CommandMessage)
class CommandMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'category', 'created_at')
    search_fields = ('name', 'email', 'message')

@admin.register(OfficeLocation)
class OfficeLocationAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'order')
    list_editable = ('order',)
