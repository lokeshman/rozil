from rest_framework import serializers
from .models import CommandMessage, OfficeLocation

class CommandMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommandMessage
        fields = '__all__'

class OfficeLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = OfficeLocation
        fields = '__all__'
