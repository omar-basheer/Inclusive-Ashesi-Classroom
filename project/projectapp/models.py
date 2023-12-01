from django.db import models

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True, default=None)
    password = models.CharField(max_length=100)
    enrolled_courses = models.ManyToManyField('Courses', related_name='enrolled_students', blank=True)
    
    
class Courses(models.Model):
    course_name = models.CharField(max_length=50)
    course_code = models.CharField(max_length= 20, unique=True, blank=False) #Primary key here
    course_description = models.TextField(blank=True, null = True)

    
class Module(models.Model):
    module_week = models.IntegerField()
    description = models.TextField(blank = True)
    course_id = models.ForeignKey(Courses, on_delete=models.CASCADE)
    files = models.ManyToManyField('Files', related_name='modules', blank=True)


class Files(models.Model):
    file_name = models.CharField(max_length = 100)
    file = models.FileField(upload_to='course_files/')

# class Instructor(models.Model):
#     course_name = models.ManyToManyField('Courses', null = False )
#     department = models.CharField(max_length=50, null=False)
#     academic_position = models.CharField(max_length=50)
#     date_joined = models.DateTimeField(blank=False)

# class Read_Aloud(models.Model):
#     user_id = models.ForeignKey(Ashesi, on_delete=models.CASCADE)
#     course_id = models.ForeignKey(Courses, on_delete=models.CASCADE)
#     text_content = models.TextField()
#     audio_file = models.FileField(upload_to='audio_files/')



