from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import Student, Course, Module, File, Enrollment, Lesson

class StudentAdmin(admin.ModelAdmin):
    list_display = ['email', 'first_name', 'last_name', 'student_id', 'is_staff', 'is_superuser']

class CourseAdmin(admin.ModelAdmin):
    list_display = ['course_id', 'course_name', 'course_description']

class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ['student', 'course']

class FileInline(admin.TabularInline):  
    model = File
    extra = 1

class LessonInline(admin.TabularInline): 
    model = Lesson
    extra = 1

class ModuleAdmin(admin.ModelAdmin):
    list_display = ['module_id', 'course', 'week', 'module_description']
    inlines = [FileInline, LessonInline ]

class FileAdmin(admin.ModelAdmin):
    list_display = ['file_id', 'module_id', 'module_course', 'module_week', 'name', 'file_type', 'file']

    def module_id(self, obj):
        return obj.module.module_id

    def module_course(self, obj):
        return obj.module.course

    def module_week(self, obj):
        return obj.module.week

    module_id.admin_order_field = 'module__module_id'
    module_course.admin_order_field = 'module__course'
    module_week.admin_order_field = 'module__week'


class LessonAdmin(admin.ModelAdmin):
    list_display = ['lesson_id', 'module', 'lesson_name', 'lesson_file_type']


    def module_id(self, obj):
        return obj.module.module_id

    def module_course(self, obj):
        return obj.module.course

    def module_week(self, obj):
        return obj.module.week

    module_id.admin_order_field = 'module__module_id'
    module_course.admin_order_field = 'module__course'
    module_week.admin_order_field = 'module__week'

# Register models with custom admin classes
admin.site.register(Student, StudentAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Enrollment, EnrollmentAdmin)
admin.site.register(Module, ModuleAdmin)
admin.site.register(File, FileAdmin)
admin.site.register(Lesson, LessonAdmin)