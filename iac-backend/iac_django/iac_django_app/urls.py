from django.urls import path
from .views import RegisterStudentView, LoginStudentView, DeleteStudentView, GetStudentCoursesView, GetCourseDetailsView

urlpatterns = [
    path('students/signup/', RegisterStudentView.as_view(), name='signup'),
    path('students/login/', LoginStudentView.as_view(), name='login'),
    path('students/delete/<str:student_id>/', DeleteStudentView.as_view(), name='delete'),
    path('students/get/<str:student_id>/', GetStudentCoursesView.as_view(), name='get'),
    path('courses/get/<str:course_id>/', GetCourseDetailsView.as_view(), name='get'),
]