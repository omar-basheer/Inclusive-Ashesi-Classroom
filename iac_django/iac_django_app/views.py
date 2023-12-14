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
from django.http import FileResponse, HttpResponse
from django.shortcuts import get_object_or_404
# from .serializers import FileSerializer, StudentSerializer, CourseSerializer, EnrollmentSerializer, ModuleSerializer, AllFileSerializer, CourseLinksSerializer
from .serializers import *
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
    permission_classes = [IsAuthenticated]

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
    permission_classes = [IsAuthenticated]

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
    permission_classes = [IsAuthenticated]

    def get(self, request, course_id):
        try:
            course = Course.objects.get(course_id=course_id)
        except Course.DoesNotExist:
            return Response({"error": f"Course with ID {course_id} not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = CourseSerializer(course)

        return Response(serializer.data, status=status.HTTP_200_OK)



class GetModulesView(APIView):
    permission_classes = [IsAuthenticated]

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
                file_data = AllFileSerializer(files, many=True).data

                # Get all lessons associated with the module
                lessons= Lesson.objects.filter(module=module)
                lesson_data = AllLessonSerializer(lessons, many=True).data

               

                # Add file & lesson data to the module data
                module_serializer['lesson'] = lesson_data
                module_serializer['files'] = file_data
                module_data.append(module_serializer)

            return Response(module_data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class GetFileView(APIView):
    permission_classes = [IsAuthenticated]

    # def get(self, request, file_id):
    #     try:
    #         file = File.objects.get(file_id=file_id)
    #     except File.DoesNotExist:
    #         return Response({"error": f"File with ID {file_id} not found."}, status=status.HTTP_404_NOT_FOUND)

    #     # Assuming the 'file' field is a FileField
    #     file_path = file.file.path

    #     # Use Django's FileResponse to serve the file
    #     response = FileResponse(open(file_path, 'rb'), content_type='application/octet-stream')
    #     response['Content-Disposition'] = f'attachment; filename="{file.name}"'
    #     return response

    def get(self, request, file_id):
        try:
            file = File.objects.get(file_id=file_id)
        except File.DoesNotExist:
            return Response({"error": f"File with ID {file_id} not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = AllFileSerializer(file)

        return Response(serializer.data, status=status.HTTP_200_OK)


    # def get(self, request, file_id):
    #     file_obj = get_object_or_404(File, file_id=file_id)

    #     # Open the file and create a FileResponse
    #     try:
    #         file_path = file_obj.file.path
    #         with open(file_path, 'rb') as file_content:
    #             response = FileResponse(file_content)
                
    #             # Set the content type based on the file type
    #             response['Content-Type'] = file_obj.file_type

    #             # Optionally, set the Content-Disposition header to control how the file is handled by the browser
    #             response['Content-Disposition'] = f'attachment; filename="{file_obj.name}"'

    #             return response
    #     except Exception as e:
    #         return HttpResponse(f"Error serving file: {str(e)}", status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class GetLessonView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, lesson_id):
        try:
            lesson = Lesson.objects.get(lesson_id=lesson_id)
        except Lesson.DoesNotExist:
            return Response({"error": f"Lesson with ID {lesson_id} not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = LessonSerializer(lesson)

        return Response(serializer.data, status=status.HTTP_200_OK)