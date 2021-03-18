from .models import NewPigeon

class pigeon(ModelForm):
    class Meta:
        model = NewPigeon
        fields = ['nom_pigeon', 'des_pigeon', 'img_pigeon', 'prix_pigeon']