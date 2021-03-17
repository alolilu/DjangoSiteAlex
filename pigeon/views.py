from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import NewPigeon
from .models import *

# Create your views here.

@login_required(login_url='login')
def pigeon(request):
    return render(request, 'pigeon/nos_pigeons.html')

def ajout_pigeon(request):
    pigeon = NewPigeon.objects.all()
    

    form = NewPigeon(request.POST or None)
    if request.method == 'POST':
        form = NewPigeon(request.POST or None)
        if request.method == 'POST':
            form.save()

    # if request.method == 'POST':
    #     nom_pigeon = request.POST.get('nom_pigeon')
    #     des_pigeon = request.POST.get('des_pigeon')
    #     img_pigeon = request.POST.get('img_pigeon')


    return render(request, 'pigeon/ajt_pigeon.html', {'pigeon':pigeon})