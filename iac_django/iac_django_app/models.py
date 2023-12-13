from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.models import BaseUserManager
from rest_framework.authtoken.models import Token 


class StudentManager(BaseUserManager):
    """
    Custom manager for the Student model.
    """

    def create_user(self, student_id, email, password=None, **extra_fields):
        """
        Creates and saves a new user with the given student ID, email, and password.
        """
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(student_id=student_id, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, student_id, email, password=None, **extra_fields):
        """
        Creates and saves a new superuser with the given student ID, email, and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(student_id, email, password, **extra_fields)
    
class Student(AbstractBaseUser, PermissionsMixin):
    """
    Represents a student in the system.

    Attributes:
        student_id (str): The unique identifier for the student.
        first_name (str): The first name of the student.
        last_name (str): The last name of the student.
        email (str): The email address of the student.
        is_staff (bool): Indicates if the student has staff privileges.
        is_superuser (bool): Indicates if the student has superuser privileges.
    """

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
    """
    Represents a course in the system.

    Attributes:
        course_id (str): The unique identifier for the course.
        course_name (str): The name of the course.
        course_description (str): The description of the course.
    """
    course_id = models.CharField(max_length=20, primary_key=True)
    course_name = models.CharField(max_length=100)
    course_description = models.TextField()

class Enrollment(models.Model):
    """
    Represents the enrollment of a student in a course.
    
    Attributes:
        student (Student): The student enrolled in the course.
        course (Course): The course in which the student is enrolled.
    """
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

class Module(models.Model):
    """
    Represents a module in a course.

    Attributes:
        module_id (AutoField): The unique identifier for the module.
        course (ForeignKey): The course to which the module belongs.
        week (PositiveIntegerField): The week number of the module.
        module_description (TextField): The description of the module.
    """
    module_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    week = models.PositiveIntegerField()
    module_description = models.TextField()

class File(models.Model):
    """
    Represents a file in the system.

    Attributes:
        file_id (AutoField): The unique identifier for the file.
        module (ForeignKey): The module that the file belongs to.
        name (CharField): The name of the file.
        file_type (CharField): The type of the file.
        file (FileField): The actual file object.
    """
    file_id = models.AutoField(primary_key=True)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    file_type = models.CharField(max_length=10)
    file = models.FileField(upload_to='files/')
    file = models.FileField(upload_to='files/')

class Lesson(models.Model):
    """
    Represents a lesson in the system.

    Attributes:
        lesson_id (str): The unique identifier for the lesson.
        module (Module): The module that the lesson belongs to.
        lesson_name (str): The name of the lesson.
        file_type (CharField): The type of the file.
        lesson_description (str): The content of the lesson.
    """
    lesson_id = models.AutoField(primary_key=True)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    lesson_name = models.CharField(max_length=100)
    lesson_file_type = models.CharField(max_length=10)
    lesson_content = models.TextField()
