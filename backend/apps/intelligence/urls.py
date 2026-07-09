from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IntelLogViewSet

router = DefaultRouter()
router.register(r'logs', IntelLogViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
