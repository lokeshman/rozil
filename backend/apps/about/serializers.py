from rest_framework import serializers
from .models import CEOProfile, Education, TimelineEvent, CareerHighlight

class CEOProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CEOProfile
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class TimelineEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimelineEvent
        fields = '__all__'

class CareerHighlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = CareerHighlight
        fields = '__all__'
