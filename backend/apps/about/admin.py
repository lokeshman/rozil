from django.contrib import admin
from .models import CEOProfile, Education, TimelineEvent, CareerHighlight

@admin.register(CEOProfile)
class CEOProfileAdmin(admin.ModelAdmin):
    list_display = ('title', 'quote_author', 'identity_verified')

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('degree', 'school', 'order')
    ordering = ('order',)

@admin.register(TimelineEvent)
class TimelineEventAdmin(admin.ModelAdmin):
    list_display = ('year', 'title', 'category', 'order')
    ordering = ('order',)
    list_filter = ('category',)

@admin.register(CareerHighlight)
class CareerHighlightAdmin(admin.ModelAdmin):
    list_display = ('title', 'metric', 'order')
    ordering = ('order',)
