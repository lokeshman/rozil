from rest_framework import serializers
from .models import OperationKPI, VentureNode

class OperationKPISerializer(serializers.ModelSerializer):
    class Meta:
        model = OperationKPI
        fields = '__all__'

class VentureNodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = VentureNode
        fields = '__all__'
