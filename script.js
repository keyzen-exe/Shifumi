//role : recuperer le choix du joeur (reponse au prompt)
// paramatre : rien
// return : le choix du joueur 

function choixJoueur () {
    let reponseJoueur = prompt("Que choisi tu ? pierre ou ciseaux ou papier").toLowerCase()
    return reponseJoueur
}
 
console.log (choixOrdi())

console.log(choixJoueur())





 //role : choix ordinateur (piocher un chiffre entre 1 et 3)
 // parametre : rien
 // return : le chiffre pioché

function choixOrdi() {
    let reponseOrdi = Math.floor(Math.random() * 3) + 1;

    if (reponseOrdi === 1){
        reponseOrdi = "pierre"
    } else if (reponseOrdi === 2 ){
        reponseOrdi = "ciseaux"
    }else {
        reponseOrdi = "papier"
    }
    return reponseOrdi;
}






//role compararer les resultat
// choix du joueur + choix ordi
// return le gagant 

function resultat(){

if (reponseJoueur===reponseOrdi) {
    resultat = "Egalité";
  }
  else if ((reponseJoueur === "Pierre" && reponseOrdi === "Ciseaux") || (reponseJoueur === "Ciseaux" && reponseOrdi === "papier") || (reponseJoueur === "papier") && (reponseOrdi === "Pierre")) {
    resultat = "Gagné";
  }
  else {
    resultat = "Perdu";
    
     
}}
console.log(`L'ordinateur a choisi "${reponseOrdi}" tu a ${resultat}`);