var images = [
	"../../assets/img/guess_flag_mix/q0.png",
	"../../assets/img/guess_flag_mix/r0.png",
	"../../assets/img/guess_flag_mix/q1.png",
	"../../assets/img/guess_flag_mix/r1.png",
	"../../assets/img/guess_flag_mix/q2.png",
	"../../assets/img/guess_flag_mix/r2.png",
	"../../assets/img/guess_flag_mix/q3.png",
	"../../assets/img/guess_flag_mix/r3.png",
	"../../assets/img/guess_flag_mix/q4.png",
	"../../assets/img/guess_flag_mix/r4.png",
	"../../assets/img/guess_flag_mix/q5.png",
	"../../assets/img/guess_flag_mix/r5.png",
	"../../assets/img/guess_flag_mix/q6.png",
	"../../assets/img/guess_flag_mix/r6.png",
	"../../assets/img/guess_flag_mix/q7.png",
	"../../assets/img/guess_flag_mix/r7.png",
	"../../assets/img/end.png",
]

var reponses = [
	"",
	"",
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
/* 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); */
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
	}

/* 	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.fontFamily = "Police1" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;

	} */