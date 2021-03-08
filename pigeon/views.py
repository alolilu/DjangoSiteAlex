from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required(login_url='login')
def pigeon(request):
    return render(request, 'pigeon/nos_pigeons.html')