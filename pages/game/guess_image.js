var images = [
	"../../assets/img/guess_wardrobe/rules.png",
	"../../assets/img/guess_wardrobe/q0.png",
	"../../assets/img/guess_wardrobe/r0.png",
	"../../assets/img/guess_wardrobe/q1.png",
	"../../assets/img/guess_wardrobe/r1.png",
	"../../assets/img/guess_wardrobe/q2.png",
	"../../assets/img/guess_wardrobe/r2.png",
	"../../assets/img/guess_wardrobe/q3.png",
	"../../assets/img/guess_wardrobe/r3.png",
	"../../assets/img/guess_wardrobe/q4.png",
	"../../assets/img/guess_wardrobe/r4.png",
	"../../assets/img/guess_wardrobe/q5.png",
	"../../assets/img/guess_wardrobe/r5.png",
	"../../assets/img/guess_wardrobe/q6.png",
	"../../assets/img/guess_wardrobe/r6.png",
	"../../assets/img/guess_wardrobe/q7.png",
	"../../assets/img/guess_wardrobe/r7.png",
	"../../assets/img/guess_wardrobe/q8.png",
	"../../assets/img/guess_wardrobe/r8.png",
	"../../assets/img/guess_wardrobe/q9.png",
	"../../assets/img/guess_wardrobe/r9.png",
	"../../assets/img/guess_wardrobe/q10.png",
	"../../assets/img/guess_wardrobe/r10.png",
	"../../assets/img/guess_wardrobe/q11.png",
	"../../assets/img/guess_wardrobe/r11.png",
	"../../assets/img/guess_wardrobe/q12.png",
	"../../assets/img/guess_wardrobe/r12.png",
	"../../assets/img/guess_wardrobe/q13.png",
	"../../assets/img/guess_wardrobe/r13.png",
	"../../assets/img/guess_wardrobe/q14.png",
	"../../assets/img/guess_wardrobe/r14.png",
	"../../assets/img/guess_wardrobe/q15.png",
	"../../assets/img/guess_wardrobe/r15.png",
	"../../assets/img/guess_wardrobe/q16.png",
	"../../assets/img/guess_wardrobe/r16.png",
	"../../assets/img/guess_wardrobe/q17.png",
	"../../assets/img/guess_wardrobe/r17.png",
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