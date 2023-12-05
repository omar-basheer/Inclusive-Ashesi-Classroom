from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.models import BaseUserManager
from rest_framework.authtoken.models import Token 


class StudentManager(BaseUserManager):
    def create_user(self, student_id, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(student_id=student_id, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, student_id, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(student_id, email, password, **extra_fields)
    
class Student(AbstractBaseUser, PermissionsMixin):
    student_id = models.CharField(max_length=8, primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['student_id', 'first_name', 'last_name']

    objects = StudentManager()

class Course(models.Model):
    course_id = models.CharField(max_length=20, primary_key=True)
    course_name = models.CharField(max_length=100)
    course_description = models.TextField()

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

class Module(models.Model):
    module_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    week = models.PositiveIntegerField()
    module_description = models.TextField()

class File(models.Model):
    file_id = models.AutoField(primary_key=True)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    file_type = models.CharField(max_length=10)
    # file = models.FileField(upload_to='files/', storage=settings.DEFAULT_FILE_STORAGE)
    file = models.FileField(upload_to='files/')
