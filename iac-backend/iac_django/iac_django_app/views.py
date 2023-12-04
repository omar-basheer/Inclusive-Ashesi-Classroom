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
from .serializers import StudentSerializer, CourseSerializer, EnrollmentSerializer, ModuleSerializer, FileSerializer, CourseLinksSerializer

"""
Classes for Student signup and login
"""
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


"""
Classes for Student course retrieval
"""

class GetStudentCoursesView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, student_id):
        try:
            student = Student.objects.get(student_id=student_id)
        except Student.DoesNotExist:
            return Response({"error": f"Student with ID {student_id} not found."}, status=status.HTTP_404_NOT_FOUND)

        enrollments = Enrollment.objects.filter(student=student)
        courses = [enrollment.course for enrollment in enrollments]
        serializer = CourseLinksSerializer(courses, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class GetCourseDetailsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, course_id):
        try:
            course = Course.objects.get(course_id=course_id)
        except Course.DoesNotExist:
            return Response({"error": f"Course with ID {course_id} not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = CourseSerializer(course)

        return Response(serializer.data, status=status.HTTP_200_OK)



        
