# Generated by Django 3.1.6 on 2021-03-25 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DossierVerifier', '0017_auto_20210325_1731'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newdossier',
            name='revenus_du_locataire_1',
            field=models.FloatField(blank=True, default=1, max_length=30, null=True),
        ),
    ]
