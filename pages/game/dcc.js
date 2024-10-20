var questions_reponses = [
	["Décathlon - Dans quelle ville se trouve le siège social ?", 
	[
		"Villeneuve d'Ascq",
		"Bayonne",
		"Tourcoing",
		"Marc en Baroeul"
	]],
	["Décathlon - Quelle est la marque préférée de Central Cee ?", 
		[
			"Quechua",
			"Prada",
			"Dior",
			"Kalenji"
	]],
	["Cuisine - Quelle est la spécialité de Kevin dans The Office ?", 
		[
			"Chili",
			"Bolognaise",
			"Cheesecake",
			"Tacos"
	]],
	["Cuisine - De quel dessert Bree essaie de voler la recette chez Katherine ?", 
		[
			"Tarte au citron meringuée",
			"Gâteau renversé à l'ananas",
			"Muffins aux myrtilles",
			"Cheesecake à la fraise"
	]],
	["Cuisine - Quel est le plat qu'aime le - Luffy selon Oda ?", 
		[
			"Tarte aux cerises",
			"Salade",
			"Gigot d'agneau",
			"Prune séchée"
	]],
	["Cuisine - Que mangent Chandler et Rachel dans un couloir ?", 
		[
			"Cheesecake",
			"Pizza",
			"Mac and Cheese",
			"Diplomate"
	]],
	["LOL - Qui est présent dans LOL et dans LOL ?", 
		[
			"Pierre Niney",
			"Eric Judor",
			"Jinx",
			"Vi"
	]],
	["LOL - Quel excellent acteur de la bande à Fifi a terminé 3e de la 1ère saison de LOL qui rit sort ?", 
		[
			"Tarek Boudali",
			"Gérard Jugnot",
			"Philippe Lacheau (fifi)",
			"Julien Arruti"
	]],
	["LOL - Dans quelle ville partent en voyage scolaire Lola et ses copains dans le film LOL ?", 
		[
			"Londres",
			"Barcelone",
			"Berlin",
			"New York"
	]],
	["LOL - Que signifie l'acronyme LOL dans le sens MDR ?", 
		[
			"Laughing Out Loud",
			"Loose Our Lord",
			"Lost Our Laugh",
			"Love Our Lambs"
	]],
	["LOL - Qui joue le rôle de Lola dans LOL USA ?", 
		[
			"Miley Cyrus",
			"Demi Moore",
			"Julia Robers",
			"Taylor Swift"
	]],
	["Politique - Dans l'annonce pour trouver des collocs, quelle condition impose Meredith Grey ?", 
		[
			"Ne pas Voter Bush",
			"Voter Obama",
			"Etre démocrate",
			"Voter aux élections"
	]],
	["Politique - Qui a joué dans Days of our Lives (comme Joey finalement) ?", 
		[
			"Donald Trump",
			"Arnold Schwazenegger",
			"Cynthia Nixon",
			"Kal Penn"
	]],
	["Politique - Pour quelles élections se présente Bree à la fin de Desperate Housewives ?", 
		[
			"Chambre Basse des Représentants du Kentucky",
			"Chambre Haute du corps législatif du Kentucky (Sénat)",
			"Présidente de l'état du Kentucky",
			"Présidente des USA rien que ça"
	]],
	["Politique - Avant d'aider Annalise Keating, d'où a été virée Olivia Pope ?", 
		[
			"Maison Blanche",
			"Maire de Washington",
			"Cour suprême",
			"Respo com de l'ESBVA"
	]],
	["Sport - Quelle est l'équipe de basketball préférée de Joey Tribiani ?", 
		[
			"Les NY Knicks",
			"Les Brooklyn Nets",
			"Les Los Angles Lakers",
			"Les Chicago Bulls"
	]],
	["Sport - De quel personnage de B99 l'acteur a joué en NFL ?", 
		[
			"Terry",
			"Holt",
			"Hitchcock",
			"La Vautour (Vulture)"
	]],
	["Sport - Complète ce nom de film qu'on adorait petits: 'Joue la comme ...'", 
		[
			"Beckham",
			"Mbappé",
			"Pelé",
			"Maradonna"
	]],
	["Sport - A combien de joueurs par équipe se joue le Boufbowl ?", 
		[
			"5",
			"6",
			"7",
			"8"
	]],
	["Art - Dans quel endroit Moriarty vole les joyaux de la couronne dans Sherlock ?", 
		[
			"Jewel House",
			"British Museum",
			"Victoria & Albert Museum",
			"Buckigham Palace"
	]],
	["Art - De quel medium est inspiré le nom de série 'Grey's anatomy' ?", 
		[
			"Livre",
			"Chanson",
			"Film",
			"Photographie"
	]],
	["Art - Dans les romans tirés de la série Monk, de quel point de vue suit on l'histoire ?", 
		[
			"Natalie",
			"Adrien Monk",
			"La fille de Trudy",
			"Stottlemeyer"
	]]
];


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