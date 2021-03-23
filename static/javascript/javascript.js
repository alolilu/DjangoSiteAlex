// De la page 1 a la 3

const pages = document.getElementsByClassName("page");
const header = document.querySelector("header");
const nbPages = pages.length; // nombre de page du formulaire
const pageSelect = document.getElementsByClassName('pageSelect');

for(let i = 0; i < pages.length; i++){
    pageSelect[i].addEventListener('click', () => {
        for(let x = 0; x < pages.length; x++){
            pages[x].style.display = "none";
            pageSelect[x].classList.remove('active');
        }
        pages[i].style.display = "block";
        pageSelect[i].classList.add('active');
    })
}

// démarrer le dossier 

var demarrer_le_dossier = document.getElementById('bouton_demarrage');

demarrer_le_dossier.addEventListener('click', demarrer_dossier);

function demarrer_dossier(){
    document.getElementsByClassName('dossier_formulaire')[0].style.display = "block";
    document.getElementsByClassName('demarrer_acceuil')[0].style.display = 'none';
}

//ajout premier locataire

var ajout_loca_bouton = document.getElementById('ajout_locataire');

ajout_loca_bouton.addEventListener('click', ajouter_le_locataire)

function ajouter_le_locataire(){
    document.getElementById('ajout_loca1').style.display="block";
    document.getElementById('ajout_locataire').style.display="none";
    document.getElementById('ajout_locataire1').style.display="block";
    document.getElementById('supp_locataire').style.display="block";
}

//ajout deuxieme locataire

var ajout_loca_bouton2 = document.getElementById('ajout_locataire1');

ajout_loca_bouton2.addEventListener('click', ajouter_le_locataire2)

function ajouter_le_locataire2(){
    document.getElementById('ajout_loca2').style.display="block";
    document.getElementById('supp_locataire1').style.display="block";
    document.getElementById('supp_locataire').style.display="none";
    document.getElementById('ajout_locataire').style.display="none";
    document.getElementById('ajout_locataire1').style.display="none";
    document.getElementById('ajout_locataire2').style.display="block";
}

//ajout troisieme locataire

var ajout_loca_bouton3 = document.getElementById('ajout_locataire2');

ajout_loca_bouton3.addEventListener('click', ajouter_le_locataire3)

function ajouter_le_locataire3(){
    document.getElementById('ajout_loca3').style.display="block";
    document.getElementById('ajout_locataire').style.display="none";
    document.getElementById('ajout_locataire1').style.display="none";
    document.getElementById('ajout_locataire2').style.display="none";
    document.getElementById('supp_locataire2').style.display="block";
    document.getElementById('supp_locataire1').style.display="none";
}

//supprimer premier locataire

var supp_loca_bouton = document.getElementById('supp_locataire');

supp_loca_bouton.addEventListener('click', supp_le_locataire)

function supp_le_locataire(){
    document.getElementById('ajout_locataire2').style.display="none";
    document.getElementById('supp_locataire2').style.display="none";
    document.getElementById('supp_locataire1').style.display="none";
    document.getElementById('ajout_loca1').style.display="none";
    document.getElementById('supp_locataire').style.display="none";
    document.getElementById('ajout_locataire').style.display="block";
    document.getElementById('ajout_locataire1').style.display="none";
}

//supprimer dexuieme locataire

var supp_loca_bouton2 = document.getElementById('supp_locataire1');

supp_loca_bouton2.addEventListener('click', supp_le_locataire2)

function supp_le_locataire2(){
    document.getElementById('ajout_loca2').style.display="none";
    document.getElementById('ajout_locataire').style.display="block";
    document.getElementById('supp_locataire').style.display="block";
    document.getElementById('ajout_locataire1').style.display="none";
    document.getElementById('ajout_locataire2').style.display="none";
    document.getElementById('supp_locataire1').style.display="none";
    document.getElementById('supp_locataire2').style.display="none";
}

//supprimer troisieme locataire

var supp_loca_bouton3 = document.getElementById('supp_locataire2');

supp_loca_bouton3.addEventListener('click', supp_le_locataire3)

function supp_le_locataire3(){
    document.getElementById('supp_locataire2').style.display="none";
    document.getElementById('ajout_locataire1').style.display="block";
    document.getElementById('supp_locataire1').style.display="block";
    document.getElementById('ajout_loca3').style.display="none";
}

// bouton principal oui et non 

