from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (SystemMetricViewSet, TrafficAnalysisViewSet, HomeVentureViewSet, 
                    HeroConfigViewSet, AboutBriefViewSet, NavbarLinkViewSet, VisionManifestoViewSet, 
                    StrategicPillarViewSet, LeadershipAPIView, SocialLinkViewSet)

router = DefaultRouter()
router.register(r'metrics', SystemMetricViewSet)
router.register(r'traffic', TrafficAnalysisViewSet)
router.register(r'ventures', HomeVentureViewSet)
router.register(r'hero-config', HeroConfigViewSet)
router.register(r'about-brief', AboutBriefViewSet)
router.register(r'navbar-links', NavbarLinkViewSet)
router.register(r'vision-manifesto', VisionManifestoViewSet)
router.register(r'strategic-pillars', StrategicPillarViewSet)
router.register(r'social-links', SocialLinkViewSet)

urlpatterns = [
    path('leadership/', LeadershipAPIView.as_view(), name='leadership-api'),
    path('', include(router.urls)),
]
