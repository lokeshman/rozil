from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArchiveAssetViewSet, FeaturedAssetViewSet, MediaItemViewSet, GalleryItemViewSet, ArchivesHeaderConfigViewSet

router = DefaultRouter()
router.register(r'assets', ArchiveAssetViewSet)
router.register(r'featured', FeaturedAssetViewSet)
router.register(r'media', MediaItemViewSet, basename='media')
router.register(r'gallery', GalleryItemViewSet, basename='gallery')
router.register(r'header', ArchivesHeaderConfigViewSet, basename='archives-header')

urlpatterns = [
    path('', include(router.urls)),
]
