from rest_framework import serializers
from .models import IntelLog

class IntelLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = IntelLog
        fields = '__all__'
