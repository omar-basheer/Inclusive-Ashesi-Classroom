from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Student, Course, Module, File, Enrollment

admin.site.register(Student)
admin.site.register(Course)
admin.site.register(Enrollment)
admin.site.register(Module)
admin.site.register(File)