var bouton_non = document.getElementById('non');

bouton_non.addEventListener('click', afficher_locataire)

function afficher_locataire(){
    document.getElementsByClassName('autre_question1')[0].style.display = 'none';
    document.getElementById('second_icone').style.display = 'inline-block';
    document.getElementsByClassName('locataire')[0].style.display = 'block';
    document.getElementsByClassName('autre_question')[0].style.display = 'none';
    document.getElementsByClassName('autre_question2')[0].style.display = 'none';
    document.getElementById('first_icone').style.display = 'none';
    document.getElementById('lancer_test').style.display = 'block';
    document.getElementById('fourth_icone').style.display = 'none';
    document.getElementById('third_icone').style.display = 'none';
    document.getElementById('loca_question_1').style.display="none";
    document.getElementById('locataire1').style.display="none";
    document.getElementById('loca_question_5').style.display="none";
}

var bouton_oui = document.getElementById('oui');

bouton_oui.addEventListener('click', afficher_autre_question)

function afficher_autre_question(){
    document.getElementsByClassName('autre_question')[0].style.display = 'block';
    document.getElementById('first_icone').style.display = 'inline-block';
    document.getElementById('second_icone').style.display = 'none';
    document.getElementsByClassName('locataire')[0].style.display = 'none';
    document.getElementsByClassName('autre_question1')[0].style.display = 'none';
    document.getElementsByClassName('autre_question2')[0].style.display = 'none';
    document.getElementById('question_number_5').style.display="none";
    document.getElementById('question_number_6').style.display="none";
    document.getElementById('question_number_7').style.display="none";
    document.getElementById('question_number_8').style.display="none";
    document.getElementById('question_number_9').style.display="none";
    document.getElementById('question_number_10').style.display="none";
    document.getElementById('question_number_11').style.display="none";
    document.getElementById('loca_question_1').style.display="none";
    document.getElementById('locataire1').style.display="none";
    document.getElementById('lancer_test').style.display="none";
}

// bouton secondaire oui et non

var bouton_oui1 = document.getElementById('oui1');

bouton_oui1.addEventListener('click', afficher_para_impo)

function afficher_para_impo(){
    document.getElementsByClassName('autre_question2')[0].style.display = 'none';
    document.getElementsByClassName('autre_question1')[0].style.display = 'block';
    document.getElementById('third_icone').style.display = 'inline-block';
    document.getElementById('fourth_icone').style.display = 'none';
    document.getElementById('question_number_1').style.display="none";
    document.getElementById('question_number_4').style.display="none";
    document.getElementById('question_number_2').style.display="none";
    document.getElementById('question_number_3').style.display="none";
    document.getElementById('loca_question_1').style.display="none";
    document.getElementById('locataire1').style.display="none";
    document.getElementsByClassName('locataire')[0].style.display = 'none';
    document.getElementById('lancer_test').style.display="none";
}

var bouton_non1 = document.getElementById('non1');

bouton_non1.addEventListener('click',  afficher_les_jours)

function afficher_les_jours(){
    document.getElementsByClassName('autre_question1')[0].style.display = 'none';
    document.getElementsByClassName('autre_question2')[0].style.display = 'block';
    document.getElementById('fourth_icone').style.display = 'inline-block';
    document.getElementById('third_icone').style.display = 'none';
    document.getElementById('loca_question_1').style.display="none";
    document.getElementById('locataire1').style.display="none";
}

// afficher les questions suivant le select

function showMe(value){
    if (value=="numberQues1"){
        document.getElementById('question_number_1').style.display="block";
        document.getElementById('question_number_4').style.display="block";
        document.getElementById('question_number_2').style.display="none";
        document.getElementById('question_number_3').style.display="none";
        document.getElementsByClassName('locataire')[0].style.display = 'block';
        document.getElementById('lancer_test').style.display="block";
    }

    if (value=="numberQues2"){
        document.getElementById('question_number_2').style.display="none";
        document.getElementById('question_number_3').style.display="block";
        document.getElementById('question_number_1').style.display="none";
        document.getElementById('question_number_4').style.display="block";
        document.getElementsByClassName('locataire')[0].style.display = 'none';
    }

    if (value=="numberQues3"){
        document.getElementById('question_number_3').style.display="block";
        document.getElementById('question_number_1').style.display="none";
        document.getElementById('question_number_4').style.display="none";
        document.getElementById('question_number_2').style.display="none";
        document.getElementsByClassName('locataire')[0].style.display = 'none';
    }
}

