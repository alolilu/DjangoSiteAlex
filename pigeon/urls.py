from django.urls import path
from . import views


urlpatterns = [
    path('', views.pigeon, name='pigeon'),
    path('ajout', views.ajout_pigeon, name='ajout_pigeon'),
    path('fiche_détailé', views.fiche_détailé, name='fiche_détaillé'),
]