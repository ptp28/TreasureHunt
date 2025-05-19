from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Quest
from .serializers import QuestSerializer
from rest_framework.response import Response


# Create your views here.
@api_view(['GET'])
def get_all_quests(request):
    quests = Quest.objects.all()
    serializer = QuestSerializer(quests, many=True)
    return Response(serializer.data)