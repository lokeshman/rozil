from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OperationKPIViewSet, VentureNodeViewSet

router = DefaultRouter()
router.register(r'kpis', OperationKPIViewSet)
router.register(r'ventures', VentureNodeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
