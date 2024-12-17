
tableau_reponse = [
[0, "Christian Braun"],
[1, "Michael Porter Jr"],
[5, "Kentavious Caldwell-Pope"],
[6, "DeAndre Jordan"],
[7, "Reggie Jackson"],
[8, "Peyton Watson"],
[9, "Davon Reed"],
[10, "Jack White"],
[11, "Bruce Brown"],
[13, "Thomas Bryant"],
[14, "Ish Smith"],
[15, "Nikola Jokic"],
[22, "Zeke Nnaji"],
[27, "Jamal Murray"],
[31, "Vlatko Cancar"],
[32, "Jeff Gree"],
[50, "Aaron Gordon"]
]

for (let i = 0; i < tableau_reponse.length; i++)
{
	const tr = document.createElement('div'); 
	tr.classList.add("line");
	const tdNumero = document.createElement('div'); 
	tdNumero.classList.add("cell");
	const tdNom = document.createElement('input');
	tdNom.classList.add("cell");

	tdNumero.textContent = tableau_reponse[i][0]; 
	tdNom.addEventListener('keydown', (event) => {
		if (event.key === 'Enter' && tdNom.value.toLowerCase() == tableau_reponse[i][1].toLowerCase()) {
			tdNumero.textContent = tableau_reponse[i][1];
			tdNumero.style.backgroundColor = "#C6E5BA";
		}
	});

	if (i==21)  {tdNumero.textContent="GOAT"}

	tr.appendChild(tdNumero); 
	tr.appendChild(tdNom); 

	document.getElementById('answers_tab').appendChild(tr); 
};

document.getElementById('image').addEventListener("click", function() {
	if (this.requestFullscreen) {
	  this.requestFullscreen();
	} else if (this.msRequestFullscreen) {
	  this.msRequestFullscreen();
	} else if (this.mozRequestFullScreen) {
	  this.mozRequestFullScreen();
	} else if (this.webkitRequestFullscreen) {
	  this.webkitRequestFullscreen();
	}
  });

function Valider() {
	document.getElementById('image').src = "../../assets/img/frise_friends/solution.png" 
}