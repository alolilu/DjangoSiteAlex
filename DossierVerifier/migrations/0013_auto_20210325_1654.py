# Generated by Django 3.1.6 on 2021-03-25 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DossierVerifier', '0012_auto_20210325_1649'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newdossier',
            name='revenus_du_locataire_1',
            field=models.FloatField(blank=True, default=0, max_length=30),
            preserve_default=False,
        ),
    ]