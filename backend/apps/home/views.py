from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import (SystemMetric, TrafficAnalysis, HomeVenture, HeroConfig, AboutBrief,
                     NavbarLink, VisionManifesto, StrategicPillar,
                     LeadershipDirector, StrategicNode, CommandPrinciple, SocialLink)
from .serializers import (SystemMetricSerializer, TrafficAnalysisSerializer, 
                          HomeVentureSerializer, HeroConfigSerializer, AboutBriefSerializer,
                          NavbarLinkSerializer, VisionManifestoSerializer, 
                          StrategicPillarSerializer, LeadershipDirectorSerializer, 
                          StrategicNodeSerializer, CommandPrincipleSerializer, SocialLinkSerializer)

class SystemMetricViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SystemMetric.objects.all()
    serializer_class = SystemMetricSerializer

class TrafficAnalysisViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TrafficAnalysis.objects.all()
    serializer_class = TrafficAnalysisSerializer

class HomeVentureViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HomeVenture.objects.all()
    serializer_class = HomeVentureSerializer

class HeroConfigViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeroConfig.objects.all()
    serializer_class = HeroConfigSerializer

class AboutBriefViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutBrief.objects.all()
    serializer_class = AboutBriefSerializer

class NavbarLinkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = NavbarLink.objects.all()
    serializer_class = NavbarLinkSerializer

class VisionManifestoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = VisionManifesto.objects.all()
    serializer_class = VisionManifestoSerializer

class StrategicPillarViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StrategicPillar.objects.all()
    serializer_class = StrategicPillarSerializer

class LeadershipAPIView(APIView):
    """
    Returns a unified payload for the Leadership Dashboard frontend,
    aggregating Director, Locations, and Principles data.
    """
    def get(self, request, *args, **kwargs):
        # We assume there's only one main director for this layout
        director = LeadershipDirector.objects.first()
        locations = StrategicNode.objects.all()
        principles = CommandPrinciple.objects.all()

        return Response({
            "test_deploy": "working_37bbb06",
            "director": LeadershipDirectorSerializer(director, context={'request': request}).data if director else None,
            "locations": StrategicNodeSerializer(locations, many=True, context={'request': request}).data,
            "principles": CommandPrincipleSerializer(principles, many=True).data
        })

class SocialLinkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SocialLink.objects.all().order_by('order')
    serializer_class = SocialLinkSerializer
