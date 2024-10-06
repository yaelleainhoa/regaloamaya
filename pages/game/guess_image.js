var images = [
	"../../assets/img/guess_image/rules.png",
	"../../assets/img/guess_image/q0.png",
	"../../assets/img/guess_image/r0.png",
	"../../assets/img/guess_image/q1.png",
	"../../assets/img/guess_image/r1.png",
	"../../assets/img/guess_image/q2.png",
	"../../assets/img/guess_image/r2.png",
	"../../assets/img/guess_image/q3.png",
	"../../assets/img/guess_image/r3.png",
	"../../assets/img/guess_image/q4.png",
	"../../assets/img/guess_image/r4.png",
	"../../assets/img/guess_image/q5.png",
	"../../assets/img/guess_image/r5.png",
	"../../assets/img/guess_image/q6.png",
	"../../assets/img/guess_image/r6.png",
	"../../assets/img/guess_image/q7.png",
	"../../assets/img/guess_image/r7.png",
	"../../assets/img/guess_image/q8.png",
	"../../assets/img/guess_image/r8.png",
	"../../assets/img/guess_image/q9.png",
	"../../assets/img/guess_image/r9.png",
	"../../assets/img/guess_image/q10.png",
	"../../assets/img/guess_image/r10.png",
	"../../assets/img/guess_image/q11.png",
	"../../assets/img/guess_image/r11.png",
	"../../assets/img/guess_image/q12.png",
	"../../assets/img/guess_image/r12.png",
	"../../assets/img/guess_image/q13.png",
	"../../assets/img/guess_image/r13.png",
	"../../assets/img/guess_image/q14.png",
	"../../assets/img/guess_image/r14.png",
	"../../assets/img/guess_image/q15.png",
	"../../assets/img/guess_image/r15.png",
	"../../assets/img/guess_image/q16.png",
	"../../assets/img/guess_image/r16.png",
	"../../assets/img/guess_image/q17.png",
	"../../assets/img/guess_image/r17.png",
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
		if(id<images.length)
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