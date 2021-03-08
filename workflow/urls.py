from django.urls import path
from . import views


urlpatterns = [
    path('workflow', views.workflow, name='workflow'),
    path('workrep', views.workrep, name='workrep'),
]