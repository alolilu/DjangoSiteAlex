from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('dossier', views.Home_Dossier, name='Dossier'),
]
