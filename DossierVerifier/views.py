from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse
from .models import NewDossier


# Create your views here.

def Home_Dossier(request):
    # form = NewDossier(request.POST or None)
    if request.method == 'POST':
        loca_sont_dans_les_lieux = request.POST.get('loca_sont_dans_les_lieux') 
        loca_sont_pas_dans_les_lieux = request.POST.get('loca_sont_pas_dans_les_lieux')
        oui_incident_dernier_mois = request.POST.get('oui_incident_dernier_mois')
        non_incident_dernier_mois = request.POST.get('non_incident_dernier_mois')
        loca_dans_les_lieux_depuis = request.POST.get('loca_dans_les_lieux_depuis')
        statut_locataire = request.POST.get('statut_locataire')
        revenus_du_locataire_1 = request.POST.get('revenus_du_locataire_1')
        statut_garant_1 = request.POST.get('statut_garant_1')
        revenu_garant1 = request.POST.get('revenu_garant1')
        anciennete = request.POST.get('anciennete')
        date_fin_contrat = request.POST.get('date_fin_contrat')
        statut_locataire2 = request.POST.get('statut_locataire')
        revenus_du_locataire_2 = request.POST.get('revenus_du_locataire_2')
        statut_garant_2 = request.POST.get('statut_garant_2')
        revenu_garant2 = request.POST.get('revenu_garant2')
        anciennete2 = request.POST.get('anciennete2')
        date_fin_contrat2 = request.POST.get('date_fin_contrat2')
        statut_locataire3 = request.POST.get('statut_locataire3')
        revenus_du_locataire_3 = request.POST.get('revenus_du_locataire_3')
        statut_garant_3 = request.POST.get('statut_garant_3')
        revenu_garant3 = request.POST.get('revenu_garant3')
        anciennete3 = request.POST.get('anciennete3')
        date_fin_contrat3 = request.POST.get('date_fin_contrat3')
        statut_locataire4 = request.POST.get('statut_locataire4')
        revenus_du_locataire_4 = request.POST.get('revenus_du_locataire_4')
        statut_garant_4 = request.POST.get('statut_garant_4')
        revenu_garant4 = request.POST.get('revenu_garant4')
        anciennete4 = request.POST.get('anciennete4')
        date_fin_contrat4 = request.POST.get('date_fin_contrat4')
        revenus_complement_foyer = request.POST.get('revenus_complement_foyer')
        loyer_mensuel = request.POST.get('loyer_mensuel')
        nom_1_loca = request.POST.get('nom_1_loca')
        email_1_loca = request.POST.get('email_1_loca')
        comment_loca_1 = request.POST.get('comment_loca_1')

        nom_1_loca_2 = request.POST.get('nom_1_loca_2')
        email_1_loca_2 = request.POST.get('email_1_loca_2')
        comment_loca_2 = request.POST.get('comment_loca_2')
        nom_1_loca_3 = request.POST.get('nom_1_loca_3')
        email_1_loca_3 = request.POST.get('email_1_loca_3')
        comment_loca_3 = request.POST.get('comment_loca_3')
        nom_1_loca_4 = request.POST.get('nom_1_loca_4')
        email_1_loca_4 = request.POST.get('email_1_loca_4')
        comment_loca_4 = request.POST.get('comment_loca_4')
        votre_nom = request.POST.get('votre_nom')
        adresse_logement = request.POST.get('adresse_logement')
        date_signature_bail = request.POST.get('date_signature_bail')

        dossier = NewDossier(loca_sont_dans_les_lieux=loca_sont_dans_les_lieux, loca_sont_pas_dans_les_lieux=loca_sont_pas_dans_les_lieux, oui_incident_dernier_mois=oui_incident_dernier_mois,
        non_incident_dernier_mois=non_incident_dernier_mois, loca_dans_les_lieux_depuis=loca_dans_les_lieux_depuis, statut_locataire=statut_locataire, revenus_du_locataire_1=revenus_du_locataire_1,
        statut_garant_1=statut_garant_1, revenu_garant1=revenu_garant1, anciennete=anciennete,date_fin_contrat=date_fin_contrat, statut_locataire2=statut_locataire2, revenus_du_locataire_2=revenus_du_locataire_2,
        statut_garant_2=statut_garant_2, revenu_garant2=revenu_garant2,  anciennete2=anciennete2, date_fin_contrat2=date_fin_contrat2, statut_locataire3=statut_locataire3, revenus_du_locataire_3=revenus_du_locataire_3,
        statut_garant_3=statut_garant_3, revenu_garant3=revenu_garant3,  anciennete3=anciennete3, date_fin_contrat3=date_fin_contrat3, statut_locataire4=statut_locataire4, revenus_du_locataire_4=revenus_du_locataire_4,
        statut_garant_4=statut_garant_4, revenu_garant4=revenu_garant4, anciennete4=anciennete4, date_fin_contrat4=date_fin_contrat4, revenus_complement_foyer=revenus_complement_foyer, loyer_mensuel=loyer_mensuel,
        nom_1_loca=nom_1_loca, email_1_loca=email_1_loca, comment_loca_1=comment_loca_1, votre_nom=votre_nom, adresse_logement=adresse_logement, date_signature_bail=date_signature_bail, nom_1_loca_2=nom_1_loca_2,
        email_1_loca_2=email_1_loca_2, comment_loca_2=comment_loca_2, nom_1_loca_3=nom_1_loca_3, email_1_loca_3=email_1_loca_3, comment_loca_3=comment_loca_3, nom_1_loca_4=nom_1_loca_4, email_1_loca_4=email_1_loca_4,
        comment_loca_4=comment_loca_4)
        dossier.save()
        print('the data has been written to the dbb')
        
        
        
        
    # context = {'form': form}

    return render(request, 'DossierVerifier/HomeDossier.html')

