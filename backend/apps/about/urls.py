from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (CEOProfileViewSet, EducationViewSet, 
                    TimelineEventViewSet, CareerHighlightViewSet,
                    AboutAPIView)

router = DefaultRouter()
router.register(r'profile', CEOProfileViewSet)
router.register(r'education', EducationViewSet)
router.register(r'timeline', TimelineEventViewSet)
router.register(r'highlights', CareerHighlightViewSet)

urlpatterns = [
    path('data/', AboutAPIView.as_view(), name='about-api'),
    path('', include(router.urls)),
]
