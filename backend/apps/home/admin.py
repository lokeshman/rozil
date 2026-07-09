from django.contrib import admin
from .models import (SystemMetric, TrafficAnalysis, HomeVenture, HeroConfig, AboutBrief,
                     NavbarLink, VisionManifesto, StrategicPillar,
                     LeadershipDirector, StrategicNode, CommandPrinciple, SocialLink)

admin.site.register(SystemMetric)
admin.site.register(TrafficAnalysis)
admin.site.register(HomeVenture)

@admin.register(HeroConfig)
class HeroConfigAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)

@admin.register(AboutBrief)
class AboutBriefAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)

@admin.register(NavbarLink)
class NavbarLinkAdmin(admin.ModelAdmin):
    list_display = ('label', 'url', 'order')
    list_editable = ('url', 'order')

@admin.register(VisionManifesto)
class VisionManifestoAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)

@admin.register(StrategicPillar)
class StrategicPillarAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon', 'order')
    list_editable = ('order',)

@admin.register(LeadershipDirector)
class LeadershipDirectorAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)

@admin.register(StrategicNode)
class StrategicNodeAdmin(admin.ModelAdmin):
    list_display = ('name', 'department', 'level', 'order')
    list_editable = ('order',)

@admin.register(CommandPrinciple)
class CommandPrincipleAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')
    list_editable = ('order',)

@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ('platform', 'url', 'order')
    list_editable = ('url', 'order')
