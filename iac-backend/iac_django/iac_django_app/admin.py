from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import Student, Course, Module, File, Enrollment


# admin.site.register(get_user_model())
admin.site.register(Student)
admin.site.register(Course)
admin.site.register(Enrollment)
admin.site.register(Module)
admin.site.register(File)
