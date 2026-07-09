from rest_framework import serializers
from .models import (SystemMetric, TrafficAnalysis, HomeVenture, HeroConfig, AboutBrief,
                     NavbarLink, VisionManifesto, StrategicPillar,
                     LeadershipDirector, StrategicNode, CommandPrinciple, SocialLink)

class SystemMetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMetric
        fields = '__all__'

class TrafficAnalysisSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrafficAnalysis
        fields = '__all__'

class HomeVentureSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeVenture
        fields = '__all__'

class HeroConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroConfig
        fields = '__all__'

class AboutBriefSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutBrief
        fields = '__all__'

class NavbarLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavbarLink
        fields = '__all__'

class VisionManifestoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisionManifesto
        fields = '__all__'

class StrategicPillarSerializer(serializers.ModelSerializer):
    class Meta:
        model = StrategicPillar
        fields = '__all__'

class LeadershipDirectorSerializer(serializers.ModelSerializer):
    imageUrl = serializers.ImageField(source='image', read_only=True)
    access_level = serializers.CharField(source='clearance', read_only=True)
    
    class Meta:
        model = LeadershipDirector
        fields = ['name', 'title', 'access_level', 'tenure', 'sector', 'uptime', 'imageUrl']

class StrategicNodeSerializer(serializers.ModelSerializer):
    imageUrl = serializers.ImageField(source='image', read_only=True)
    statusColor = serializers.CharField(source='status_color', read_only=True)
    statusWidth = serializers.CharField(source='status_width', read_only=True)
    hasShadow = serializers.BooleanField(source='has_shadow', read_only=True)

    class Meta:
        model = StrategicNode
        fields = ['id', 'name', 'department', 'level', 'description', 'statusColor', 'statusWidth', 'imageUrl', 'hasShadow', 'order']

class CommandPrincipleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommandPrinciple
        fields = ['id', 'title', 'description', 'order']

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = '__all__'
