from django.contrib.auth.forms import UserCreationForm
from compte.models import User
from .models import File
from django.forms import ModelForm

class NewDossier(ModelForm):
    class Meta:
        model = NewDossier
        fields = '__all__'