// afficher les questions suivant le status du garant 

function showMessage1(value){
    if (value=="CDI hors période d'essai"){
        document.getElementById('loca_question_7').style.display="block";
        document.getElementById('loca_question_5').style.display="none";
        document.getElementById('loca_question_6').style.display="none";
    }

    if (value=="Fonctionnaire"){
        document.getElementById('loca_question_7').style.display="block";
        document.getElementById('loca_question_5').style.display="none";
        document.getElementById('loca_question_6').style.display="none";
    }

    if (value=="Profession libérale"){
        document.getElementById('loca_question_7').style.display="block";
        document.getElementById('loca_question_5').style.display="block";
        document.getElementById('loca_question_6').style.display="none";
    }

    if (value=="Indépendant"){
        document.getElementById('loca_question_7').style.display="block";
        document.getElementById('loca_question_5').style.display="block";
        document.getElementById('loca_question_6').style.display="none";
    }

    if (value=="Salarié en CDD"){
        document.getElementById('loca_question_7').style.display="block";
        document.getElementById('loca_question_5').style.display="none";
        document.getElementById('loca_question_6').style.display="block";
    }

    if (value=="Retraité"){
        document.getElementById('loca_question_7').style.display="block";
        document.getElementById('loca_question_5').style.display="none";
        document.getElementById('loca_question_6').style.display="none";
    }
}

// afficher les questions suivant le statut 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111

