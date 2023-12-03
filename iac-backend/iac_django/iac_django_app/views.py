from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from .models import Student, Course, Module, File, Enrollment
from django.contrib.auth import get_user_model
from .serializers import StudentSerializer, CourseSerializer, EnrollmentSerializer, ModuleSerializer, FileSerializer


# class StudentView(APIView):

#     def post(self, request, format=None):
#         action = request.data.get('action')
#         if action == 'signup':
#             return self.signup(request)
#         elif action == 'login':
#             return self.login(request)
#         else:
#             return Response({'error': 'Invalid action'}, status=status.HTTP_400_BAD_REQUEST)


class RegisterStudentView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            # save the user 
            serializer.save()
            # Generate and return an authentication token
            # token, created = Token.objects.get_or_create(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginStudentView(APIView):

    def post(self, request, format=None):
        email = request.data.get('email')
        password = request.data.get('password')
        print(f"Attempting login with email: {email}, password: {password}")
        # Authenticate the user
        user = authenticate(request, username=email, password=password)
        # if user.is_superuser:
        #     user.is_staff = True
        # user.save()
        print(f"Authentication result: {user}")
        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        

class DeleteStudentView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    def delete(self, request, student_id):
        try:
            student = Student.objects.get(student_id=student_id)
        except Student.DoesNotExist:
            return Response({"error": f"Student not found!"})

        student.delete()
        return Response({"message": f"Student with id {student_id} deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
