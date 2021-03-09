from django.db import models

# Create your models here.

class Files(models.Model):
    f_name = models.CharField(max_length=30)
    s_name = models.CharField(max_length=30)
    mail = models.CharField(max_length=30)
    File = models.FileField()
