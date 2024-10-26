document.getElementById("masquer").style.display = "none";

var liste_questions = [
	"0",
	"Quel est le nom des 5 océans ?",
	"De quelle ville Meredith arrive-t-elle au début de la série ?",
	"Lorsque Kakashi fait passer le test des clochettes à sa toute jeune équipe, quel est le but caché de cette épreuve ?",
	"Qui sauve Hawkeye et un enfant dans Avengers : L'Ère d'Ultron ?",
	"Comment commence la dispute entre Meredith et Cristina dans la saison 10 ?",
	"Quelle est la hiérarchie de la Marine en partant du Vice-Amiral au Matelot ?",
	"Lorsque Steve Rogers se réveille à la fin de Captain America : First Avengers, il entend un match à la radio. En quelle année s'est déroulé ce même match ?",
	" Quel mot est inscrit sur le tshirt que portent Robin et Franky en mmatching outif couple ?",
	"Quel Supernovae a la prime la plus élevée au moment de leur arrivée sur l'Archipel Sabaody ?",
	"Dans le premier film Avengers, quand Black Widow se bat contre les Chitauri, elle dit que ça lui rappelle...",
	"Qu'est-il écrit en premier sur le post-it de Meredith et Derek ?",
	"Dans quel arc apparaît pour la première fois Nico Robin ? (Si t'es chaud le chapitre, le tome ou l'épisode)",
	"Que pourchasse l'équipe Ebisu lors du retour de Naruto à Konoha ?",
	"Si Robin faisait partie de la famille, entre quels membres de la famille fêterions nous son anniversaire ?",
	"Comment s'appelle la mère de Peter Quill ?",
	"Quel est le nom de la monnaie dans Naruto ?",
	"Sur Tequila Wolf, le numéro d'esclave de Robin est le...",
	"Pourquoi le mariage de Ben et Bailey a-t-il été repoussé ?",
	"Lors du combat de l'équipe 7 avec Haku et Zabuza, quel est l'élément déclencheur pour que Naruto active son mode Kyubi ?",
	"Avec quel Supernovae, Luffy a dû s'allier durant l'arc Whole Cake ?",
	]
;


var liste_reponses = [
	"0",
	"East Blue, North Blue, West Blue, South Blue et Grand Line",
	"Boston",
	"Vérifier la cohésion des membres de l'équipe",
	"Pietro Maximoff/Vif-Argent",
	"Parce que Cristina demande à Bailey de prendre la place de Meredith pour la transplantation d'un foie",
	"Vice-Amiral, Sous-Amiral, Contre-Amiral, Colonel, Capitaine, Enseigne, Lieutenant, Sergent-Chef, Sergent et Matelot",
	"1941",
	"Corrida",
	"Eustass Kid",
	"Budapest",
	"S'aimer même quand on se déteste",
	"Arc Whiskey Peak (epiosde 67, chapitre 114, tome 13",
	"Un chat",
	" Entre Yayou et papa",
	"Meredith",
	"Ryō",
	"3926",
	"Parce qu'Adèle la femme de Richard doit être opérée d'urgence",
	"Il pense que Sasuke est mort",
	"Capone Bege",
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