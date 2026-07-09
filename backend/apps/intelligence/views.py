from rest_framework import viewsets
from .models import IntelLog
from .serializers import IntelLogSerializer

class IntelLogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IntelLog.objects.all()
    serializer_class = IntelLogSerializer
