var images = [
	"../../assets/img/denver/rules.png",
	"../../assets/img/denver/q0.png",
	"../../assets/img/denver/r0.png",
	"../../assets/img/denver/q1.png",
	"../../assets/img/denver/r1.png",
	"../../assets/img/denver/q2.png",
	"../../assets/img/denver/r2.png",
	"../../assets/img/denver/q3.png",
	"../../assets/img/denver/r3.png",
	"../../assets/img/denver/q4.png",
	"../../assets/img/denver/r4.png",
	"../../assets/img/denver/q5.png",
	"../../assets/img/denver/r5.png",
	"../../assets/img/denver/q6.png",
	"../../assets/img/denver/r6.png",
	"../../assets/img/denver/q7.png",
	"../../assets/img/denver/r7.png",
	"../../assets/img/denver/q8.png",
	"../../assets/img/denver/r8.png",
	"../../assets/img/denver/q9.png",
	"../../assets/img/denver/r9.png",
	"../../assets/img/denver/q10.png",
	"../../assets/img/denver/r10.png",
	"../../assets/img/denver/q11.png",
	"../../assets/img/denver/r11.png",
	"../../assets/img/denver/q12.png",
	"../../assets/img/denver/r12.png",
	"../../assets/img/denver/q13.png",
	"../../assets/img/denver/r13.png",
	"../../assets/img/denver/q14.png",
	"../../assets/img/denver/r14.png",
	"../../assets/img/denver/q15.png",
	"../../assets/img/denver/r15.png",
	"../../assets/img/denver/q16.png",
	"../../assets/img/denver/r16.png",
	"../../assets/img/denver/q17.png",
	"../../assets/img/denver/r17.png",
	"../../assets/img/denver/q18.png",
	"../../assets/img/denver/r18.png",
	"../../assets/img/denver/q19.png",
	"../../assets/img/denver/r19.png",
	"../../assets/img/denver/q20.png",
	"../../assets/img/denver/r20.png",
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