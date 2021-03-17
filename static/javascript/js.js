const pages = document.getElementsByClassName("page")
const header = document.querySelector("header")
const nbPages = pages.length // nombre de page du formulaire

console.log(String(nbPages))

// window.onload = () => {
//             // on affiche la premiere page du formulaire
//             document.querySelector(".page").style.display = "initial"

//             //on afiche les numéro des pages
//             //on parcour la listes des pages 
//             pages.forEach((page, HomeDossier) => {
//                 //on crée l'élement de la page
//                 let element = document.createElement("div")
//                 element .classList.add("page-num")
//                 if(pageActive === HomeDossier + 1){
//                     element.classList.add("active")
//                 }
//                 element.innerHTML = HomeDossier + 1
//                 header.appendChild(element)
//             })
//         }
