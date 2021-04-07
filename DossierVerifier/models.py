from django.db import models
from compte.models import User
from django.conf import settings

# Create your models here.

class NewDossier(models.Model):
    User=models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=False)


    # les questions 

    loca_sont_dans_les_lieux = models.CharField(null=True, max_length=10)
    loca_sont_pas_dans_les_lieux = models.CharField(null=True, max_length=10)
    oui_incident_dernier_mois = models.CharField(null=True, max_length=10)
    non_incident_dernier_mois = models.CharField(null=True, max_length=10)
    loca_dans_les_lieux_depuis = models.CharField(max_length=10, null=True)

    # locataire number 1

    statut_locataire = models.CharField(max_length=50, null=True, blank=False)
    revenus_du_locataire_1 = models.FloatField(max_length=30, default=1)
    nom_1_loca = models.CharField(max_length=50, default=000, null=True, blank=True)
    email_1_loca = models.EmailField(max_length=50, default=000, null=True, blank=True)
    comment_loca_1 = models.CharField(max_length=50, default=000, null=True, blank=True)
    
    statut_garant_1 = models.CharField(max_length=50, default=000, null=True)
    revenu_garant1 = models.FloatField(max_length=30, default=0)
    anciennete = models.CharField(max_length=50, default=000, null=True)
    date_fin_contrat = models.CharField(max_length=50, default=000, null=True)

    # locataire number 2

    statut_locataire2 =  models.CharField(max_length=50, default=000, null=True)
    revenus_du_locataire_2 = models.FloatField(max_length=30, default=1)
    nom_1_loca_2 = models.CharField(max_length=50, default=000, null=True, blank=True)
    email_1_loca_2 = models.EmailField(max_length=50, default=000, null=True, blank=True)
    comment_loca_2 = models.CharField(max_length=50, default=000, null=True, blank=True)

    statut_garant_2 = models.CharField(max_length=50, default=000, null=True)
    revenu_garant2 = models.FloatField(max_length=30, default=1)
    anciennete2 = models.CharField(max_length=50, default=000, null=True)
    date_fin_contrat2 = models.CharField(max_length=50, default=00)

    # locataire number 3

    statut_locataire3 = models.CharField(max_length=50, default=000, null=True)
    revenus_du_locataire_3 = models.FloatField(max_length=30, default=1)
    nom_1_loca_3 = models.CharField(max_length=50, default=000, null=True, blank=True)
    email_1_loca_3 = models.EmailField(max_length=50, default=000, null=True, blank=True)
    comment_loca_3 = models.CharField(max_length=50, default=000, null=True, blank=True)

    statut_garant_3 = models.CharField(max_length=50, default=000, null=True)
    revenu_garant3 = models.FloatField(max_length=30, default=1)
    anciennete3 = models.CharField(max_length=50, default=000, null=True)
    date_fin_contrat3 = models.CharField(max_length=50, default=000, null=True)

    # locataire number 4

    statut_locataire4 = models.CharField(max_length=50, default=000, null=True)
    revenus_du_locataire_4 = models.FloatField(max_length=30, default=1)
    nom_1_loca_4 = models.CharField(max_length=50, default=000, null=True, blank=True)
    email_1_loca_4 = models.EmailField(max_length=50, default=000, null=True, blank=True)
    comment_loca_4 = models.CharField(max_length=50, default=000, null=True, blank=True)

    statut_garant_4 = models.CharField(max_length=50, default=000, null=True)
    revenu_garant4 = models.FloatField(max_length=30, default=1)
    anciennete4 = models.CharField(max_length=50, default=000, null=True)
    date_fin_contrat4 = models.CharField(max_length=50, default=000, null=True)

    # information complémentaire

    revenus_complement_foyer = models.FloatField(max_length=30, blank=True, default=1)
    loyer_mensuel = models.FloatField(max_length=30, blank=True, default=1)
    
    # file_justificatif = models.BooleanField(max_length=50, default=000)
    # type_fichier = models.CharField(max_length=50, default=000)
    votre_nom = models.CharField(max_length=50, default=000, null=True, blank=True)
    adresse_logement = models.CharField(max_length=50, default=000, null=True, blank=True)
    date_signature_bail = models.DateField(max_length=50, default=000, null=True, blank=True)


    def __str__(self):
        return self.votre_nom

  
