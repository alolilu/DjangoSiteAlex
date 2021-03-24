# Generated by Django 3.1.6 on 2021-03-24 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NewDossier',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('loca_sont_dans_les_lieux', models.CharField(default=0, max_length=50)),
                ('loca_sont_pas_dans_les_lieux', models.CharField(default=0, max_length=50)),
                ('oui_incident_dernier_mois', models.CharField(default=0, max_length=50)),
                ('non_incident_dernier_mois', models.CharField(default=0, max_length=50)),
                ('loca_dans_les_lieux_depuis', models.CharField(default=0, max_length=50)),
                ('statut_locataire', models.CharField(default=0, max_length=50)),
                ('statut_garant_1', models.CharField(default=0, max_length=50)),
                ('anciennete', models.CharField(default=0, max_length=50)),
                ('date_fin_contrat', models.DateField(default=0, max_length=50)),
                ('statut_locataire2', models.CharField(default=0, max_length=50)),
                ('statut_garant_2', models.CharField(default=0, max_length=50)),
                ('revenu_garant2', models.DecimalField(decimal_places=7, default=0, max_digits=15)),
                ('anciennete2', models.CharField(default=0, max_length=50)),
                ('date_fin_contrat2', models.DateField(default=0, max_length=50)),
                ('statut_locataire3', models.CharField(default=0, max_length=50)),
                ('revenus_du_locataire_3', models.DecimalField(decimal_places=7, default=0, max_digits=15)),
                ('statut_garant_3', models.CharField(default=0, max_length=50)),
                ('revenu_garant3', models.DecimalField(decimal_places=7, default=0, max_digits=15)),
                ('anciennete3', models.CharField(default=0, max_length=50)),
                ('date_fin_contrat3', models.DateField(default=0, max_length=50)),
                ('statut_locataire4', models.CharField(default=0, max_length=50)),
                ('revenus_du_locataire_4', models.DecimalField(decimal_places=7, default=0, max_digits=15)),
                ('statut_garant_4', models.CharField(default=0, max_length=50)),
                ('revenu_garant4', models.DecimalField(decimal_places=7, default=0, max_digits=15)),
                ('anciennete4', models.CharField(default=0, max_length=50)),
                ('date_fin_contrat4', models.DateField(default=0, max_length=50)),
                ('revenus_complement_foyer', models.DecimalField(decimal_places=7, default=0, max_digits=15)),
                ('loyer_mensuel', models.DecimalField(decimal_places=7, default=0, max_digits=15)),
                ('nom_1_loca', models.CharField(default=0, max_length=50)),
                ('email_1_loca', models.EmailField(default=0, max_length=50)),
                ('comment_loca_1', models.CharField(default=0, max_length=50)),
                ('file_justificatif', models.BooleanField(default=0, max_length=50)),
                ('type_fichier', models.CharField(default=0, max_length=50)),
                ('nom_1_loca2', models.CharField(default=0, max_length=50)),
                ('adresse_logement', models.CharField(default=0, max_length=50)),
                ('date_signature_bail', models.DateField(default=0, max_length=50)),
            ],
        ),
    ]
