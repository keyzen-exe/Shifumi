//role : recuperer le choix du joeur (reponse au prompt)
// paramatre : rien
// return : le choix du joueur 


function choixJoueur () {
    let reponseJoueur = prompt("Que choisi tu ? pierre ou ciseau ou feuille")
    return reponseJoueur
}
 

//console.log (choixOrdi())

//console.log(choixJoueur())



 //role : choix ordinateur (piocher un chiffre entre 1 et 3)
 // parametre : rien
 // return : le chiffre pioché

function choixOrdi() {
    let reponseOrdi = Math.floor(Math.random() * 3) + 1;

    if (reponseOrdi === 1){
        reponseOrdi = "feuille"
    } else if (reponseOrdi === 2 ){
        reponseOrdi = "ciseau"
    }else {
        reponseOrdi = "pierre"
    }
    return reponseOrdi;
}




//role compararer les resultat
// choix du joueur + choix ordi
// return le gagant 

function compare(reponseOrdi, reponseJoueur) {
    if (reponseOrdi === reponseJoueur) {
        score = "égalité"
        affichescore(score)
    } else if (reponseOrdi === "ciseau" && reponseJoueur === "feuille") {
        score = "perdu"
        affichescore(score)
    } else if (reponseOrdi === "feuille" && reponseJoueur === "pierre") {
        score = "perdu"
        affichescore(score)
    } else if (reponseOrdi === "pierre" && reponseJoueur === "feuille") {
        score = "gagné"
        affichescore(score)
    } else if (reponseOrdi === "feuille" && reponseJoueur === "ciseau") {
        score = "gagné"
        affichescore(score)
    }else if (reponseOrdi === "ciseau" && reponseJoueur === "pierre"){
        score = "gagné"
        affichescore(score)
    }else if (reponseOrdi === "pierre" && reponseJoueur === "ciseau"){
        score = "perdu"
        affichescore(score)
    }
}


let choixReponse
let feuille = document.getElementById('feuille') 

feuille.addEventListener("click",(event)=>{
    console.log (event)
    choixReponse = "feuille"
    compare(choixOrdi(), choixReponse, score)
})

let ciseau = document.getElementById('ciseau') 

ciseau.addEventListener("click",(event)=>{
    console.log (event)
    choixReponse = "ciseau"
    compare(choixOrdi(), choixReponse, score)
})

let pierre = document.getElementById('pierre') 

pierre.addEventListener("click",(event)=>{
    console.log (event)
    choixReponse = "pierre"
    compare(choixOrdi(), choixReponse, score)
})

function affichescore(score){

    let toto = document.getElementById('score')
    toto.innerHTML = `

<h1>Tu a ${score}</h1>
`;

}





function compareOrdi(reponseOrdi, reponseJoueur) {
    if (reponseOrdi === reponseJoueur) {
        score = "égalité"
        affichescore(score)
    } else if (reponseOrdi === "ciseau" && reponseJoueur === "feuille") {
        score = "Gagné"
        affichescore(score)
    } else if (reponseOrdi === "feuille" && reponseJoueur === "pierre") {
        score = "Gagné"
        affichescore(score)
    } else if (reponseOrdi === "pierre" && reponseJoueur === "feuille") {
        score = "Perdu"
        affichescore(score)
    } else if (reponseOrdi === "feuille" && reponseJoueur === "ciseau") {
        score = "Perdu"
        affichescore(score)
    }else if (reponseOrdi === "ciseau" && reponseJoueur === "pierre"){
        score = "Perdu"
        affichescore(score)
    }else if (reponseOrdi === "pierre" && reponseJoueur === "ciseau"){
        score = "Gagné"
        affichescore(score)
    }
}

let choixReponseOrdi

let feuilleOrdi = document.getElementById('feuille') 

feuilleOrdi.addEventListener("click",(event)=>{
    console.log (event)
    choixReponseOrdi = "feuille"
    compare(choixOrdi(), choixReponseOrdi, scoreOrdi)
})

let ciseauOrdi = document.getElementById('ciseau') 

ciseauOrdi.addEventListener("click",(event)=>{
    console.log (event)
    choixReponseOrdi = "ciseau"
    compare(choixOrdi(), choixReponseOrdi, scoreOrdi)
})

let pierreOrdi = document.getElementById('pierre') 

pierreOrdi.addEventListener("click",(event)=>{
    console.log (event)
    choixReponseOrdi = "pierre"
    compare(choixOrdi(), choixReponseOrdi, scoreOrdi)
})

function affichescore(scoreOrdi){

    let toto = document.getElementById('scoreOrdi')
    toto.innerHTML = `

<h1>L'ordi a ${scoreOrdi}</h1>
`;

}
