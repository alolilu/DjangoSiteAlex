from django.db import models


# Create your models here.

class NewPigeon(models.Model):
    nom_pigeon = models.CharField(max_length=30)
    des_pigeon = models.CharField(max_length=300)
    img_pigeon = models.ImageField(max_length=30)
    prix_pigeon = models.FloatField(max_length=30)