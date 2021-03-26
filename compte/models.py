from django.db import models
from django.contrib.auth.models import User
from DossierVerifier.models import NewDossier

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    NewDossier = models.ManyToManyField(NewDossier)
    bio = models.TextField()

    def __str__(self):
        return str(self.user)
