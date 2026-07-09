from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CommandMessageViewSet, OfficeLocationViewSet

router = DefaultRouter()
router.register(r'message', CommandMessageViewSet)
router.register(r'offices', OfficeLocationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
