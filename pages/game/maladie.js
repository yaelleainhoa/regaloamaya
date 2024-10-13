var images = [
	"../../assets/img/maladie/rules.png",
	"../../assets/img/maladie/patient1.png",
    "../../assets/img/maladie/patient2.png",
    "../../assets/img/maladie/patient3.png",
    "../../assets/img/maladie/patient4.png",
    "../../assets/img/maladie/patient5.png",
    "../../assets/img/maladie/patient6.png",
    "../../assets/img/maladie/patient7.png",
    "../../assets/img/maladie/patient8.png",
    "../../assets/img/maladie/patient9.png",
    "../../assets/img/maladie/patient10.png",
    "../../assets/img/maladie/patient11.png",
    "../../assets/img/maladie/patient12.png",
    "../../assets/img/maladie/patient13.png",
	"../../assets/img/end.png",
]

var reponses = [
	"",
	"On pense qu'elle est schizophrène alors qu'elle avait un trou dans l'oreille qui la rendait hypersensible aux bruits",
	"Elle meurt à cause d'un hoquet oups",
	"Les 3 gonz ont un accident de voiture et celle du milieu perd la mémoire à court terme",
	"Elle veut faire une opération pour grossir ses fesses",
	"Neurocysticercose (vers dans le cerveau)",
	"Maladie de Kawasaki",
	"Femme enceinte séropositive qui veut avorter par peur de transmettre le sida à son enfant",
	"Il a un sapin dans le poumon",
	"Souhaite se faire ligaturer les trompes dans le dos de son mari..",
	"A pris trop d'antibiotiques donc son mari doit lui faire une greffe de CACA",
	"Veut se faire opérer pour être séparé de son frère siamois",
	"Insensible à la douleur",
	"Doit se faire opérer par Dereck pour son essai clinique, sa maladie lui cause des hallucinations et lui crée un amoureux parfait qu'elle attend avant de se faire opérer (et non en fait il existe et elle meurt en pensant qu'il n'était que le produit de son imagination RIP)",
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