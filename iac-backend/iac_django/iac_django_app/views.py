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
            serializer.save()
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

            response_data = {
                'token': token.key,
                'student_id': user.student_id,
            }

            return Response(response_data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
class GetStudentInfoView(APIView):

    def get(self, request, student_id):
        # Get the token from the request header
        provided_token = request.headers.get('Authorization')

        # Check if the token is provided and starts with 'Token '
        if not provided_token or not provided_token.startswith('Token '):
            return Response({'error': 'Invalid or missing token'}, status=status.HTTP_401_UNAUTHORIZED)

        provided_token = provided_token.split(' ')[1]  # Extract the token from 'Token <token>'

        try:
            # Get the authenticated user from the token
            authenticated_user = Token.objects.get(key=provided_token).user
        except Token.DoesNotExist:
            return Response({'error': 'Invalid token'}, status=status.HTTP_401_UNAUTHORIZED)

        # Check if the authenticated user matches the requested student_id
        if authenticated_user.student_id != student_id:
            return Response({'error': 'Token does not match the requested student'}, status=status.HTTP_403_FORBIDDEN)

        response_data = {
            'student_id': authenticated_user.student_id,
            'first_name': authenticated_user.first_name,
            'last_name': authenticated_user.last_name,
            'email': authenticated_user.email
        }

        return Response(response_data, status=status.HTTP_200_OK)
    
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



class GetModulesView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, course_id):
        try:
            # Get all modules for the specified course
            modules = Module.objects.filter(course__course_id=course_id).order_by('week')
            module_data = []

            for module in modules:
                # Serialize the module data
                module_serializer = ModuleSerializer(module).data

                # Get all files associated with the module
                files = File.objects.filter(module=module)
                file_data = FileSerializer(files, many=True).data

                # Add file data to the module data
                module_serializer['files'] = file_data
                module_data.append(module_serializer)

            return Response(module_data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
