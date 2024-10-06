const images = [
        // Aita images
    "../../assets/img/fais_deviner/aita0.png",
    "../../assets/img/fais_deviner/aita1.png",
    "../../assets/img/fais_deviner/aita2.png",
    "../../assets/img/fais_deviner/aita3.png",
    "../../assets/img/fais_deviner/aita4.png",
    "../../assets/img/fais_deviner/aita5.png",
    
	// Aitor images
	"../../assets/img/fais_deviner/kimlong0.png",
	"../../assets/img/fais_deviner/kimlong1.png",
	"../../assets/img/fais_deviner/kimlong2.png",
	"../../assets/img/fais_deviner/kimlong3.png",
	"../../assets/img/fais_deviner/kimlong4.png",
	"../../assets/img/fais_deviner/kimlong5.png",

    // Sam images
    "../../assets/img/fais_deviner/sam0.png",
    "../../assets/img/fais_deviner/sam1.png",
    "../../assets/img/fais_deviner/sam2.png",
    "../../assets/img/fais_deviner/sam3.png",
    "../../assets/img/fais_deviner/sam4.png",
    "../../assets/img/fais_deviner/sam5.png",
    
    // Amaya images
    "../../assets/img/fais_deviner/amayo0.png",
    "../../assets/img/fais_deviner/amayo1.png",
    "../../assets/img/fais_deviner/amayo2.png",
    "../../assets/img/fais_deviner/amayo3.png",
    "../../assets/img/fais_deviner/amayo4.png",
    "../../assets/img/fais_deviner/amayo5.png",
    
    // Yaelle images
    "../../assets/img/fais_deviner/yayou0.png",
    "../../assets/img/fais_deviner/yayou1.png",
    "../../assets/img/fais_deviner/yayou2.png",
    "../../assets/img/fais_deviner/yayou3.png",
    "../../assets/img/fais_deviner/yayou4.png",
    "../../assets/img/fais_deviner/yayou5.png",
];


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
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