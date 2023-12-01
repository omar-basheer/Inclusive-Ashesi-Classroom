from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token
from .models import Student, Course, Module, File, Enrollment
from .serializers import StudentSerializer, CourseSerializer, EnrollmentSerializer, ModuleSerializer, FileSerializer

class StudentView(APIView):

    def get(self, request, format=None):
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    def signup(self, request, format=None):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            # save the user 
            user = serializer.save()
            # log the user in
            login(request, user)
            # Generate and return an authentication token
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def login(self, request, format=None):
        username = request.data.get('username')
        password = request.data.get('password')
        # Authenticate the user
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        

