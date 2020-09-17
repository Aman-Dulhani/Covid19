from django.urls import path, include
from .views import external_api_call

urlpatterns = [
    path('', external_api_call, name='apicall'),
]