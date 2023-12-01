from rest_framework import serializers
from .models import Student, Course, Enrollment, Module, File

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['studentid', 'first_name', 'last_name', 'email', 'password']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['course_id', 'course_name', 'course_description']

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = ['student', 'course']

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ['module_id', 'course', 'week', 'module_description']

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ['file_id', 'module', 'name', 'file_type', 'file']
