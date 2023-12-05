from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import Student, Course, Module, File, Enrollment

class StudentAdmin(admin.ModelAdmin):
    list_display = ['email', 'first_name', 'last_name', 'student_id', 'is_staff', 'is_superuser']

class CourseAdmin(admin.ModelAdmin):
    list_display = ['course_id', 'course_name', 'course_description']

class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ['student', 'course']

class ModuleAdmin(admin.ModelAdmin):
    list_display = ['module_id', 'course', 'week', 'module_description']

class FileAdmin(admin.ModelAdmin):
    list_display = ['file_id', 'module', 'name', 'file_type', 'file']

# Register models with custom admin classes
admin.site.register(Student, StudentAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Enrollment, EnrollmentAdmin)
admin.site.register(Module, ModuleAdmin)
admin.site.register(File, FileAdmin)