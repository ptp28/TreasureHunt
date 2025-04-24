from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserRegistrationSerializer, UserInfoSerializer
from rest_framework.pagination import PageNumberPagination
from django.contrib.auth import get_user_model
from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

@api_view(['POST'])
def register_user(request):
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response({'id': user.id, 'username': user.username}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def user_info(request, username):
    User = get_user_model()
    user = User.objects.get(username=username)
    serializer = UserInfoSerializer(user)
    return Response(serializer.data)
    

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_username(request):
    user = request.user 
    return Response({"username": user.username})


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    user = request.user 
    serializer = UserInfoSerializer(user, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)