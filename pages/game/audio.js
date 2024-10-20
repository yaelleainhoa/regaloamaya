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
	"Qui parle ? (4 personnes)",
	"Où se déroule sur un bateau ?",
	"One Piece obviously mais dans quelle langue ",
	"Quelle est le dernier mot de la série ?",
]

var reponses = [
	"Cristina, Meredith, Joe et Georges",
	"Sur un bateau",
	"Euskera",
	"Where?",
]