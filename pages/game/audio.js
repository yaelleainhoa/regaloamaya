var i = 100;
var bonneslettres = 'guitarefolkbsdpnq';
var compteur = 0


function Lancer_musique(id) {
	i = id
	document.getElementById("reponse").textContent="RÉPONSE";
	document.getElementById("enonce").textContent=regles[id];
	lettre = document.getElementById(i).textContent.toLowerCase();
	document.getElementById("audio").setAttribute("src",sons[i])
}


function bonne_reponse()
{
	document.getElementById(i).style.color = "white";
	document.getElementById(i).style.backgroundColor = "#C1E1C1";
	

		
}

function reponse () {
	document.getElementById("reponse").textContent=reponses[i];
}


function mauvaise_reponse(){

	
	document.getElementById(i).style.color = "white";
	document.getElementById(i).style.backgroundColor = "#FF5733";

}


var sons = [
	"../../assets/son/son0.mp3",
	"../../assets/son/son1.mp3",
	"../../assets/son/son2.mp3",
	"../../assets/son/son3.mp3",
	"../../assets/son/son4.mp3",
	"../../assets/son/son5.mp3",
	"../../assets/son/son6.mp3",
	"../../assets/son/son7.mp3",
	"../../assets/son/son8.mp3",
	"../../assets/son/son9.mp3",
	"../../assets/son/son10.mp3",
	"../../assets/son/son11.mp3",
	"../../assets/son/son12.mp3",
	"../../assets/son/son13.mp3",
	"../../assets/son/son14.mp3",
	"../../assets/son/son15.mp3",
	"../../assets/son/son16.mp3",
	"../../assets/son/son17.mp3",
	"../../assets/son/son18.mp3",
	"../../assets/son/son19.mp3",
	"../../assets/son/son20.mp3",
	"../../assets/son/son21.mp3",
	"../../assets/son/son22.mp3",
	"../../assets/son/son23.mp3",
	"../../assets/son/son24.mp3",
	"../../assets/son/son25.mp3",

]

var regles = [
	"Qui est au centre de ce reportage ?",
	"Quel groupe peut-on entendre chanter ?",
	"De quelle région viennent ces chanteurs ?",
	"Quelle série ?",
	"Qui fait partie de ce groupe ?",
	"A qui pose la question le journaliste ?",
	"Qui chante ?",
	"Qui sont les trois personnes qui parlent ?",
	"Qui chante ? (2 duo + 2 chanteurs)",
	"Qui parle ?",
	"Complète les paroles !",
	"Contre qui jouait les Nuggets le 4 Janvier 2024 ?",
	"Complète les paroles !",
	"Lors la cérémonie de clôture de quels JO, avons nous pu entendre cette chanson ?",
	"Quel est ce match ?",
	"A qui parle la personne qu'on entend ?",
	"Quel est ce match ?",
	"Quel film ?",
	"Quel jeu vidéo ?",
	"Qui parle ?",
	"Quel sport ?",
	"Quel mois ?",
	"Complétez les paroles",
	"Qui parle ?",
	"Qui parle ?",
	"Quel instrument ?",
]

var reponses = [
	"Nadal",
	"La sélection masculine espagnole de basket championne d'Europe en 2022.",
	"Normandie - Orelsan, Médine, Keen V et Petit Biscuit",
	"Les Sopranos",
	"Mikel",
	"Iñaki Williams",
	"Muniain et Grizou",
	"Bernalicis, Guiraud et Ruffin",
	"Pidi, Michou, Squeezie & Joyca, Mcfly & Carlito ",
	"Rudy Gobert",
	"Et pour un monde meilleur ! & Pour l'amour du maillot que vous portez sur le dos.",
	"Golden State Warriors",
	"J'ai traîné trop souvent, j'aimerai m'en aller. Ils savent le quart d'ma vie mais ne font que parler",
	"JO Londres 2012",
	"EAST SEMIFINALS - GAME 7TOR wins series 4-3",
	"Sebastian",
	"Alemania Vs España - Semifinal Mundial Sudáfrica 2010",
	"Bienvenue chez les Ch'tis",
	"Soccer Life",
	"Asier Villalibre",
	"Rugby",
	"Mars 2020",
	"Cuando yo soñaba un mundo al reves.",
	"Nadal",
	"Peso Pluma",
	"Txalaparta",
]