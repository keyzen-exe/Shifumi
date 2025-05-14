//role : recuperer le choix du joeur (reponse au prompt)
// paramatre : rien
// return : le choix du joueur 

function choixJoueur () {
    let reponseJoueur = prompt("Que choisi tu ? pierre ou ciseau ou feuille").toLowerCase()
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
        alert("egalité")
    } else if (reponseOrdi === "ciseau" && reponseJoueur === "feuille") {
        alert("l'ordi à gagné")
    } else if (reponseOrdi === "feuille" && reponseJoueur === "pierre") {
        alert("l'ordi à gagné")
    } else if (reponseOrdi === "pierre" && reponseJoueur === "feuille") {
        alert("le joueur a gagné")
    } else if (reponseOrdi === "feuille" && reponseJoueur === "ciseau") {
        alert("le joueur a gagné")
    }else if (reponseOrdi === "ciseau" && reponseJoueur === "pierre"){
        alert ("le joueur a gagné")
    }else if (reponseOrdi === "pierre" && reponseJoueur === "ciseau"){
        alert ("l'ordi à gagné")
    }else{
        alert ("Mauvaise ecriture")
    }
}
compare(choixOrdi(), choixJoueur())