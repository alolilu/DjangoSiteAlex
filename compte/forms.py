from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.models import User
from django import forms
from compte.models import Account

class CreerUtilisateur(UserCreationForm):
    class Meta:
        model = Account
        fields=['username', 'email', 'password1', 'password2']