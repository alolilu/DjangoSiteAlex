from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# Create your views here.

@login_required(login_url='login')
def accueil(request):
    return render(request, 'accueil/index.html')
