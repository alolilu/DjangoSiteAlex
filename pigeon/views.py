from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import NewPigeon

# Create your views here.

@login_required(login_url='login')
def pigeon(request):
    return render(request, 'pigeon/nos_pigeons.html')

def ajout_pigeon(request):
    form = NewPigeon(request.POST or None)
    if request.method == 'POST':
        form.save() 
        

    context = {'form': form}

    return render(request, 'pigeon/ajt_pigeon.html', context)