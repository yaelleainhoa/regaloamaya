document.getElementById("masquer").style.display = "none";

var liste_questions = [
	"0",
	"Comment s'appelle le gardien préféré de paps ?", 
	"Combien de joueurs trouve-t-on sur un terrain de basket ?",
	"Dans quel ordre sont sortis les 6 premiers volumes de la Saga Star Wars ? (I, II, III, IV, V, VI)", //
	"Dans quel sens se lit un manga ?", //
	"Dans quelle salle joue l'ESBVA ?",
	"Quel capitaine mythique formé à la Txantrea a quitté le club en fin de saison ?",
	"Citer un personnage de One Piece", //
	"Sur quelle partie du corps pratique-t-on un TAVI ?",
	"Quelles sont les couleurs traditionelles de l'Athletic ?",
	"Quel est le nom du fidèle acolyte jaune usant de pouvoirs électriques pour abattre ses ennemis de la Team Rocket de Sacha Ketchum (dit Ash) qui pourrait grâce à ses pouvoirs recharger ton téléphone portable en un temps record dont l'évolution est Raichu dont la carte pourrait remplir une belle collection au côté de Dracofeu, Bulbizarre et Carapuce ?", //
	"Dans quelle équipe joue Nikola Jokic ?",
	"De quoi souffre une personne atteinte de neurocysticercosis ?",
	"Qui est le personnage le plus poilu de Star Wars?", //
	"Un patient se présente avec les symptomes suivants, quel est votre diagnostic ? Yeux rouges sans écoulement, Lèvres rouges, sèches et gercées et langue couleur fraise, Gonflement, rougeur et desquamation des pieds et des mains, Éruption cutanée avec taches rouges disséminées sur le tronc, Ganglions lymphatiques gonflés et sensibles au niveau du cou",
	"Qui est le père de Boruto ? (point bonus si tu peux citer un autre personnage de la série, ex : Shikamaru)", //
	"Quelle est la relation entre Luke et Leia ?", //
	"Qu'est ce que la trichotillomanie ?",
	"Quelle est la meilleure sélection masculine (hors USA) qui a gagné 2 coupes du monde ?",
	"Citer un titre de l'un des films de l'univers Star Wars", //
	"Comment s'appelle le stade aussi connu sous le nom de Cathédrale ?",
	]
;


var liste_reponses = [
	"0",
	"José Angel Iribar",
	"10 (5 par équipe !)",
	"IV, V, VI, I, II, III !!!!",
	"Dans le sens inverse d'un livre lol", //
	"Palacium",
	"Iker Muniain",
	"Aitor valide (mais je pense que tu vas dire Luffy)", //
	"Le coeur",
	"Rouge et blanc",
	"Pikachu",
	"Denver Nuggets",
	"De vers dans le cerveau",
	"Chewbacca",
	"Kawasaki",
	"Naruto",
	"Frères et soeurs (le bisous était une erreur)",
	"La trichotillomanie est caractérisée par des arrachages récurrents des cheveux entraînant une perte de cheveux. Les patients qui ont une trichotillomanie tirent ou arrachent de manière répétée leurs cheveux pour des raisons non cosmétiques.",
	"Espagne",
	"Au bon vouloir de Sam",
	"San Mames",
]
;

var id_reponse = 0

function myFunction(clicked_id) {
	var Elt = document.getElementById("question");
	Elt.textContent = liste_questions[clicked_id];
	document.getElementById(clicked_id).id = "id" + clicked_id;
	id_reponse = clicked_id;
	document.getElementById("reponse").textContent= "";
	console.log(clicked_id);
}
;

function Afficher_reponse(clicked_id) {
	var Elt = document.getElementById("reponse");
	Elt.textContent = liste_reponses[id_reponse];

}