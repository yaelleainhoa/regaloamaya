var equipe1 = [
	"XX est comme un poisson dans l’eau en société. Il est doué pour se faire remarquer.",
	"XX a un sens du devoir important et aime rendre service. Et est exigeant(e) et n’aime ni l’imprévu, ni perdre son temps.",
	"XX est consciencieux(euse), discrèt(e) et très agréable à côtoyer et a un sens inné de l’organisation et du devoir.",
	"XX est dynamique et courageux. De tempérament passionné, il est très actif et rempli d’énergie.",
	"XX se distingue surtout par son côté introverti et réservé et possède une intelligence remarquable.",
	];


var dates1 = [
	"Martin",
	"Samuel",
	"Yaëlle",
	"Aitor",
	"Amaya",
	];

var equipe2 = [
	"Pluie nocturne",
	"Le nom de Dieu",
	"Guerrier",
	"Chèvre sauvage",
	"Le père de tous les Basques",
	];

var dates2 = [
	"Amaya",
	"Samuel",
	"Martin",
	"Yaëlle",
	"Aitor",
	];

var equipe3 = [
	"Sous le calme et le sérieux apparents de votre personnalité, couve un volcan loin d’être éteint.",
	"Vous êtes sensible, doué(e) pour le mystère, le secret, et vous savez très bien décrypter ce qui se cache derrière les apparences.",
	"Vous aimez voyager, bouger, rencontrer de nouvelles têtes et rien ne vous ennuie plus que la routine.",
	"Vous aimez voyager, bouger, rencontrer de nouvelles têtes et rien ne vous ennuie plus que la routine. (le/la plus jeune des 2)",
	"Vous êtes de celles qu’on invite toujours, persuadé que vous saurez mettre une bonne ambiance. Et on a raison !",
	];

var dates3 = [
	"Aitor",
	"Amaya",
	"Samuel",
	"Yaëlle",
	"Martin",];

var equipe4 = [
	"Doux, calme, poli, patient, intelligents et chics.",
	"Prudent et loyal.",
	"Créatif, changeant et séducteur.",
	"Rêveur, sensible et artiste.",
	"Travailleur, très romantique, patient et calme.",
	];

var dates4 = [
	"Yaëlle",
	"Amaya",
	"Sam",
	"Aitatxo",
	"Aitor",
	];

for (var i = 0; i < 5; i++) {
	var id = "perso1" + i;
	document.getElementById(id).textContent = equipe1[i];
	var id = "perso2" + i;
	document.getElementById(id).textContent = equipe2[i];
	var id = "perso3" + i;
	document.getElementById(id).textContent = equipe3[i];
	var id = "perso4" + i;
	document.getElementById(id).textContent = equipe4[i];

}

function Valider1() {
	for (var i = 0; i < equipe1.length; i++) {
		var Elt = "res1" + i;
		var idElt = "age1" + i;
		if (document.getElementById(Elt).value === dates1[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";};
		document.getElementById(idElt).textContent = dates1[i];

		
}}
;

function Valider2() {
	for (var i = 0; i < equipe2.length; i++) {
		var Elt = "res2" + i;
		var idElt = "age2" + i;
		if (document.getElementById(Elt).value === dates2[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";}
		document.getElementById(idElt).textContent = dates2[i];

}};



function Valider3() {
	for (var i = 0; i < equipe3.length; i++) {
		var Elt = "res3" + i;
		var idElt = "age3" + i;
		if (document.getElementById(Elt).value === dates3[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";}
		document.getElementById(idElt).textContent = dates3[i];

}};


function Valider4() {
	for (var i = 0; i < equipe4.length; i++) {
		var Elt = "res4" + i;
		var idElt = "age4" + i;
		if (document.getElementById(Elt).value === dates4[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";}
		document.getElementById(idElt).textContent = dates4[i];

}};
