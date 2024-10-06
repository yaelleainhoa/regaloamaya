var theme = [
	"L'intrus est un évènement qui ne s'est pas produit en 1963",
	"L'intrus est l'évènement qui ne s'est pas produit un 5 juillet",
	"L'intrus ne porte pas le prénom d'un de tes enfants ?",
	"L'intrus n'est pas né au Vietnam"
	]

var manche = [
	/* Première manche */ 
	"Décès de Edith Piaf", 
	"Mise en place du téléphone rouge entre USA et Kremlin ?", 
	"Assassinat de JFK",  
	"Débarquement de la baie des cochons",  
	"Le bonze vietnamien Thich Quang Duc s’immole à Saïgon, pour protester contre les persécutions anti-bouddhistes du régime de Ngô Dinh Diêm", 
	"Execution en Espagne du communiste Julian Grimau", 
	"Ouverture du procès d'Auschwitz à Francfort",  
	"Naissance de James Denton (Mike dans Desperate Housewives)", 
	
	/* Deuxième manche */
	"Fraternisation de 14", 
	"Naissance de Gilles Lellouche", 
	"Naissance de Dolly la brebis",  
	"Indépendance de l'Algérie",  
	"Début d'une parution régulière de l'hebdomadaire satirique français Le Canard enchaîné", 
	"Les Vieilles Canailles font leur 17e et dernier concert à Carcassonne qui fut aussi le tout dernier de Johnny Hallyday qui décèdera pile cinq mois plus tard", 
	"Prise d'Alger en 1830",  
	"Sortie de Moi, Moche et Méchant 3", 
	
	
	/* Troisième manche */
	"Joueur/euse de foot ayant joué à l'Athletic dont le passe temps était d'être finaliste de la coupe d'Espagne de 2009", 
	"Président(e) de l'Assemblée Nationale sous le gouvernement ASSASSIN de MACRON", 
	"Joueur/euse de rugby né(e) le 12 janvier 1993 à Saint-Jean-de-Luz",  
	"Joue un Jedi possédant un sabre violet dans Star Wars",  
	"Chanteur/euse qui a gagné Operación Triunfo", 
	"Surnom de Irantzu Gallastegi Sodupe, membre émérite d'un groupe terroriste", 
	"Mannequin ayant joué dans le film de son ex mari un(e) client(e) énervé(e) à La Poste",  
	"Rappeur/euse mexicain(e) aka El ReyLa Reina de los Corridos Tumbados BFF (Best Friend Forever) de Peso Pluma", 

	/* Quatrième manche */
	"Chantal Goya", 
	"Frédéric Chau", 
	"Marguerite Duras",  
	"Amanda Lear",  
	"Charles Sobhraj dit Le Serpent", 
	"Hom Nguyen", 
	"Frédérique Hoschedé",  
	"Phạm Đăng Trí", ]

var incorrect = [
	3,
	0,
	2,
	6]

var id  ="";

var nbrManche = 0;

document.getElementById("nom_manche").textContent = theme[0];
	var j = 0;
	for (var i = 0 ; i < 8 ; i++)
		{
			document.getElementById(i).classList.add("answer");
			document.getElementById(i).textContent = manche[j + i];
		}

		

function selection_manche(clicked_manche) {
	nbrManche = clicked_manche;
	id = clicked_manche.substr(6, 1); 
	document.getElementById("nom_manche").textContent = theme[id];
	var j = 8 * id;
	for (var i = 0 ; i < 8 ; i++)
		{
			document.getElementById(i).classList.remove("backgroundTrue");
			document.getElementById(i).classList.remove("backgroundFalse");
			document.getElementById(i).classList.add("answer");
			document.getElementById(i).textContent = manche[j + i];
		}
	nbrManche = parseInt(id, 4);
}

function correct(clicked_id) 
{
		var j = 8 * nbrManche;
		clicked_id = parseInt(clicked_id, 10);
		var Elt = document.getElementById(clicked_id);
		
		if (clicked_id === incorrect[nbrManche])
			{
				Elt.classList.remove("answer");
				Elt.classList.add("backgroundFalse");
				Elt.style.width = "500px";
			}

		else
			{
				Elt.classList.remove("answer");
				Elt.classList.add("backgroundTrue");
				Elt.style.width = "500px";
			}

			if (nbrManche !=2) {document.getElementById(clicked_id).textContent = manche[j + clicked_id] ;}
		
}