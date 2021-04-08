from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.models import User
from django import forms
from compte.models import User

class CreerUtilisateur(UserCreationForm):
    class Meta:
        model = User
        fields=['username', 'email', 'password1', 'password2']