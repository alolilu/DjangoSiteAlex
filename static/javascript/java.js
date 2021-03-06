const dossier = `<form style="width: 100%;" class="dossier_formulaire" enctype="multipart/form-data" method="POST">
<div class="page">
    <div class="container-fluid">
        <div id="page1">
            <h4>Les locataires sont-ils dans les lieux ?</h4>
            <div class="oui_div" >
                <div class="col">
                    <i class="fas fa-check" id="first_icone"></i>
                    <input type="button" id="oui" class="oui_non" value="Oui" name="loca_sont_dans_les_lieux">
                </div>
                <div class="col">
                    <i class="fas fa-check" id="second_icone"></i>
                    <input type="button" id="non" class="oui_non" value="Non" name="loca_sont_pas_dans_les_lieux">
                </div>
            </div>
            <div class="autre_question">
                <h4>Avez-vous eu un incident de paiement sur les 6 derniers mois ?</h4>
                <div class="row autre_bouton">
                    <div class="col">
                        <i class="fas fa-check" id="third_icone"></i>
                        <input type="button" id="oui1" class="oui_non1" value="Oui" name="oui_incident_dernier_mois">
                    </div>
                    <!-- </button> -->
                        <div class="col">
                            <i class="fas fa-check" id="fourth_icone"></i>
                            <input type="button" id="non1" class="oui_non1" value="Non" name="non_incident_dernier_mois">
                        </div>
                    <!-- </button> -->
                </div>
            </div>
            <div class="autre_question1">
                <p class="pas_possible">Il n'est pas possible de vous assurer si vous avez eu des incidents de paiements sur les 6 derniers mois.</p>
            </div>
            <div class="autre_question2" id="autre_question2">
                <label for="loca_jour"></label><h4>le locataire est dans les lieux depuis</h4>
                <select class="select_jour" name="loca_dans_les_lieux_depuis" onchange="showMe(this.value);">
                    <option selected="true" style='display: none'>--</option>
                    <option value="14_jours">moins de 14 jours</option>
                    <option value="14jours_6mois">entre 14 jours et 6 mois</option>
                    <option value="plus_de_6mois">plus de 6 mois</option>
                </select>
            </div>
        </div>
        <div class="container-fluid locataire">
            <div class="row first_loca">
                <h4>Locataire 1</h4>
            </div>
            <div class="row les_statuts">
                <label for="Statut du locataire" class="label_satut">Statut du locataire</label>
                <select name="statut_locataire" id="" class="votre_statut_first" onchange="showMessage(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="CDI hors p??riode d'essai">CDI hors p??riode d'essai</option>
                    <option value="CDI en p??riode d'essaie">CDI en p??riode d'essaie</option>
                    <option value="??tudiant, alternant">??tudiant, alternant</option>
                    <option value="Fonctionnaire">Fonctionnaire</option>
                    <option value="Profession lib??rale">Profession lib??rale</option>
                    <option value="Ind??pendant">Ind??pendant</option>
                    <option value="Salari?? en CDD">Salari?? en CDD</option>
                    <option value="Int??rimaire">Int??rimaire</option>
                    <option value="intermitent du spectacle">intermitent du spectacle</option>
                    <option value="Retrait??">Retrait??</option>
                    <option value="Sans emploie">Sans emploie</option> 
                </select>
            </div>
            <div class="row" id="loca_question_4">
                <label for="Revenus du locataire" class="label_satut">Revenus du locataire</label>
                <input type="number" class="votre_statut" name="revenus_du_locataire_1" value="0">
                <span type="" class="votre_statut1">???/mois</span>
            </div>
            <div class="row" id="loca_question_1">
                <h5 style="margin-left: 120px;">Garant</h5>
                <label for="statut du garant" class="label_satut">statut du garant</label>
                <select name="statut_garant_1" id="" class="votre_statut" onchange="showMessage1(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="CDI hors p??riode d'essai">CDI hors p??riode d'essai</option>
                    <option value="Fonctionnaire">Fonctionnaire</option>
                    <option value="Profession lib??rale">Profession lib??rale</option>
                    <option value="Ind??pendant">Ind??pendant</option>
                    <option value="Salari?? en CDD">Salari?? en CDD</option>
                    <option value="Retrait??">Retrait??</option>
                </select>
            </div>
            <div class="row" id="loca_question_7">
                <label for="Revenus du locataire" class="label_satut">Revenus du garant</label>
                <input type="number" class="votre_statut" name="revenu_garant1" value="0">
                <button class="votre_statut1">???/mois</button>
            </div>
            <div class="row" id="loca_question_5">
                <label for="Anciennete" class="label_satut">Anciennet?? de l'activit??</label>
                <select name="anciennete" id="" class="votre_statut" onchange="showMessage(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="Inf??rieure a 2 ans">Inf??rieure a 2 ans</option>
                    <option value="Sup??rieure a 2 ans">Sup??rieure a 2 ans</option>
                </select>
            </div>
            <div class="row" id="loca_question_6">
                <label for="fin de contrat" class="label_satut">Date de fin de contrat</label>
                <select name="date_fin_contrat" id="" class="votre_statut" onchange="showMessage(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="Dans moins de 8 mois">Dans moins de 8 mois</option>
                    <option value="Dans plus de 8 mois">Dans plus de 8 mois</option>
                </select>
            </div>
        </div>

        <div class="container-fluid" id="ajout_loca1">
            <div class="row first_loca">
                <h4>Locataire 2</h4>
            </div>
            <div class="row les_statuts">
                <label for="Statut du locataire" class="label_satut">Statut du locataire</label>
                <select name="statut_locataire2" id="" class="votre_statut_first" onchange="showMessageLoca2(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="1CDI hors p??riode d'essai">CDI hors p??riode d'essai</option>
                    <option value="1CDI en p??riode d'essaie">CDI en p??riode d'essaie</option>
                    <option value="1??tudiant, alternant">??tudiant, alternant</option>
                    <option value="1Fonctionnaire">Fonctionnaire</option>
                    <option value="1Profession lib??rale">Profession lib??rale</option>
                    <option value="1Ind??pendant">Ind??pendant</option>
                    <option value="1Salari?? en CDD">Salari?? en CDD</option>
                    <option value="1Int??rimaire">Int??rimaire</option>
                    <option value="1intermitent du spectacle">intermitent du spectacle</option>
                    <option value="1Retrait??">Retrait??</option>
                    <option value="1Sans emploie">Sans emploie</option> 
                </select>
            </div>
            <div class="row" id="loca_question_44">
                <label for="Revenus du locataire" class="label_satut">Revenus du locataire</label>
                <input type="number" class="votre_statut" name="revenus_du_locataire_2" value="0">
                <button class="votre_statut1">???/mois</button>
            </div>
            <div class="row" id="loca_question_11">
                <h5 style="margin-left: 120px;">Garant 2</h5>
                <label for="statut du garant" class="label_satut">statut du garant</label>
                <select name="statut_garant_2" id="" class="votre_statut" onchange="showMessage1Loca2(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="1CDI hors p??riode d'essai">CDI hors p??riode d'essai</option>
                    <option value="1Fonctionnaire">Fonctionnaire</option>
                    <option value="1Profession lib??rale">Profession lib??rale</option>
                    <option value="1Ind??pendant">Ind??pendant</option>
                    <option value="1Salari?? en CDD">Salari?? en CDD</option>
                    <option value="1Retrait??">Retrait??</option>
                </select>
            </div>
            <div class="row" id="loca_question_77">
                <label for="Revenus du locataire" class="label_satut">Revenus du garant</label>
                <input type="number" name="revenu_garant2" class="votre_statut" value="0">
                <button class="votre_statut1">???/mois</button>
            </div>
            <div class="row" id="loca_question_55">
                <label for="Anciennete" class="label_satut">Anciennet?? de l'activit??</label>
                <select name="anciennete2" id="" class="votre_statut">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="Inf??rieure a 2 ans">Inf??rieure a 2 ans</option>
                    <option value="Sup??rieure a 2 ans">Sup??rieure a 2 ans</option>
                </select>
            </div>
            <div class="row" id="loca_question_66">
                <label for="fin de contrat" class="label_satut">Date de fin de contrat</label>
                <select name="date_fin_contrat2" id="" class="votre_statut">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="Dans moins de 8 mois">Dans moins de 8 mois</option>
                    <option value="Dans plus de 8 mois">Dans plus de 8 mois</option>
                </select>
            </div>
        </div>

        <div class="container-fluid" id="ajout_loca2">
            <div class="row first_loca">
                <h4>Locataire 3</h4>
            </div>
            <div class="row les_statuts">
                <label for="Statut du locataire" class="label_satut">Statut du locataire</label>
                <select name="statut_locataire3" id="" class="votre_statut_first" onchange="showMessageLoca3(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="2CDI hors p??riode d'essai">CDI hors p??riode d'essai</option>
                    <option value="2CDI en p??riode d'essaie">CDI en p??riode d'essaie</option>
                    <option value="2??tudiant, alternant">??tudiant, alternant</option>
                    <option value="2Fonctionnaire">Fonctionnaire</option>
                    <option value="2Profession lib??rale">Profession lib??rale</option>
                    <option value="2Ind??pendant">Ind??pendant</option>
                    <option value="2Salari?? en CDD">Salari?? en CDD</option>
                    <option value="2Int??rimaire">Int??rimaire</option>
                    <option value="2intermitent du spectacle">intermitent du spectacle</option>
                    <option value="2Retrait??">Retrait??</option>
                    <option value="2Sans emploie">Sans emploie</option> 
                </select>
            </div>
            <div class="row" id="loca_question_444">
                <label for="Revenus du locataire" class="label_satut">Revenus du locataire</label>
                <input type="number" class="votre_statut" name="revenus_du_locataire_3" value="0">
                <button class="votre_statut1">???/mois</button>
            </div>
            <div class="row" id="loca_question_111">
                <h5 style="margin-left: 120px;">Garant 3</h5>
                <label for="statut du garant" class="label_satut">statut du garant</label>
                <select name="statut_garant_3" id="" class="votre_statut" onchange="showMessage1Loca3(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="2CDI hors p??riode d'essai">CDI hors p??riode d'essai</option>
                    <option value="2Fonctionnaire">Fonctionnaire</option>
                    <option value="2Profession lib??rale">Profession lib??rale</option>
                    <option value="2Ind??pendant">Ind??pendant</option>
                    <option value="2Salari?? en CDD">Salari?? en CDD</option>
                    <option value="2Retrait??">Retrait??</option>
                </select>
            </div>
            <div class="row" id="loca_question_777">
                <label for="Revenus du locataire" class="label_satut">Revenus du garant</label>
                <input type="number" class="votre_statut" name="revenu_garant3" value="0">
                <button class="votre_statut1">???/mois</button>
            </div>
            <div class="row" id="loca_question_555">
                <label for="Anciennete" class="label_satut">Anciennet?? de l'activit??</label>
                <select name="anciennete3" id="" class="votre_statut" onchange="showMessage(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="Inf??rieure a 2 ans">Inf??rieure a 2 ans</option>
                    <option value="Sup??rieure a 2 ans">Sup??rieure a 2 ans</option>
                </select>
            </div>
            <div class="row" id="loca_question_666">
                <label for="fin de contrat" class="label_satut">Date de fin de contrat</label>
                <select name="date_fin_contrat3" id="" class="votre_statut" onchange="showMessage(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="Dans moins de 8 mois">Dans moins de 8 mois</option>
                    <option value="Dans plus de 8 mois">Dans plus de 8 mois</option>
                </select>
            </div>
        </div>

        <div class="container-fluid" id="ajout_loca3">
            <div class="row first_loca">
                <h4>Locataire 4</h4>
            </div>
            <div class="row les_statuts">
                <label for="Statut du locataire" class="label_satut">Statut du locataire</label>
                <select name="statut_locataire4" id="" class="votre_statut_first" onchange="showMessageLoca4(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="3CDI hors p??riode d'essai">CDI hors p??riode d'essai</option>
                    <option value="3CDI en p??riode d'essaie">CDI en p??riode d'essaie</option>
                    <option value="3??tudiant, alternant">??tudiant, alternant</option>
                    <option value="3Fonctionnaire">Fonctionnaire</option>
                    <option value="3Profession lib??rale">Profession lib??rale</option>
                    <option value="3Ind??pendant">Ind??pendant</option>
                    <option value="3Salari?? en CDD">Salari?? en CDD</option>
                    <option value="3Int??rimaire">Int??rimaire</option>
                    <option value="3intermitent du spectacle">intermitent du spectacle</option>
                    <option value="3Retrait??">Retrait??</option>
                    <option value="3Sans emploie">Sans emploie</option> 
                </select>
            </div>
            <div class="row" id="loca_question_4444">
                <label for="Revenus du locataire" class="label_satut">Revenus du locataire</label>
                <input type="number" class="votre_statut" name="revenus_du_locataire_4" value="0">
                <button class="votre_statut1">???/mois</button>
            </div>
            <div class="row" id="loca_question_1111">
                <h5 style="margin-left: 120px;">Garant 4</h5>
                <label for="statut du garant" class="label_satut">statut du garant</label>
                <select name="statut_garant_4" id="" class="votre_statut" onchange="showMessage1Loca4(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="3CDI hors p??riode d'essai">CDI hors p??riode d'essai</option>
                    <option value="3Fonctionnaire">Fonctionnaire</option>
                    <option value="3Profession lib??rale">Profession lib??rale</option>
                    <option value="3Ind??pendant">Ind??pendant</option>
                    <option value="3Salari?? en CDD">Salari?? en CDD</option>
                    <option value="3Retrait??">Retrait??</option>
                </select>
            </div>
            <div class="row" id="loca_question_7777">
                <label for="Revenus du locataire" class="label_satut">Revenus du garant</label>
                <input type="number" class="votre_statut" name="revenu_garant4" value="0">
                <button class="votre_statut1">???/mois</button>
            </div>
            <div class="row" id="loca_question_5555">
                <label for="Anciennete" class="label_satut">Anciennet?? de l'activit??</label>
                <select name="anciennete4" id="" class="votre_statut" onchange="showMessage(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="Inf??rieure a 2 ans">Inf??rieure a 2 ans</option>
                    <option value="Sup??rieure a 2 ans">Sup??rieure a 2 ans</option>
                </select>
            </div>
            <div class="row" id="loca_question_6666">
                <label for="fin de contrat" class="label_satut">Date de fin de contrat</label>
                <select name="date_fin_contrat4" id="" class="votre_statut" onchange="showMessage(this.value);">
                    <option selected="true" style='display: none'>--votre statut--</option>
                    <option value="Dans moins de 8 mois">Dans moins de 8 mois</option>
                    <option value="Dans plus de 8 mois">Dans plus de 8 mois</option>
                </select>
            </div>
        </div>

        <div class="container-lg" id="locataire1">
            <div class="row" id="loca_question_2">
                <label for="Revenus compl??mentaires du foyer" class="label_satut">Revenus compl??mentaires du foyer :</label>
                <input type="number" class="votre_statut" value="0" name="revenus_complement_foyer">
                <button class="votre_statut1">???/mois</button>
            </div>
            <div class="row" id="loca_question_3">
                <label for="Loyer + charges" class="label_satut">Loyer + charges :</label>
                <input type="number" class="votre_statut" value="0" placeholder="Loyer mensuel charges comprises" name="loyer_mensuel">
                <button class="votre_statut1">???/mois</button>
            </div>
        </div>
        <div class="container-fluid" id="lancer_test">
            <div class="row">
                <input type="button" id="ajout_locataire" value="+ Ajouter un locataire">
                <input type="button" id="ajout_locataire1" value="+ Ajouter un 3eme locataire">
                <input type="button" id="ajout_locataire2" value="+ Ajouter un 4 eme locataire">
                <input type="button" id="supp_locataire" value="- Supprimer le locataire">
                <input type="button" id="supp_locataire1" value="- Supprimer le locataire 3">
                <input type="button" id="supp_locataire2" value="- Supprimer le locataire 4">
            </div>
            <div class="row">
                <input type="button" id="lancer_le_test" value="Lancer le test">
            </div>  
        </div>                                                          
    </div>
</div>

<div class="page">
    <div class="container-fluid justi_loca_1" id="page2">
        <div class="row deuxieme_page">
            <h4>Justificatifs locataire 1</h4>
            <!-- <p>CDI hors p??riode d'essaie</p> -->
        </div>
        <div class="row">
            <div class="col-6">
                <div class="row form1">
                    <label for="Nom_locataire" class="label_form">Nom du locataire :</label>
                    <input type="text" class="form_input" placeholder="optionnel" name="nom_1_loca">
                </div>
                <div class="row form1">
                    <label for="Nom_locataire" class="label_form">Email du locataire :</label>
                    <input type="text" class="form_input" placeholder="optionnel" name="email_1_loca">
                </div>
            </div>
            <div class="col-6">
                <div class="row form1">
                    <label for="Commentaires" class="label_form1">Commentaires :</label>
                    <input type="textarea" name="comment_loca_1" class="form_input1" size="40">
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 justi">
                    <h6>Justificatifs ?? fournir</h6>
                    <ul class="justi_fournir">
                        <li><input type="checkbox" class="a_cocher" name="piece_identite_1">Pi??ce d'identit??</li>
                        <li><input type="checkbox" class="a_cocher" name="contrat_travail_1">Contrat de travail ou attestation employeur</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_fev_1">Bulletin de salaire f??vrier</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_janv_1">Bulletin de salaire janvier</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_dec_1">Bulletin de salaire d??cembre</li>
                        <li><input type="checkbox" class="a_cocher" name="dernier_avis_impot_1">Dernier avis d'imp??ts</li>
                        <li><input type="checkbox" class="a_cocher" name="3_derniere_quittances_de_loyer_1">Trois derni??res quittances de loyer ou attestation d'h??bergement</li>
                    </ul>
                </div>
                <div class="col-6 justi">
                    <h6>Justificatifs optionnels</h6>
                    <ul class="justi_fournir">
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_nov_1">Bulletin de salaire novembre</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid" style="margin-top: 25px;">
            <div class="row">
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="file">1 : Je choisis le fichier</label>
                    </div>
                    <div class="row">
                        <input type="file" style="width: 115px; margin-left: 10px;" name="file_justificatif">
                    </div>
                </div>
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="type_file">2 : Ce fichier contient</label>
                    </div>
                    <div class="row">
                        <select name="type_fichier" id="">
                            <option selected="true" style='display: none'>--</option>
                            <option value="Pi??ce d'identit??">Pi??ce d'identit??</option>
                            <option value="Contrat de travail">Contrat de travail</option>
                            <option value="Attestation employeur">Attestation employeur</option>
                            <option value="Bulletin de salaire f??vr">Bulletin de salaire f??vr</option>
                            <option value="Bulletin de salaire janv">Bulletin de salaire janv</option>
                            <option value="Bulletin de salaire d??c">Bulletin de salaire d??c</option>
                            <option value="Dernier avis d'impots">Dernier avis d'impots</option>
                            <option value="Trois derni??res quittances">Trois derni??res quittances</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="ajouter_file">3 : j'ajoute le fichier</label>
                    </div>
                    <div class="row">
                        <button style="background-color:  var(--main-bg-color);"><i class="fas fa-cloud-upload-alt">Ajouter</i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid justi_loca_2" id="page2">
        <div class="row deuxieme_page">
            <h4>Justificatifs locataire 2</h4>
            <!-- <p>CDI hors p??riode d'essaie</p> -->
        </div>
        <div class="row">
            <div class="col-6">
                <div class="row form1">
                    <label for="Nom_locataire" class="label_form">Nom du locataire :</label>
                    <input type="text" class="form_input" placeholder="optionnel" name="nom_1_loca_2">
                </div>
                <div class="row form1">
                    <label for="Nom_locataire" class="label_form">Email du locataire :</label>
                    <input type="text" class="form_input" placeholder="optionnel" name="email_1_loca_2">
                </div>
            </div>
            <div class="col-6">
                <div class="row form1">
                    <label for="Commentaires" class="label_form1">Commentaires :</label>
                    <input type="textarea" name="comment_loca_2" class="form_input1" size="40">
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 justi">
                    <h6>Justificatifs ?? fournir</h6>
                    <ul class="justi_fournir">
                        <li><input type="checkbox" class="a_cocher" name="piece_identite_2">Pi??ce d'identit??</li>
                        <li><input type="checkbox" class="a_cocher" name="contrat_travail_2">Contrat de travail ou attestation employeur</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_fev_2">Bulletin de salaire f??vrier</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_janv_2">Bulletin de salaire janvier</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_dec_2">Bulletin de salaire d??cembre</li>
                        <li><input type="checkbox" class="a_cocher" name="dernier_avis_impot_2">Dernier avis d'imp??ts</li>
                        <li><input type="checkbox" class="a_cocher" name="3_derniere_quittances_de_loyer_2">Trois derni??res quittances de loyer ou attestation d'h??bergement</li>
                    </ul>
                </div>
                <div class="col-6 justi">
                    <h6>Justificatifs optionnels</h6>
                    <ul class="justi_fournir">
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_nov_2">Bulletin de salaire novembre</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid" style="margin-top: 25px;">
            <div class="row">
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="file">1 : Je choisis le fichier</label>
                    </div>
                    <div class="row">
                        <input type="file" style="width: 115px; margin-left: 10px;" name="file_justificatif">
                    </div>
                </div>
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="type_file">2 : Ce fichier contient</label>
                    </div>
                    <div class="row">
                        <select name="type_fichier" id="">
                            <option selected="true" style='display: none'>--</option>
                            <option value="Pi??ce d'identit??">Pi??ce d'identit??</option>
                            <option value="Contrat de travail">Contrat de travail</option>
                            <option value="Attestation employeur">Attestation employeur</option>
                            <option value="Bulletin de salaire f??vr">Bulletin de salaire f??vr</option>
                            <option value="Bulletin de salaire janv">Bulletin de salaire janv</option>
                            <option value="Bulletin de salaire d??c">Bulletin de salaire d??c</option>
                            <option value="Dernier avis d'impots">Dernier avis d'impots</option>
                            <option value="Trois derni??res quittances">Trois derni??res quittances</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="ajouter_file">3 : j'ajoute le fichier</label>
                    </div>
                    <div class="row">
                        <button style="background-color:  var(--main-bg-color);"><i class="fas fa-cloud-upload-alt">Ajouter</i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid justi_loca_3" id="page2">
        <div class="row deuxieme_page">
            <h4>Justificatifs locataire 3</h4>
            <!-- <p>CDI hors p??riode d'essaie</p> -->
        </div>
        <div class="row">
            <div class="col-6">
                <div class="row form1">
                    <label for="Nom_locataire" class="label_form">Nom du locataire :</label>
                    <input type="text" class="form_input" placeholder="optionnel" name="nom_1_loca_3">
                </div>
                <div class="row form1">
                    <label for="Nom_locataire" class="label_form">Email du locataire :</label>
                    <input type="text" class="form_input" placeholder="optionnel" name="email_1_loca_3">
                </div>
            </div>
            <div class="col-6">
                <div class="row form1">
                    <label for="Commentaires" class="label_form1">Commentaires :</label>
                    <input type="textarea" name="comment_loca_3" class="form_input1" size="40">
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 justi">
                    <h6>Justificatifs ?? fournir</h6>
                    <ul class="justi_fournir">
                        <li><input type="checkbox" class="a_cocher" name="piece_identite_3">Pi??ce d'identit??</li>
                        <li><input type="checkbox" class="a_cocher" name="contrat_travail_3">Contrat de travail ou attestation employeur</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_fev_3">Bulletin de salaire f??vrier</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_janv_3">Bulletin de salaire janvier</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_dec_3">Bulletin de salaire d??cembre</li>
                        <li><input type="checkbox" class="a_cocher" name="dernier_avis_impot_3">Dernier avis d'imp??ts</li>
                        <li><input type="checkbox" class="a_cocher" name="3_derniere_quittances_de_loyer_3">Trois derni??res quittances de loyer ou attestation d'h??bergement</li>
                    </ul>
                </div>
                <div class="col-6 justi">
                    <h6>Justificatifs optionnels</h6>
                    <ul class="justi_fournir">
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_nov_3">Bulletin de salaire novembre</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid" style="margin-top: 25px;">
            <div class="row">
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="file">1 : Je choisis le fichier</label>
                    </div>
                    <div class="row">
                        <input type="file" style="width: 115px; margin-left: 10px;" name="file_justificatif">
                    </div>
                </div>
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="type_file">2 : Ce fichier contient</label>
                    </div>
                    <div class="row">
                        <select name="type_fichier" id="">
                            <option selected="true" style='display: none'>--</option>
                            <option value="Pi??ce d'identit??">Pi??ce d'identit??</option>
                            <option value="Contrat de travail">Contrat de travail</option>
                            <option value="Attestation employeur">Attestation employeur</option>
                            <option value="Bulletin de salaire f??vr">Bulletin de salaire f??vr</option>
                            <option value="Bulletin de salaire janv">Bulletin de salaire janv</option>
                            <option value="Bulletin de salaire d??c">Bulletin de salaire d??c</option>
                            <option value="Dernier avis d'impots">Dernier avis d'impots</option>
                            <option value="Trois derni??res quittances">Trois derni??res quittances</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="ajouter_file">3 : j'ajoute le fichier</label>
                    </div>
                    <div class="row">
                        <button style="background-color:  var(--main-bg-color);"><i class="fas fa-cloud-upload-alt">Ajouter</i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid justi_loca_4" id="page2">
        <div class="row deuxieme_page">
            <h4>Justificatifs locataire 4</h4>
            <!-- <p>CDI hors p??riode d'essaie</p> -->
        </div>
        <div class="row">
            <div class="col-6">
                <div class="row form1">
                    <label for="Nom_locataire" class="label_form">Nom du locataire :</label>
                    <input type="text" class="form_input" placeholder="optionnel" name="nom_1_loca_4">
                </div>
                <div class="row form1">
                    <label for="Nom_locataire" class="label_form">Email du locataire :</label>
                    <input type="text" class="form_input" placeholder="optionnel" name="email_1_loca_4">
                </div>
            </div>
            <div class="col-6">
                <div class="row form1">
                    <label for="Commentaires" class="label_form1">Commentaires :</label>
                    <input type="textarea" name="comment_loca_2" class="form_input1" size="40">
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 justi">
                    <h6>Justificatifs ?? fournir</h6>
                    <ul class="justi_fournir">
                        <li><input type="checkbox" class="a_cocher" name="piece_identite_4">Pi??ce d'identit??</li>
                        <li><input type="checkbox" class="a_cocher" name="contrat_travail_4">Contrat de travail ou attestation employeur</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_fev_4">Bulletin de salaire f??vrier</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_janv_4">Bulletin de salaire janvier</li>
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_dec_4">Bulletin de salaire d??cembre</li>
                        <li><input type="checkbox" class="a_cocher" name="dernier_avis_impot_4">Dernier avis d'imp??ts</li>
                        <li><input type="checkbox" class="a_cocher" name="3_derniere_quittances_de_loyer_4">Trois derni??res quittances de loyer ou attestation d'h??bergement</li>
                    </ul>
                </div>
                <div class="col-6 justi">
                    <h6>Justificatifs optionnels</h6>
                    <ul class="justi_fournir">
                        <li><input type="checkbox" class="a_cocher" name="bulletin_salaire_nov_4">Bulletin de salaire novembre</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid" style="margin-top: 25px;">
            <div class="row">
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="file">1 : Je choisis le fichier</label>
                    </div>
                    <div class="row">
                        <input type="file" style="width: 115px; margin-left: 10px;" name="file_justificatif">
                    </div>
                </div>
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="type_file">2 : Ce fichier contient</label>
                    </div>
                    <div class="row">
                        <select name="type_fichier" id="">
                            <option selected="true" style='display: none'>--</option>
                            <option value="Pi??ce d'identit??">Pi??ce d'identit??</option>
                            <option value="Contrat de travail">Contrat de travail</option>
                            <option value="Attestation employeur">Attestation employeur</option>
                            <option value="Bulletin de salaire f??vr">Bulletin de salaire f??vr</option>
                            <option value="Bulletin de salaire janv">Bulletin de salaire janv</option>
                            <option value="Bulletin de salaire d??c">Bulletin de salaire d??c</option>
                            <option value="Dernier avis d'impots">Dernier avis d'impots</option>
                            <option value="Trois derni??res quittances">Trois derni??res quittances</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4 ajout_fichier">
                    <div class="row">
                        <label for="ajouter_file">3 : j'ajoute le fichier</label>
                    </div>
                    <div class="row">
                        <button style="background-color:  var(--main-bg-color);"><i class="fas fa-cloud-upload-alt">Ajouter</i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="page" id="page3">
    <div class="container-fluid" style="margin-top: 50px;">
        <div class="row">
            <div class="col-md-6">
                <h4>Vos information</h4>
                <div class="row" style="margin: 15px 0px 5px 10px;">
                    <label for="adresse_logement" class="dernier_page_label">Votre nom</label>
                </div>
                <div class="row" style="margin: 5px 0px 5px 10px;">
                    <input type="text" class="dernier_input" name="votre_nom">
                </div>
                <div class="row" style="margin: 5px 0px 5px 10px;">
                    <label for="adresse_logement" class="dernier_page_label">Adresse du logement</label>
                </div>
                <div class="row" style="margin: 5px 0px 5px 10px;">
                    <input type="text" class="dernier_input" name="adresse_logement">
                </div>
                <div class="row" style="margin: 5px 0px 5px 10px;">
                    <label for="Date_signature_bail" class="dernier_page_label">Date de signature pr??visionnelle du bail</label>
                </div>
                <div class="row" style="margin: 5px 0px 5px 10px;">
                    <input type="date" class="dernier_input" name="date_signature_bail" size="40" maxlength="15" minlength="15">
                </div>
            </div>
            <div class="col-md-6">
                <h4>Acc??s ?? votre espace</h4>
                <div class="row acces_compte">
                    <p>Si vous possedez un compte, connectez vous, c'est ici<br> ???</p>
                </div>
                <div class="row acces_compte">
                    <a href="{% url 'login' %}"><button type="button">ICI</button></a>
                </div>
                <div class="row acces_compte">
                    <p>Si vous ne possedez pas encore de compte, cliquez ici<br> ???</p>
                </div>
                <div class="row acces_compte">
                    <a href="{% url 'insciption' %}"><button type="button">ICI</button></a>
                </div>
            </div>
        </div>
        <button class="button_final" type="submit">Cr??er votre compte<br>pour r??cup??rer le dossier locataire</button>
    </div>
</div>
{% csrf_token %}
</form>
</div>
</div>`