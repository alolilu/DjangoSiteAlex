# Generated by Django 3.1.6 on 2021-03-25 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DossierVerifier', '0008_auto_20210325_1636'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newdossier',
            name='revenus_du_locataire_1',
            field=models.FloatField(max_length=30, null=True),
        ),
    ]
