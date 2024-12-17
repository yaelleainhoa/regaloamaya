var questions_reponses = [
    ["Question 1 - Calcular MN", 
        [
            "AM · BC / AB",
            "AB · BC / AM",
            "AM · AM / BC",
            "AB · AC / AM"
        ]
    ],
    ["Question 2 - Calcular la derivada de sin(x²)", 
        [
            "2x · cos(x²)",
            "cos(x²)",
            "2x · sin(x²)",
            "e^x"
        ]
    ],
    ["Question 3 - Calcular la integral de 1/x", 
        [
            "ln(x)",
            "1 / x²",
            "e^x",
            "x"
        ]
    ],
    ["Question 4 - Resolver el sistema: {x + y = 7, x − y = 1}", 
        [
            "x = 6, y = 1",
            "x = 1, y = 6",
            "No existe",
            "x = 5, y = 2"
        ]
    ],
    ["Question 5 - En coordenadas polares, ¿qué es ρ = 1?", 
        [
            "El círculo unidad centrado en el origen.",
            "Un círculo normal.",
            "La elipse unidad centrada en el origen.",
            "Una recta."
        ]
    ],
    ["Question 6 - En coordenadas polares, ¿qué es θ = 1?", 
        [
            "La semirrecta que sale del origen con ángulo 45°",
            "Una espiral.",
            "Un círculo de radio 1",
            "Una recta."
        ]
    ],
    ["Question 7 - ¿Cuál es la fórmula de la transferencia de calor?", 
        [
            "Q = m × c × ∆T",
            "T = m × c × ∆Q",
            "Q = ∆m × c × T",
            "Q = m × ∆c × T"
        ]
    ],
    ["Question 8 - ¿Cuál es la fórmula de la primera ley de la termodinámica?", 
        [
            "Q = ∆U + W",
            "∆Q = ∆U + ∆W",
            "Q = U + W",
            "Q = U + ∆W"
        ]
    ],
    ["Question 9 - HCl + NaOH → ???", 
        [
            "NaCl + H₂O",
            "NH₂l + ClO",
            "NaClH + HO",
            "NaCl + H₄O₂ − 2H₂O"
        ]
    ],
    ["Question 10 - ¿Cómo se llama la fórmula lógica: {p ⇒ q, p} ⇒ q", 
        [
            "Modus tollendo tollens",
            "Modus ponendo ponens",
            "Alea jacta est",
            "Tu quoque fili mi"
        ]
],
	["Question 1 - Produit uniquement dans les fermes du 15 avril au 15 novembre, et à la condition expresse que les vaches puissent être nourries à satiété d’herbe pâturée. Ce fromage tire son nom d’une cité médiévale accrochée à 930 m d’altitude au cœur des monts du Cantal.", 
		[
			"Le Gaperon",
			"Le Cantal",
			"La Fourme",
			"Le Salers"
		]
	],
	["Question 4 - Rendu célèbre à la table de Louis XIV par le Maréchal de France Henri de la Ferté-Sénecterre.", 
		[
			"La Fourme d’Ambert",
			"Carré d’Aurillac",
			"Le Saint Nectaire",
			"La Fourme de Montbrison"
		]
	],
	["Question 5 - Le gaperon tire son nom ...", 
		[
			"Du Gapençais, fromage de Gap",
			"Du mot auvergnat 'gapa' qui signifie babeurre",
			"De l’anglais 'gap', car il est issu d’une erreur",
			"De GAPO, Groupe archéologique des Pyrénées occidentales"
		]
	],
	["Question 6 - Véritable village composé de plus de soixante-dix pièces disposées sur cinq étages, reliées entre eux par des couloirs et des escaliers en colimaçon.", 
		[
			"Des crottes jaunâtres",
			"L’Abbatiale romane Saint-Austremoine",
			"Les grottes de Jonas",
			"La Basilique Notre-Dame d’Orcival"
		]
	],
	["Question 7 - Le plus grand centre ... d’Europe se trouve en Auvergne :", 
		[
			"Bouddhiste",
			"Évangélique",
			"Catholique",
			"Musulman"
		]
	],
	["Question 8 - Ce vieux village médiéval, abritant un four à pain, une chapelle, le site fortifié d’un château, un moulin, un bief, ... a été abandonné par l’homme il y a 70 ans.", 
		[
			"Lavaudieu",
			"Blesle",
			"Issandolanges",
			"Usson"
		]
	],
	["Question 9 - Renommé pour sa moutarde séculaire, ses maisons à colombages, ses ruelles pavées.", 
		[
			"Montpeyroux",
			"Usson",
			"Charroux",
			"Chiengeône"
		]
	],
	["Question 10 - Station thermale élégante nichée au cœur des montagnes, invitant à la détente et à la régénération.", 
		[
			"La Bouboule",
			"La Bourboule",
			"La Gorgone",
			"Saint-Éloy-les-Mines"
		]
	],
	["Question 12 - La 'Chaîne des Puys d’Auvergne' est l’ensemble volcanique le plus diversifié d’Europe. Mais il n’abrite pas de volcans de type ...", 
		[
			"De maars",
			"Strombolien",
			"Plinien",
			"Peléen"
		]
	],
	["Question 13 - On distingue deux grands types d’éruptions: explosives et effusives. Une éruption effusive ...", 
		[
			"Est liée à une hausse de décibel",
			"Rejette de la lave fluide",
			"Émet des particules, appelées 'passions'",
			"Libère une grande quantité de gaz"
		]
	],
	["Question 14 - La 'Chaîne des Puys d’Auvergne' abrite des volcans à éruptions ...", 
		[
			"Aknéyennes",
			"Effusives",
			"Explosives",
			"Cutanées"
		]
	],
	["Question 15 - Aujourd’hui 26 décembre 2024, il y a un train 'panoramique des dômes' toutes les ...", 
		[
			"Heures",
			"Il ne circule pas",
			"20 minutes",
			"40 minutes"
		]
	],
	["Question 16 - Le peuplement de l’Auvergne est attesté dès le Paléolithique. Les vestiges de ... représenteraient la plus ancienne trace d’habitat en Europe.", 
		[
			"Averne",
			"Alesia",
			"Gergovie",
			"Chilhac"
		]
	],
]



