from .models import NewPigeon

class pigeon(ModelForm):
    class Meta:
        model = NewPigeon
        fields = ['__all__']