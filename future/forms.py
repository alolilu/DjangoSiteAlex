from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import Pigeon
from django import forms

class CreerPigeon(UserCreationForm):
    class Meta:
        model=Pigeon
        fields=['pigeon_title', 'pigeon_description', 'pigeon_img',]