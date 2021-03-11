from django.db import models

# Create your models here.


class File(models.Model):
    f_name = models.CharField(max_length=30)
    s_name = models.CharField(max_length=30)
    mail = models.CharField(max_length=30)
    File = models.FileField(blank=True)