var id = 0;
var test = "";
document.getElementById("previous").style.backgroundColor = "transparent";
document.getElementById("previous").style.color = "transparent";

document.getElementById("next").style.backgroundColor = "#668c6f";
document.getElementById("next").style.color = "white";

/* Navigation entre les questions */

	function raz() {
	if(id === questions_reponses.length - 1) {
		document.getElementById("next").style.backgroundColor = "transparent";
		document.getElementById("next").style.color = "transparent";}
	else {
		document.getElementById("next").style.backgroundColor = "#668c6f";
		document.getElementById("next").style.color = "#fff";}

	document.getElementById("idduo").style.display="flex";
	document.getElementById("idcarre").style.display="flex";
	document.getElementById("idcash").style.display="flex";
	document.getElementById("duo").style.display="none";
	document.getElementById("carre").style.display="none";
	document.getElementById("cash").style.display="none";

	for (var i = 0 ; i < 2 ; i ++ ) {
		var Elt = "duo0" + i;
		document.getElementById(Elt).style.backgroundColor = "#E3D9CF";
		document.getElementById(Elt).style.boxShadow="0px 0px 0px";
	}

	for (var i = 0 ; i < 4 ; i ++ ) {
		var EltC = "car0" + i;
		document.getElementById(EltC).style.backgroundColor = "#E3D9CF";
		document.getElementById(EltC).style.boxShadow="0px 0px 0px";
	}

	document.getElementById("cas00").textContent = "Quelle est votre réponse ?";
	document.getElementById("cas00").style.backgroundColor = "#E3D9CF";
	document.getElementById("cas00").style.boxShadow="0px 0px 0px";
	}
	function precedent () {
		id--;
		raz();
		afficher_question();}

	function suivant () {
		id++;
		raz();
		afficher_question();}

	function afficher_question() {
		console.log(questions_reponses, id)
		document.getElementById("question").textContent = questions_reponses[id][0];
	}
