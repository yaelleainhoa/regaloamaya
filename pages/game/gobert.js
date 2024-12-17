var images = [
	"../../assets/img/gobert/rules.png",
	"../../assets/img/gobert/q0.png",
	"../../assets/img/gobert/r0.jpeg",
	"../../assets/img/gobert/q1.png",
	"../../assets/img/gobert/r1.jpeg",
	"../../assets/img/gobert/q2.png",
	"../../assets/img/gobert/r2.jpeg",
	"../../assets/img/gobert/q3.png",
	"../../assets/img/gobert/r3.jpeg",
	"../../assets/img/gobert/q4.png",
	"../../assets/img/gobert/r4.jpeg",
	"../../assets/img/gobert/q5.png",
	"../../assets/img/gobert/r5.jpeg",
	"../../assets/img/gobert/q6.png",
	"../../assets/img/gobert/r6.jpeg",
	"../../assets/img/gobert/q7.png",
	"../../assets/img/gobert/r7.jpeg",
	"../../assets/img/gobert/q8.png",
	"../../assets/img/gobert/r8.jpeg",
	"../../assets/img/gobert/q9.png",
	"../../assets/img/gobert/r9.jpeg",
	"../../assets/img/gobert/q10.png",
	"../../assets/img/gobert/r10.jpeg",
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