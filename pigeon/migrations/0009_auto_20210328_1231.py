# Generated by Django 3.1.6 on 2021-03-28 10:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pigeon', '0008_newpigeon_prix_pigeon'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newpigeon',
            name='img_pigeon',
            field=models.FileField(upload_to='static/fichier'),
        ),
    ]