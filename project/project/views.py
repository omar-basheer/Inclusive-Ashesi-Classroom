from django.shortcuts import render
# from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response
from projectapp.serializers import StudentSerializer
from projectapp.models import *

class StudentView(generics.CreateAPIView):
    queryset = Student.objects.all()  # Specify the queryset if needed
    serializer_class = StudentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)





   