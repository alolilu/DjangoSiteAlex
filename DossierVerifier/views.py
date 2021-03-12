from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse
from . import views


# Create your views here.

def Home_Dossier(request):
    print('salut')
    return render(request, 'DossierVerifier/HomeDossier.html')
