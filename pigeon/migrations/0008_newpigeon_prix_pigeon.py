# Generated by Django 3.1.6 on 2021-03-16 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pigeon', '0007_auto_20210316_1510'),
    ]

    operations = [
        migrations.AddField(
            model_name='newpigeon',
            name='prix_pigeon',
            field=models.FloatField(default=30, max_length=30),
            preserve_default=False,
        ),
    ]