function showMessage(value){
    if (value=="CDI hors période d'essai"){
       document.getElementById('question_number_5').style.display="block";
       document.getElementById('loca_question_4').style.display="block";
       document.getElementById('loca_question_2').style.display="block";
       document.getElementById('loca_question_3').style.display="block";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
       document.getElementById('loca_question_1').style.display="none";
       document.getElementById('locataire1').style.display="block";
       document.getElementById('loca_question_5').style.display="none";
       document.getElementById('loca_question_6').style.display="none";
       document.getElementById('loca_question_7').style.display="none";
       
    }
    if (value=="CDI en période d'essaie"){
        document.getElementById('question_number_5').style.display="none";
        document.getElementById('loca_question_2').style.display="block";
       document.getElementById('loca_question_3').style.display="block";
        document.getElementById('loca_question_4').style.display="block";
       document.getElementById('question_number_6').style.display="block";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
       document.getElementById('loca_question_1').style.display="none";
       document.getElementById('locataire1').style.display="block";
       document.getElementById('loca_question_5').style.display="none";
       document.getElementById('loca_question_6').style.display="none";
       document.getElementById('loca_question_7').style.display="none";
    }
    if (value=="Étudiant, alternant"){
        document.getElementById('loca_question_1').style.display="block";
        document.getElementById('loca_question_2').style.display="block";
       document.getElementById('loca_question_3').style.display="block";
        document.getElementById('loca_question_4').style.display="none";
        document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="block";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
       document.getElementById('locataire1').style.display="block";
       document.getElementById('loca_question_5').style.display="none";
       document.getElementById('loca_question_6').style.display="none";
       document.getElementById('loca_question_7').style.display="none";
    }
    if (value=="Fonctionnaire"){
        document.getElementById('question_number_5').style.display="none";
        document.getElementById('loca_question_2').style.display="block";
       document.getElementById('loca_question_3').style.display="block";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="block";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
       document.getElementById('loca_question_1').style.display="none";
       document.getElementById('loca_question_4').style.display="block";
       document.getElementById('locataire1').style.display="block";
       document.getElementById('loca_question_5').style.display="none";
       document.getElementById('loca_question_6').style.display="none";
       document.getElementById('loca_question_7').style.display="none";
    }
    if (value=="Profession libérale"){
        document.getElementById('question_number_5').style.display="none";
        document.getElementById('loca_question_2').style.display="block";
       document.getElementById('loca_question_3').style.display="block";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="block";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
       document.getElementById('loca_question_1').style.display="none";
       document.getElementById('loca_question_4').style.display="block";
       document.getElementById('locataire1').style.display="block";
       document.getElementById('loca_question_5').style.display="block";
       document.getElementById('loca_question_6').style.display="none";
       document.getElementById('loca_question_7').style.display="none";
    }
    if (value=="Indépendant"){
        document.getElementById('question_number_5').style.display="none";
        document.getElementById('loca_question_2').style.display="block";
       document.getElementById('loca_question_3').style.display="block";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="block";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
       document.getElementById('loca_question_1').style.display="none";
       document.getElementById('loca_question_4').style.display="block";
       document.getElementById('locataire1').style.display="block";
       document.getElementById('loca_question_5').style.display="block";
       document.getElementById('loca_question_6').style.display="none";
       document.getElementById('loca_question_7').style.display="none";
    }
    if (value=="Salarié en CDD"){
        document.getElementById('question_number_5').style.display="none";
        document.getElementById('loca_question_2').style.display="block";
       document.getElementById('loca_question_3').style.display="block";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
       document.getElementById('loca_question_1').style.display="none";
       document.getElementById('loca_question_4').style.display="block";
       document.getElementById('locataire1').style.display="block";
       document.getElementById('loca_question_5').style.display="none";
       document.getElementById('loca_question_6').style.display="block";
       document.getElementById('loca_question_7').style.display="none";
    }
    if (value=="Intérimaire"){
        document.getElementById('question_number_5').style.display="none";
        document.getElementById('loca_question_2').style.display="block";
       document.getElementById('loca_question_3').style.display="block";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="block";
       document.getElementById('question_number_11').style.display="none";
       document.getElementById('loca_question_1').style.display="none";
       document.getElementById('loca_question_4').style.display="block";
       document.getElementById('locataire1').style.display="block";
       document.getElementById('loca_question_5').style.display="none";
       document.getElementById('loca_question_6').style.display="none";
       document.getElementById('loca_question_7').style.display="none";
    }
    if (value=="intermitent du spectacle"){
        document.getElementById('question_number_5').style.display="none";
        document.getElementById('loca_question_2').style.display="block";
       document.getElementById('loca_question_3').style.display="block";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="block";
       document.getElementById('question_number_11').style.display="none";
       document.getElementById('loca_question_1').style.display="none";
       document.getElementById('loca_question_4').style.display="block";
       document.getElementById('locataire1').style.display="block";
       document.getElementById('loca_question_5').style.display="none";
       document.getElementById('loca_question_6').style.display="none";
       document.getElementById('loca_question_7').style.display="none";
    }
    if (value=="Retraité"){
        document.getElementById('question_number_5').style.display="none";
        document.getElementById('loca_question_2').style.display="block";
       document.getElementById('loca_question_3').style.display="block";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="block";
       document.getElementById('loca_question_1').style.display="none";
       document.getElementById('loca_question_4').style.display="block";
       document.getElementById('locataire1').style.display="block";
       document.getElementById('loca_question_5').style.display="none";
       document.getElementById('loca_question_6').style.display="none";
       document.getElementById('loca_question_7').style.display="none";
    }
    if (value=="Sans emploie"){
        document.getElementById('question_number_5').style.display="none";
        document.getElementById('loca_question_2').style.display="block";
       document.getElementById('loca_question_3').style.display="block";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
       document.getElementById('loca_question_1').style.display="none";
       document.getElementById('loca_question_4').style.display="block";
       document.getElementById('locataire1').style.display="block";
       document.getElementById('loca_question_5').style.display="none";
       document.getElementById('loca_question_6').style.display="none";
       document.getElementById('loca_question_7').style.display="none";
    }
}


// locataire numero 2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222


