from django.contrib import admin
from .models import ArchiveAsset, FeaturedAsset, MediaItem, GalleryItem, ArchivesHeaderConfig

admin.site.register(ArchiveAsset)
admin.site.register(FeaturedAsset)

@admin.register(ArchivesHeaderConfig)
class ArchivesHeaderConfigAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)

@admin.register(MediaItem)
class MediaItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'outlet', 'item_type', 'is_featured', 'order')
    list_editable = ('is_featured', 'order')

@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'media_type', 'order')
    list_editable = ('order',)
