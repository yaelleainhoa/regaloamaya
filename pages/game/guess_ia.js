var images = [
"../../assets/img/guess_ia/25.png",
"../../assets/img/guess_ia/1.png",
"../../assets/img/guess_ia/2.png",
"../../assets/img/guess_ia/3.png",
"../../assets/img/guess_ia/4.png",
"../../assets/img/guess_ia/5.png",
"../../assets/img/guess_ia/6.png",
"../../assets/img/guess_ia/7.png",
"../../assets/img/guess_ia/8.png",
"../../assets/img/guess_ia/9.png",
"../../assets/img/guess_ia/10.png",
"../../assets/img/guess_ia/11.png",
"../../assets/img/guess_ia/12.png",
"../../assets/img/guess_ia/13.png",
"../../assets/img/guess_ia/14.png",
"../../assets/img/guess_ia/15.png",
"../../assets/img/guess_ia/16.png",
"../../assets/img/guess_ia/17.png",
"../../assets/img/guess_ia/18.png",
"../../assets/img/guess_ia/19.png",
"../../assets/img/guess_ia/20.png",
"../../assets/img/guess_ia/21.png",
"../../assets/img/guess_ia/22.png",
"../../assets/img/guess_ia/23.png",
"../../assets/img/guess_ia/24.png",
"../../assets/img/guess_ia/25.png",
]

var reponses = [
	"",
	"Le Roi Baudoin qui joue au tennis",
	"Robespierre mange un sandwich sur la plage",
	"Jokic qui vote",
	"Van Gogh qui fait de la moto",
	"Zidane mange une gaufre sur la Grand Place",
	"Audrey Fleurot boit une bière",
	"Tintin danse à Pampelune",
	"Robespierre fait du surf",
	"Jeanne d'Arc mange un kebab",
	"Edith Piaf fait du saut à la perche",
	"Cleopatre fait du jardinage",
	"Chirac court derrière un taureau",
	"Marie Curie mange des tapas en Espagne",
	"Sarko en prison",
	"Marie Antoinette fait de la moto",
	"Leon Blum pleure devant l'assemblée",
	"Victor Hugo prend le métro",
	"Macron & Hidalgo dans la Seine",
	"Macron à l'usine",
	"Che Guevara boit du thé matcha sur la plage",
	"Queen E fume un joint",
	"Mbappe le facteur",
	"Dany Boon fait une rando",
	"Johnny Hallyday fait des nems",
	""
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
		document.getElementById("reponse").textContent = "Réponse" ;
		document.getElementById("reponse").style.color = "white" ;


/* 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); */
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		if(id<images.length)
		{
			id++;
			raz();
		}
		document.getElementById("reponse").classList.add("btn") ;
	}

	function reponse() {
		document.getElementById("reponse").textContent = reponses[id] ;
		document.getElementById("reponse").style.style = "bold" ;
		document.getElementById("reponse").classList.remove("btn") ;
	} 