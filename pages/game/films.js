var images = [
	"../../assets/img/films/rienadeclarer.jpg",
	"../../assets/img/films/loup.jpg",
	"../../assets/img/films/alibi.jpg",
	"../../assets/img/films/vienschezmoi.jpg",
	"../../assets/img/films/five.jpg",
	"../../assets/img/films/leprenom.jpg",
	"../../assets/img/films/superheromalgrelui.jpg",
	"../../assets/img/films/barbecue.jpg",
	"../../assets/img/films/supercondriaque.jpeg",
	"../../assets/img/films/bienvenuechti.jpg",
	"../../assets/img/films/bernie.jpg",
	"../../assets/img/films/dikkenek.jpg",
	"../../assets/img/films/lesvisiteurs.jpg",
	"../../assets/img/films/dieu.jpg",
	"../../assets/img/films/lol.jpg",
	"../../assets/img/films/intouchables.jpg",
	"../../assets/img/films/larnacoeur.jpg",
	"../../assets/img/films/oss117.jpg",
	"../../assets/img/films/asterix.jpg",
	"../../assets/img/films/nosjoursheureux.jpeg",
	"../../assets/img/end.png",
]

var reponses = [
	"Rien à déclarer",
	"Le grand méchant loup",
	"Alibi.com (le 1 ou 2 jsp)",
	"Viens chez moi j'habite chez une copine",
	"Five",
	"Le prénom",
	"Super héros malgré lui",
	"Barbecue",
	"Supercondriaque",
	"Bienvenue chez les Ch'tis",
	"Bernie",
	"Dikkenek",
	"Les Visiteurs",
	"Qu'est ce qu'on a fait au bon Dieu",
	"LOL",
	"Intouchables",
	"L'anacœur",
	"OSS117",
	"Astérix de Canet là",
	"Nos jours heureux",
]

/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); 
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		if(id<images.length-1)
		{
			id++;
			raz();
		}
		document.getElementById("solution").classList.add("btn") ;
	}

 	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.style = "bold" ;
		document.getElementById("solution").classList.remove("btn") ;
	}