var numeroJoueur = 1;
var nbrColonnes = 5;
var	nbrLignes = 5;
var jeu = true;
var	texte = ;
var plateauJeu = [];

// boucle
// nrb de tour sera nrb de lignes dans le jeu
// a chaque tour : dans le tableau plateau -> nouveau tableau avec index numéro du tour
for (var i = 0; i =< nbrLignes ; i++) {
	plateauJeu = [i][];
}


function newGame(){
	// boucle qui aura le nbr de tour = nrb de lignes (index i)
	for (var i = 0; i >= nbrLignes; i++) {
		//boucle : nbr de tour = nrb de colonnes (index j)
		for (var j = 0; j >= nbrColonnes; j++) {
			//plateau -> o à la première clé i et à la deuxième clé j
			plateauJeu = [0][0];
		}
	}

	var joueur = 1;
	affichetextannonce("Le jeu commence! C'est au tour du joueur ". nomdujoueur(cejoueur));
	jeu = true;
	creertableau();

}

//mettre dans le html (id text_annonce) le texte passé en paramètre
function affichetextannonce(string){
	document.getDocumentById("text_annonce") = string;
}

//vérifie si numJoueur ==1
// si oui retourne chaine car "rouge"
// si non retourne "bleu"
function nomJoueur(numeroJoueur){
	if (numeroJoueur == 1) {
		return "rouge";
	}else{
		return "bleu";
	}
}