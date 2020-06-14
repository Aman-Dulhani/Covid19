from django.contrib import admin
from django.urls import path, include,re_path
from django.views.generic import TemplateView


urlpatterns = [
    path('api/', include('covid19.api.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    re_path('.*', TemplateView.as_view(template_name='index.html'))
]
