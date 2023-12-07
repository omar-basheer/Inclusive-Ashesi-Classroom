from django.urls import path
from .views import GetModulesView, GetStudentInfoView, RegisterStudentView, LoginStudentView, DeleteStudentView, GetStudentCoursesView, GetCourseDetailsView

urlpatterns = [
    path('students/signup/', RegisterStudentView.as_view(), name='signup'),
    path('students/login/', LoginStudentView.as_view(), name='login'),
    path('students/get/<str:student_id>/', GetStudentInfoView.as_view(), name='get_student'),
    path('students/delete/<str:student_id>/', DeleteStudentView.as_view(), name='delete'),
    path('students/courses/<str:student_id>/', GetStudentCoursesView.as_view(), name='get'),
    path('courses/<str:course_id>/', GetCourseDetailsView.as_view(), name='get'),
    path('courses/<str:course_id>/modules/', GetModulesView.as_view(), name='get'),
]