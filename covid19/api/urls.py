from django.urls import path, include
from .views import Covid19ListView

urlpatterns = [
    path('', Covid19ListView.as_view()),
]