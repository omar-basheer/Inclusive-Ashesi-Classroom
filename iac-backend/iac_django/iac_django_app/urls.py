from django.urls import path
from .views import RegisterStudentView, LoginStudentView, DeleteStudentView

urlpatterns = [
    # path('api-token-auth/', CustomObtainAuthToken.as_view(), name='api_token_auth'),
    # path('students/', StudentView.as_view(), name='get'),
    path('students/signup/', RegisterStudentView.as_view(), name='signup'),
    path('students/login/', LoginStudentView.as_view(), name='login'),
    path('students/delete/<str:student_id>/', DeleteStudentView.as_view(), name='delete'),
]