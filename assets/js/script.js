var numeroJoueur = 1;
var nbrColonnes = 5;
var	nbrLignes = 5;
var jeu = true;
var	text = "";
var plateauJeu = [];

// boucle
// nrb de tour sera nrb de lignes dans le jeu
// a chaque tour : dans le tableau plateau -> nouveau tableau avec index numéro du tour
for (var i = 0; i < nbrLignes ; i++) {
	plateauJeu [i] = [];
}

newGame();

function newGame(){
	// boucle qui aura le nbr de tour = nrb de lignes (index i)
	for (var i = 0; i < nbrLignes; i++) {
		//boucle : nbr de tour = nrb de colonnes (index j)
		for (var j = 0; j < nbrColonnes; j++) {
			//plateau -> o à la première clé i et à la deuxième clé j
			plateauJeu [i][j] = 0 ;
		}
	}
	numeroJoueur = 1;
	affichetextannonce("Le jeu commence! C'est au tour du joueur "+ nomdujoueur(cejoueur));
	jeu = true;
	creertableau();
}

//mettre dans le html (id text_annonce) le texte passé en paramètre
function affichetextannonce(string){
	document.getElementById("text_annonce").innerHTML = string;
}

//vérifie si numJoueur == 1
// si oui retourne chaine car "rouge"
// si non retourne "bleu"
function nomJoueur(numeroJoueur){
	if (numeroJoueur == 1) {
		return "rouge";
	}else{
		return "bleu";
	}
}

function creertableau(){
	//chaine de car html qui ouvre balise <table> et la met dans la variable text
	text = "<table>";
	//boucle, nrb de tour = nbr de lignes (index i)
	for (var i = 0; i < nbrLignes; i++) {
	// à chaque tour ajout dans text la chaine de carac qui sera l'ouverture de la balise tr
		text =+ "<tr>";

		//boucle, nbr de tour = nbr colonnes (index j)
		for (var j = 0; j < nbrColonnes; j++) {
			//ajout chaine de car balise td - propriété onclick qui fera appel à la fonction detectclick([j])- 
			//balise avec l'id [i]-[j]
			text += "<td onclick='detectclick(" + j + ")' id=\"" + i + '-' + j +'">';

			//condition : si plateau[i][j] == 1
			if (plateauJeu[i][j] == 1){
				//ajouter dans text : <div class joueur1> + </div>
				text =+ "<div class='joueur1'></div>";
			}else if (plateauJeu[i][j] == 2){
				//ajout dans text div classjoueur2 + </div>
				text =+ "<div class='joueur2'></div>";
			}

			//ajouter à text la balise fermante td
			text =+ "</td>";
		}

	//ajout balise fermante tr dans texte
	text =+ "</tr>";

	}

	//ajout text balise fermante table
	text =+ "</table>";
	//ajout au html (id puissance 4) la variable texte
	document.getElementById("puissance_4").innerHTML = text;
	
}