function showMessageLoca2(value){
    if (value=="1CDI hors période d'essai"){
        document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_5').style.display="block";
       document.getElementById('loca_question_44').style.display="block";
       document.getElementById('loca_question_22').style.display="none";
       document.getElementById('loca_question_33').style.display="none";
       document.getElementById('loca_question_11').style.display="none";
       document.getElementById('loca_question_55').style.display="none";
       document.getElementById('loca_question_66').style.display="none";
       document.getElementById('loca_question_77').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
       
       
    }
    if (value=="1CDI en période d'essaie"){
        document.getElementById('loca_question_44').style.display="block";
        document.getElementById('question_number_5').style.display="none";
        document.getElementById('question_number_6').style.display="block";
        document.getElementById('loca_question_22').style.display="none";
       document.getElementById('loca_question_33').style.display="none";
       document.getElementById('loca_question_11').style.display="none";
       document.getElementById('loca_question_55').style.display="none";
       document.getElementById('loca_question_66').style.display="none";
       document.getElementById('loca_question_77').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="1Étudiant, alternant"){
        document.getElementById('question_number_7').style.display="block";
        document.getElementById('loca_question_66').style.display="none";
        document.getElementById('loca_question_44').style.display="none";
        document.getElementById('loca_question_11').style.display="block";
        document.getElementById('loca_question_22').style.display="block";
       document.getElementById('loca_question_33').style.display="block";
       document.getElementById('loca_question_55').style.display="none";
       document.getElementById('loca_question_77').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="1Fonctionnaire"){
        document.getElementById('loca_question_11').style.display="none";
        document.getElementById('loca_question_44').style.display="block";
        document.getElementById('loca_question_22').style.display="none";
       document.getElementById('loca_question_33').style.display="none";
       document.getElementById('loca_question_55').style.display="none";
       document.getElementById('loca_question_66').style.display="none";
       document.getElementById('loca_question_77').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="block";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="1Profession libérale"){
        document.getElementById('loca_question_44').style.display="block";
        document.getElementById('loca_question_55').style.display="block";
        document.getElementById('loca_question_22').style.display="none";
       document.getElementById('loca_question_33').style.display="none";
       document.getElementById('loca_question_11').style.display="none";
       document.getElementById('loca_question_66').style.display="none";
       document.getElementById('loca_question_77').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="block";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="1Indépendant"){
        document.getElementById('loca_question_44').style.display="block";
        document.getElementById('loca_question_55').style.display="block";
        document.getElementById('loca_question_22').style.display="none";
       document.getElementById('loca_question_33').style.display="none";
       document.getElementById('loca_question_11').style.display="none";
       document.getElementById('loca_question_66').style.display="none";
       document.getElementById('loca_question_77').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="block";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="1Salarié en CDD"){
        document.getElementById('loca_question_55').style.display="none";
        document.getElementById('loca_question_44').style.display="block";
        document.getElementById('loca_question_66').style.display="block";
        document.getElementById('loca_question_22').style.display="none";
       document.getElementById('loca_question_33').style.display="none";
       document.getElementById('loca_question_11').style.display="none";
       document.getElementById('loca_question_77').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="1Intérimaire"){
        document.getElementById('loca_question_66').style.display="none";
        document.getElementById('loca_question_44').style.display="block";
        document.getElementById('loca_question_22').style.display="none";
       document.getElementById('loca_question_33').style.display="none";
       document.getElementById('loca_question_11').style.display="none";
       document.getElementById('loca_question_55').style.display="none";
       document.getElementById('loca_question_77').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="block";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="1intermitent du spectacle"){
        document.getElementById('loca_question_44').style.display="block";
        document.getElementById('loca_question_22').style.display="none";
       document.getElementById('loca_question_33').style.display="none";
       document.getElementById('loca_question_11').style.display="none";
       document.getElementById('loca_question_55').style.display="none";
       document.getElementById('loca_question_66').style.display="none";
       document.getElementById('loca_question_77').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="block";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="1Retraité"){
        document.getElementById('loca_question_44').style.display="block";
        document.getElementById('loca_question_22').style.display="none";
       document.getElementById('loca_question_33').style.display="none";
       document.getElementById('loca_question_11').style.display="none";
       document.getElementById('loca_question_55').style.display="none";
       document.getElementById('loca_question_66').style.display="none";
       document.getElementById('loca_question_77').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="1Sans emploie"){
        document.getElementById('loca_question_44').style.display="block";
        document.getElementById('loca_question_22').style.display="none";
       document.getElementById('loca_question_33').style.display="none";
       document.getElementById('loca_question_11').style.display="none";
       document.getElementById('loca_question_55').style.display="none";
       document.getElementById('loca_question_66').style.display="none";
       document.getElementById('loca_question_77').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="block";
    }
}

function showMessage1Loca2(value){
    if (value=="1CDI hors période d'essai"){
        document.getElementById('loca_question_77').style.display="block";
        document.getElementById('loca_question_55').style.display="none";
        document.getElementById('loca_question_66').style.display="none";
    }

    if (value=="1Fonctionnaire"){
        document.getElementById('loca_question_77').style.display="block";
        document.getElementById('loca_question_55').style.display="none";
        document.getElementById('loca_question_66').style.display="none";
    }

    if (value=="1Profession libérale"){
        document.getElementById('loca_question_77').style.display="block";
        document.getElementById('loca_question_55').style.display="block";
        document.getElementById('loca_question_66').style.display="none";
    }

    if (value=="1Indépendant"){
        document.getElementById('loca_question_77').style.display="block";
        document.getElementById('loca_question_55').style.display="block";
        document.getElementById('loca_question_66').style.display="none";
    }

    if (value=="1Salarié en CDD"){
        document.getElementById('loca_question_77').style.display="block";
        document.getElementById('loca_question_55').style.display="none";
        document.getElementById('loca_question_66').style.display="block";
    }

    if (value=="1Retraité"){
        document.getElementById('loca_question_77').style.display="block";
        document.getElementById('loca_question_55').style.display="none";
        document.getElementById('loca_question_66').style.display="none";
    }
}


