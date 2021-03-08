from django.urls import path
from . import views


urlpatterns = [
    path('inscription', views.inscriptionPage, name='insciption'),
    path('login', views.loginPage, name='login'),
    path('quitter', views.loginPage, name='quitter'),
]