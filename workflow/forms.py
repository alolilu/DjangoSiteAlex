from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import File
from django.forms import ModelForm


class NewFile(ModelForm):
    class Meta:
        model = File
        fields = ['s_name', 'f_name', 'mail']