// locataire numero 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333


function showMessageLoca3(value){
    if (value=="2CDI hors période d'essai"){
       document.getElementById('question_number_5').style.display="block";
       document.getElementById('loca_question_444').style.display="block";
       document.getElementById('loca_question_222').style.display="none";
       document.getElementById('loca_question_333').style.display="none";
       document.getElementById('loca_question_111').style.display="none";
       document.getElementById('loca_question_555').style.display="none";
       document.getElementById('loca_question_666').style.display="none";
       document.getElementById('loca_question_777').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
       
    }
    if (value=="2CDI en période d'essaie"){
        document.getElementById('loca_question_444').style.display="block";
        document.getElementById('loca_question_222').style.display="none";
       document.getElementById('loca_question_333').style.display="none";
       document.getElementById('loca_question_111').style.display="none";
       document.getElementById('loca_question_555').style.display="none";
       document.getElementById('loca_question_666').style.display="block";
       document.getElementById('loca_question_777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="2Étudiant, alternant"){
        document.getElementById('loca_question_666').style.display="none";
        document.getElementById('loca_question_444').style.display="none";
        document.getElementById('loca_question_111').style.display="block";
        document.getElementById('loca_question_222').style.display="block";
       document.getElementById('loca_question_333').style.display="block";
       document.getElementById('loca_question_555').style.display="none";
       document.getElementById('loca_question_777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="block";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="2Fonctionnaire"){
        document.getElementById('loca_question_111').style.display="none";
        document.getElementById('loca_question_444').style.display="block";
        document.getElementById('loca_question_222').style.display="none";
       document.getElementById('loca_question_333').style.display="none";
       document.getElementById('loca_question_555').style.display="none";
       document.getElementById('loca_question_666').style.display="none";
       document.getElementById('loca_question_777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="block";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="2Profession libérale"){
        document.getElementById('loca_question_444').style.display="block";
        document.getElementById('loca_question_555').style.display="block";
        document.getElementById('loca_question_222').style.display="none";
       document.getElementById('loca_question_333').style.display="none";
       document.getElementById('loca_question_111').style.display="none";
       document.getElementById('loca_question_666').style.display="none";
       document.getElementById('loca_question_777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="block";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="2Indépendant"){
        document.getElementById('loca_question_444').style.display="block";
        document.getElementById('loca_question_555').style.display="block";
        document.getElementById('loca_question_222').style.display="none";
       document.getElementById('loca_question_333').style.display="none";
       document.getElementById('loca_question_111').style.display="none";
       document.getElementById('loca_question_666').style.display="none";
       document.getElementById('loca_question_777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="block";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="2Salarié en CDD"){
        document.getElementById('loca_question_555').style.display="none";
        document.getElementById('loca_question_444').style.display="block";
        document.getElementById('loca_question_666').style.display="block";
        document.getElementById('loca_question_222').style.display="none";
       document.getElementById('loca_question_333').style.display="none";
       document.getElementById('loca_question_111').style.display="none";
       document.getElementById('loca_question_777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="2Intérimaire"){
        document.getElementById('loca_question_666').style.display="none";
        document.getElementById('loca_question_444').style.display="block";
        document.getElementById('loca_question_222').style.display="none";
       document.getElementById('loca_question_333').style.display="none";
       document.getElementById('loca_question_111').style.display="none";
       document.getElementById('loca_question_555').style.display="none";
       document.getElementById('loca_question_777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="block";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="2intermitent du spectacle"){
        document.getElementById('loca_question_444').style.display="block";
        document.getElementById('loca_question_222').style.display="none";
       document.getElementById('loca_question_333').style.display="none";
       document.getElementById('loca_question_111').style.display="none";
       document.getElementById('loca_question_555').style.display="none";
       document.getElementById('loca_question_666').style.display="none";
       document.getElementById('loca_question_777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="block";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="2Retraité"){
        document.getElementById('loca_question_444').style.display="block";
        document.getElementById('loca_question_222').style.display="none";
       document.getElementById('loca_question_333').style.display="none";
       document.getElementById('loca_question_111').style.display="none";
       document.getElementById('loca_question_555').style.display="none";
       document.getElementById('loca_question_666').style.display="none";
       document.getElementById('loca_question_777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="2Sans emploie"){
        document.getElementById('loca_question_444').style.display="block";
        document.getElementById('loca_question_222').style.display="none";
       document.getElementById('loca_question_333').style.display="none";
       document.getElementById('loca_question_111').style.display="none";
       document.getElementById('loca_question_555').style.display="none";
       document.getElementById('loca_question_666').style.display="none";
       document.getElementById('loca_question_777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
}

function showMessage1Loca3(value){
    if (value=="2CDI hors période d'essai"){
        document.getElementById('loca_question_777').style.display="block";
        document.getElementById('loca_question_555').style.display="none";
        document.getElementById('loca_question_666').style.display="none";
    }

    if (value=="2Fonctionnaire"){
        document.getElementById('loca_question_777').style.display="block";
        document.getElementById('loca_question_555').style.display="none";
        document.getElementById('loca_question_666').style.display="none";
    }

    if (value=="2Profession libérale"){
        document.getElementById('loca_question_777').style.display="block";
        document.getElementById('loca_question_555').style.display="block";
        document.getElementById('loca_question_666').style.display="none";
    }

    if (value=="2Indépendant"){
        document.getElementById('loca_question_777').style.display="block";
        document.getElementById('loca_question_555').style.display="block";
        document.getElementById('loca_question_666').style.display="none";
    }

    if (value=="2Salarié en CDD"){
        document.getElementById('loca_question_777').style.display="block";
        document.getElementById('loca_question_555').style.display="none";
        document.getElementById('loca_question_666').style.display="block";
    }

    if (value=="2Retraité"){
        document.getElementById('loca_question_777').style.display="block";
        document.getElementById('loca_question_555').style.display="none";
        document.getElementById('loca_question_666').style.display="none";
    }
}

// locataire numero 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444


function showMessageLoca4(value){
    if (value=="3CDI hors période d'essai"){
        document.getElementById('question_number_5').style.display="block";
       document.getElementById('loca_question_4444').style.display="block";
       document.getElementById('loca_question_2222').style.display="none";
       document.getElementById('loca_question_3333').style.display="none";
       document.getElementById('loca_question_1111').style.display="none";
       document.getElementById('loca_question_5555').style.display="none";
       document.getElementById('loca_question_6666').style.display="none";
       document.getElementById('loca_question_7777').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
       
    }
    if (value=="3CDI en période d'essaie"){
        document.getElementById('loca_question_4444').style.display="block";
        document.getElementById('loca_question_2222').style.display="none";
       document.getElementById('loca_question_3333').style.display="none";
       document.getElementById('loca_question_1111').style.display="none";
       document.getElementById('loca_question_5555').style.display="none";
       document.getElementById('loca_question_6666').style.display="none";
       document.getElementById('loca_question_7777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="block";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="3Étudiant, alternant"){
        document.getElementById('loca_question_6666').style.display="none";
        document.getElementById('loca_question_4444').style.display="none";
        document.getElementById('loca_question_1111').style.display="block";
        document.getElementById('loca_question_2222').style.display="block";
       document.getElementById('loca_question_3333').style.display="block";
       document.getElementById('loca_question_5555').style.display="none";
       document.getElementById('loca_question_7777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="block";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="3Fonctionnaire"){
        document.getElementById('loca_question_1111').style.display="none";
        document.getElementById('loca_question_4444').style.display="block";
        document.getElementById('loca_question_2222').style.display="none";
       document.getElementById('loca_question_3333').style.display="none";
       document.getElementById('loca_question_5555').style.display="none";
       document.getElementById('loca_question_6666').style.display="none";
       document.getElementById('loca_question_7777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="block";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="3Profession libérale"){
        document.getElementById('loca_question_4444').style.display="block";
        document.getElementById('loca_question_5555').style.display="block";
        document.getElementById('loca_question_2222').style.display="none";
       document.getElementById('loca_question_3333').style.display="none";
       document.getElementById('loca_question_1111').style.display="none";
       document.getElementById('loca_question_6666').style.display="none";
       document.getElementById('loca_question_7777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="block";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="3Indépendant"){
        document.getElementById('loca_question_4444').style.display="block";
        document.getElementById('loca_question_5555').style.display="block";
        document.getElementById('loca_question_2222').style.display="none";
       document.getElementById('loca_question_3333').style.display="none";
       document.getElementById('loca_question_1111').style.display="none";
       document.getElementById('loca_question_6666').style.display="none";
       document.getElementById('loca_question_7777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="block";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="3Salarié en CDD"){
        document.getElementById('loca_question_5555').style.display="none";
        document.getElementById('loca_question_4444').style.display="block";
        document.getElementById('loca_question_6666').style.display="block";
        document.getElementById('loca_question_2222').style.display="none";
       document.getElementById('loca_question_3333').style.display="none";
       document.getElementById('loca_question_1111').style.display="none";
       document.getElementById('loca_question_7777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="3Intérimaire"){
        document.getElementById('loca_question_6666').style.display="none";
        document.getElementById('loca_question_4444').style.display="block";
        document.getElementById('loca_question_2222').style.display="none";
       document.getElementById('loca_question_3333').style.display="none";
       document.getElementById('loca_question_1111').style.display="none";
       document.getElementById('loca_question_5555').style.display="none";
       document.getElementById('loca_question_7777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="block";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="3intermitent du spectacle"){
        document.getElementById('loca_question_4444').style.display="block";
        document.getElementById('loca_question_2222').style.display="none";
       document.getElementById('loca_question_3333').style.display="none";
       document.getElementById('loca_question_1111').style.display="none";
       document.getElementById('loca_question_5555').style.display="none";
       document.getElementById('loca_question_6666').style.display="none";
       document.getElementById('loca_question_7777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="block";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="3Retraité"){
        document.getElementById('loca_question_4444').style.display="block";
        document.getElementById('loca_question_2222').style.display="none";
       document.getElementById('loca_question_3333').style.display="none";
       document.getElementById('loca_question_1111').style.display="none";
       document.getElementById('loca_question_5555').style.display="none";
       document.getElementById('loca_question_6666').style.display="none";
       document.getElementById('loca_question_7777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
    if (value=="3Sans emploie"){
        document.getElementById('loca_question_4444').style.display="block";
        document.getElementById('loca_question_2222').style.display="none";
       document.getElementById('loca_question_3333').style.display="none";
       document.getElementById('loca_question_1111').style.display="none";
       document.getElementById('loca_question_5555').style.display="none";
       document.getElementById('loca_question_6666').style.display="none";
       document.getElementById('loca_question_7777').style.display="none";
       document.getElementById('question_number_5').style.display="none";
       document.getElementById('question_number_6').style.display="none";
       document.getElementById('question_number_7').style.display="none";
       document.getElementById('question_number_8').style.display="none";
       document.getElementById('question_number_9').style.display="none";
       document.getElementById('question_number_10').style.display="none";
       document.getElementById('question_number_11').style.display="none";
    }
}

function showMessage1Loca4(value){
    if (value=="3CDI hors période d'essai"){
        document.getElementById('loca_question_7777').style.display="block";
        document.getElementById('loca_question_5555').style.display="none";
        document.getElementById('loca_question_6666').style.display="none";
    }

    if (value=="3Fonctionnaire"){
        document.getElementById('loca_question_7777').style.display="block";
        document.getElementById('loca_question_5555').style.display="none";
        document.getElementById('loca_question_6666').style.display="none";
    }

    if (value=="3Profession libérale"){
        document.getElementById('loca_question_7777').style.display="block";
        document.getElementById('loca_question_5555').style.display="block";
        document.getElementById('loca_question_6666').style.display="none";
    }

    if (value=="3Indépendant"){
        document.getElementById('loca_question_7777').style.display="block";
        document.getElementById('loca_question_5555').style.display="block";
        document.getElementById('loca_question_6666').style.display="none";
    }

    if (value=="3Salarié en CDD"){
        document.getElementById('loca_question_7777').style.display="block";
        document.getElementById('loca_question_5555').style.display="none";
        document.getElementById('loca_question_6666').style.display="block";
    }

    if (value=="3Retraité"){
        document.getElementById('loca_question_7777').style.display="block";
        document.getElementById('loca_question_5555').style.display="none";
        document.getElementById('loca_question_6666').style.display="none";
    }
}

