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
	"Où se déroule cette scène ?",
	"One Piece obviously mais dans quelle langue ",
	"Quelle est le dernier mot de la série ?",
	"Dans quelle série peut-on entendre cette musique ?",
	" Qui parle ? ",
	" Qui va-t-on entendre après ?",
	" Quelle saison ces bloopers ? ",
	" Quelle est cette série ? Nom de la vidéo : The XXXX Cast Reacts to Major Season One Moments ",
	" Que se passe-t-il à la fin de la scène ? ",
	" Dans quelle série peut-on entendre ces bloopers ? ",
	"Dans quelle série peut-on entendre cette chanson ?",
	" Qui a gagné l'Emmy Award en 2003 ? ",
	" Qui va appeler Ross après cette scène ? ",
	" Qui se marie ? ",
	" Quelle série ? Quelle chanson ? ",
	" Qui parle ? ",
	" Dans quelle série entend-t-on cette musique ? ",
	" Kameto donne son avis que le Gear ... ? ",
	" Qui joue ? Qui aime ?",
	" Où se déroule cette scène ? ",
	" Qui chante ? ",
	" Qui joue ? Quel instrument ? ",
	" Qui chante ? ",
	" Quand se déroule cette scène ? ",
	" Qui chante ? ",
]

var reponses = [
	"Cristina, Meredith, Joe et Georges",
	"Sur un bateau",
	"Euskera",
	"Where?",
	"Desperate Housewives",
	" Karen McCluskey ",
	" McFly & Carlito ",
	" 9 ",
	" One Piece ",
	" Demande en mariage de Peralta ",
	" Desperate Housewives ",
	"The Office",
	" Tony Shalhoub ",
	" Ross Yells at a Condom Company After Rachel Tells Him She's Pregnant ",
	" Matthew & April ",
	" B99 & I Want It That Wat ",
	" Cris the Queen (Yang) ",
	" Mentalist ",
	" Gear 5 ",
	" Ross joue & Phoebe aime ",
	" Cage d'escaliers ",
	" Viola Davis ",
	" Ross joue de la cornemuse ",
	"Freddy Gladieux",
	" Lors du mariage de Cristina et Burke",
	"BigFront & Bully & leur dar",
]