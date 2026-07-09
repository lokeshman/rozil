from rest_framework import serializers
from .models import ArchiveAsset, FeaturedAsset, MediaItem, GalleryItem, ArchivesHeaderConfig

class ArchiveAssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArchiveAsset
        fields = '__all__'

class FeaturedAssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeaturedAsset
        fields = '__all__'

class MediaItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaItem
        fields = '__all__'

class GalleryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryItem
        fields = '__all__'

class ArchivesHeaderConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArchivesHeaderConfig
        fields = '__all__'
