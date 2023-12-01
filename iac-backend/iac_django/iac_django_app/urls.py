from django.urls import path
from .views import StudentView

urlpatterns = [
    path('students/', StudentView.as_view(), name='get'),
    path('students/signup/', StudentView.as_view(), name='signup'),
    path('students/login/', StudentView.as_view(), name='login'),
    
]