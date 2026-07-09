from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import CEOProfile, Education, TimelineEvent, CareerHighlight
from .serializers import CEOProfileSerializer, EducationSerializer, TimelineEventSerializer, CareerHighlightSerializer

class CEOProfileViewSet(viewsets.ModelViewSet):
    queryset = CEOProfile.objects.all()
    serializer_class = CEOProfileSerializer

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class TimelineEventViewSet(viewsets.ModelViewSet):
    queryset = TimelineEvent.objects.all()
    serializer_class = TimelineEventSerializer

class CareerHighlightViewSet(viewsets.ModelViewSet):
    queryset = CareerHighlight.objects.all()
    serializer_class = CareerHighlightSerializer

class AboutAPIView(APIView):
    def get(self, request):
        profile = CEOProfile.objects.first()
        profile_data = CEOProfileSerializer(profile, context={'request': request}).data if profile else None
        
        education = Education.objects.all()
        education_data = EducationSerializer(education, many=True, context={'request': request}).data
        
        timeline = TimelineEvent.objects.all()
        timeline_data = TimelineEventSerializer(timeline, many=True, context={'request': request}).data
        
        highlights = CareerHighlight.objects.all()
        highlights_data = CareerHighlightSerializer(highlights, many=True, context={'request': request}).data

        return Response({
            'profile': profile_data,
            'education': education_data,
            'timeline': timeline_data,
            'highlights': highlights_data
        })
