from rest_framework import serializers
# from .models import Ashesi
from .models import *


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['first_name', 'last_name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}


class CoursesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ['course_name', 'course_code', 'is_active']


# class InstructorSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = Instructor
#         fields ='__all__'


class ModuleSerializers(serializers.ModelSerializer):
    course_id = CoursesSerializers()
    class Meta:
        model = Module
        field = ['module_name', 'description', 'course_id']
        
