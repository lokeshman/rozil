from rest_framework import viewsets
from .models import CommandMessage, OfficeLocation
from .serializers import CommandMessageSerializer, OfficeLocationSerializer

class CommandMessageViewSet(viewsets.ModelViewSet):
    queryset = CommandMessage.objects.all()
    serializer_class = CommandMessageSerializer

class OfficeLocationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = OfficeLocation.objects.all().order_by('order')
    serializer_class = OfficeLocationSerializer
