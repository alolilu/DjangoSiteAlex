from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Files
from django.forms import ModelForm

class NewFile(ModelForm):
    class Meta:
        model = Files
        fields = '__all__'




