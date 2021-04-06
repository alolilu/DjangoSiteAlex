from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import NewPigeon
from .models import *

# Create your views here.

@login_required(login_url='login')

def fiche_détailé(request):
    return render(request, 'pigeon/detail_pigeon.html')

def pigeon(request):
    pigeon=NewPigeon.objects.all()
    context={'pigeon':pigeon}

    return render(request, 'pigeon/nos_pigeons.html', context)

def ajout_pigeon(request):
    global contentOfFile

    if request.method == 'POST':
        nom_pigeon = request.POST.get('nom_pigeon')
        des_pigeon = request.POST.get('des_pigeon')
        prix_pigeon = request.POST.get('prix_pigeon')
        img_pigeon = request.FILES['img_pigeon']
        contentOfFile = img_pigeon.read()

        Pigeon = NewPigeon(nom_pigeon=nom_pigeon, des_pigeon=des_pigeon, prix_pigeon=prix_pigeon, img_pigeon=img_pigeon)
        Pigeon.save()
        print('pigeon bien rajouter')


    return render(request, 'pigeon/ajt_pigeon.html')