from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q
from .models import ArchiveAsset, FeaturedAsset, MediaItem, GalleryItem, ArchivesHeaderConfig
from .serializers import (ArchiveAssetSerializer, FeaturedAssetSerializer, 
                           MediaItemSerializer, GalleryItemSerializer, ArchivesHeaderConfigSerializer)

class ArchiveAssetViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ArchiveAsset.objects.all()
    serializer_class = ArchiveAssetSerializer

class ArchivesHeaderConfigViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ArchivesHeaderConfig.objects.all()
    serializer_class = ArchivesHeaderConfigSerializer

class FeaturedAssetViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FeaturedAsset.objects.all()
    serializer_class = FeaturedAssetSerializer

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 6
    page_size_query_param = 'page_size'
    max_page_size = 100

class MediaItemViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = MediaItemSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        queryset = MediaItem.objects.all().order_by('order', '-id')
        search = self.request.query_params.get('search', None)
        category = self.request.query_params.get('category', None)
        is_featured = self.request.query_params.get('is_featured', None)

        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) | 
                Q(outlet__icontains=search) | 
                Q(summary__icontains=search)
            )
        if category:
            queryset = queryset.filter(item_type__iexact=category)
        if is_featured is not None:
            queryset = queryset.filter(is_featured=is_featured.lower() == 'true')

        return queryset

    @action(detail=False, methods=['get'])
    def categories(self, request):
        categories = MediaItem.objects.values_list('item_type', flat=True).distinct()
        return Response(list(categories))

class GalleryItemViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = GalleryItemSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        queryset = GalleryItem.objects.all().order_by('order', 'id')
        category = self.request.query_params.get('category', None)
        search = self.request.query_params.get('search', None)

        if category:
            queryset = queryset.filter(category__iexact=category)
        if search:
            queryset = queryset.filter(title__icontains=search)

        return queryset

    @action(detail=False, methods=['get'])
    def categories(self, request):
        categories = GalleryItem.objects.values_list('category', flat=True).distinct()
        return Response(list(categories))
