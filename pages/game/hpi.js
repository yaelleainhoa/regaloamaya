let nbAnswer =10;
images = []
for(let i = 0; i < nbAnswer; i++)
{
	images.push("../../assets/img/HPI/victime"+String(i)+".png")
}

bonnes_reponses = []
for(let i = 0; i < nbAnswer; i++)
{
	bonnes_reponses.push("../../assets/img/HPI/tueur"+String(i)+".png")
}

let reponses = bonnes_reponses
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

score = []
for(let i = 0; i < nbAnswer; i++)
{
	score.push("")
}

function setFunctionsAndCurves(){
	var imagesToDropArea = document.getElementById("imagesToDrop");
	var imagesToDragArea = document.getElementById("imagesToDrag");
	for (let i = 0 ; i < reponses.length ; i++)
	{
		var imageToDropArea = document.createElement("div");
		var imageToDropImg = document.createElement("img");
		imageToDropImg.classList.add("image");
		imageToDropImg.setAttribute("src", images[i]);
		imageToDropImg.addEventListener("click", function() {
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
		imageToDropArea.setAttribute("id", "prop"+i);
		imageToDropArea.setAttribute("ondrop", "dragDrop(event)");
		imageToDropArea.setAttribute("ondragover", "allowDrop(event)");
		imageToDropArea.classList.add("imageToDrop");
		imageToDropArea.appendChild(imageToDropImg);

		imagesToDropArea.appendChild(imageToDropArea);


		var imageToDragArea = document.createElement("img");
		imageToDragArea.setAttribute("src", reponses[i]);
		imageToDragArea.setAttribute("id","drag"+i);
		imageToDragArea.setAttribute("ondrop","dragDrop(event)");
		imageToDragArea.setAttribute("ondragover","allowDrop(event)");
		imageToDragArea.setAttribute("draggable","true");
		imageToDragArea.setAttribute("ondragstart","dragStart(event)");
		imageToDragArea.classList.add("imageToDrag");
		imageToDragArea.classList.add("draggable");

		imagesToDragArea.appendChild(imageToDragArea);
	}
}

setFunctionsAndCurves();

var reponse_select = ""
var image_selectionne = 10
var indice = 0

function allowDrop(ev) {
	ev.preventDefault();
}
function dragStart(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function dragDrop(ev) {
	ev.preventDefault();

	reponse_select = ev.target.id
	if(reponse_select.includes("drag"))
		reponse_select = ""
	indice = reponse_select.substr(-1)

	if(reponse_select)
	{
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
		ev.target.style.paddingBottom = "5px";
	}

	imageToDrag_selected = document.getElementById(data).src;
	score[indice] = imageToDrag_selected
	console.log(data + " /// " +imageToDrag_selected);
	console.log(score)
}


function resultat_final()
{
	var carreau = ""
	var imagesToDragArea = document.getElementById("imagesToDrag");
	imagesToDragArea.style.display = 'none';

	for (let i = 0 ; i < reponses.length ; i++) 
	{
		var imageToDropArea = document.getElementById("prop"+String(i));
		imageToDropArea.innerHTML = "";
		var prop = document.createElement("img");
		prop.setAttribute("src", images[i]);
		var answer = document.createElement("img");
		answer.setAttribute("src", bonnes_reponses[i]);
		imageToDropArea.appendChild(prop);
		imageToDropArea.appendChild(answer);

		// console.log(bonnes_reponses[i])
		// console.log(score)
		if (bonnes_reponses[i].split("/").pop() == score[i].split("/").pop()) 
		{

			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#C6E5BA"
		}

		else 
		{
			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#FF6961"

			var goodAnswer = document.createElement("div");
			goodAnswer.innerImage = bonnes_reponses[i];
			goodAnswer.classList.add("imageToDrag");
			goodAnswer.style.color="white";
			document.getElementById(carreau).appendChild(goodAnswer);
		}
		
	}
}