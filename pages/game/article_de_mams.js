var images = [
	"../../assets/img/article_de_mams/rules.png",
	"../../assets/img/article_de_mams/article1.png",
    "../../assets/img/article_de_mams/article2.png",
    "../../assets/img/article_de_mams/article3.png",
    "../../assets/img/article_de_mams/article4.png",
    "../../assets/img/article_de_mams/article5.png",
    "../../assets/img/article_de_mams/article6.png",
	"../../assets/img/end.png",
]

var reponses = [
	"",
	"Vrai! \n 'Macron s hometown voters look set to shun the president'",
	"Faux! C'est juste une image de poux",
	"Vrai JAPANESE FILM FESTIVAL ONLINE 2024 en France",
	"Vrai : Des « tiques géantes » porteuses d’un virus progressent en France, voici pourquoi c’est inquiétant",
	"Faux : Les 10 principales contre-vérités du RN",
	"Faux : McFly et Carlito: L’Histoire du Bad Buzz avec “TikTok Girl”",
	"",
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
		if(id<images.length)
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