/* Duo, carré ou Cash */

	function carre_gen() {
		var ord = [0, 1, 2, 3];
		var prop = [-1, -1, -1, -1];
		for (var j = 0 ; j < ord.length ; j ++ )
		{
			var Elt = Math.floor(Math.random() * (4));
			while (prop[Elt] >=0 ) {Elt = Math.floor(Math.random() * (4));}
			prop[Elt] = ord[j];
		};
		return prop;}

	function duo_gen() {
		var ord = [0, 1];
		var prop = [-1, -1];
		for (var j = 0 ; j < ord.length ; j ++ )
		{
			var Elt = Math.floor(Math.random() * (2));
			while (prop[Elt] >=0 ) {Elt = Math.floor(Math.random() * (2));}
			prop[Elt] = ord[j];
		}
		return prop;
		}


	function duo() {
		document.getElementById("idduo").style.display="none";
		document.getElementById("idcarre").style.display="none";
		document.getElementById("idcash").style.display="none";
		document.getElementById("duo").style.display="flex";
		/* Gestion aléatoire des indices du tableau*/
			var res = duo_gen();
			for (var j = 0 ; j < 2 ; j ++) {
				var resid = "duo0" + j ; 
				var k = res[j];
				document.getElementById(resid).textContent = questions_reponses[id][1][k];
				if (res[j] === 0) {document.getElementById(resid).setAttribute("name","bonne-réponse");}
				else {document.getElementById(resid).setAttribute("name"," ");}
		}	
		test = "duo";
	}

	function carre() {
		document.getElementById("idduo").style.display="none";
		document.getElementById("idcarre").style.display="none";
		document.getElementById("idcash").style.display="none";
		document.getElementById("carre").style.display="flex";
		/* Gestion aléatoire des indices du tableau*/
			var res = carre_gen();
			for (var j = 0 ; j < 4 ; j ++) {
			var resid = "car0" + j ; 
			var k = res[j];
			document.getElementById(resid).textContent = questions_reponses[id][1][k];;
			if (res[j] === 0) {document.getElementById(resid).setAttribute("name","bonne-réponse");}
			else {document.getElementById(resid).setAttribute("name"," ");}
		}
		test = "car";	
	}

	function cash() {
		document.getElementById("idduo").style.display="none";
		document.getElementById("idcarre").style.display="none";
		document.getElementById("idcash").style.display="none";
		document.getElementById("cash").style.display="flex";
		test = "cas";
		}

/* Afficher les résultats */

	function resultatcash() {
		var reponse ="";
		var mauvaiseReponse = "";
		document.getElementById("cas00").textContent = questions_reponses[id][1][0];
		document.getElementById("cas00").style.backgroundColor = "#45C49C";
		document.getElementById("cas00").style.boxShadow="5px 5px 10px";
	}


	function resultat(clicked_id) 
		{	
			var EltListe = document.querySelectorAll('[name="bonne-réponse"]');
			var bonneReponse = "";

			if (document.getElementById(clicked_id).textContent === questions_reponses[id][1][0]) 
					{document.getElementById(clicked_id).style.backgroundColor = "#45C49C";
					document.getElementById(clicked_id).style.boxShadow="5px 5px 10px";}
			

			else {
				if (EltListe.length <= 1 )
					{
						bonneReponse = EltListe[0].id;
					}

				else 
					{
					var Elt0 = EltListe[0].getAttribute('id');
					var Elt1 = EltListe[1].getAttribute('id');
					if (test === Elt0.substr(0,3)) {bonneReponse = Elt0;}
					else {bonneReponse = Elt1;}
					}
				document.getElementById(clicked_id).style.backgroundColor = "#FF776B";
				document.getElementById(clicked_id).style.boxShadow="5px 5px 10px";
				document.getElementById(bonneReponse).style.boxShadow="5px 5px 10px";
				document.getElementById(bonneReponse).style.backgroundColor = "#45C49C";

			}
		}		

afficher_question()