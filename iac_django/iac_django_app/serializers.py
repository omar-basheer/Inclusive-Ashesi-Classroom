from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from rest_framework.authtoken.serializers import AuthTokenSerializer
from .models import Student, Course, Enrollment, Module, File, Lesson

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['student_id', 'first_name', 'last_name', 'email', 'password']

    def create(self, validated_data):
        # Hash the password before saving the user
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['course_id', 'course_name', 'course_description']

class CourseLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['course_id', 'course_name']

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = ['student', 'course']

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ['module_id', 'course', 'week', 'module_description']

class AllFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ['file_id', 'module', 'name', 'file_type']
        # read_only_fields = ['file']

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ['name', 'file']

class AllLessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['lesson_id', 'module', 'lesson_name', 'lesson_file_type']

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['lesson_name', 'lesson_content']
