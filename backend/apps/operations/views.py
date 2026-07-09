from rest_framework import viewsets
from .models import OperationKPI, VentureNode
from .serializers import OperationKPISerializer, VentureNodeSerializer

class OperationKPIViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = OperationKPI.objects.all()
    serializer_class = OperationKPISerializer

class VentureNodeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = VentureNode.objects.all()
    serializer_class = VentureNodeSerializer
