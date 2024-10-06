

manches = []
let manchesNb = 9
for(let i =0; i<manchesNb; i++)
{
	let currentManche = [];
	for(let j = 0; j < 3; j++)
	{
		currentManche.push("../../assets/img/guess_ai/manche"+String(i+1)+"-indice"+String(j+1)+".jpg")
	}
	manches.push(currentManche)
}


var mancheActuelle = 0

for(let i = 1; i <= manchesNb ; i++)
	{
		this.document.getElementById("manche-select").innerHTML += '<option value='+i + '> Manche ' + String(i) + "</option>"
	}

document.getElementById("manche-select").addEventListener 
("change", function() 
	{
	var selectedValue = document.getElementById("manche-select").value;
	console.log(selectedValue)
	console.log("selected : "+selectedValue)
	mancheActuelle = selectedValue 
	if (selectedValue==10) {
		document.getElementById("image").setAttribute("src", "../../assets/img/guess_image_indices/manche11-indice1.jpg");	}

	if (selectedValue!=10) {
		console.log("here");
		document.getElementById("image").setAttribute("src", manches[mancheActuelle][0]) ;
	}
	
	}
)

function Afficher_image(id) {
	var imgIndex = id-1

	if(mancheActuelle!=10)
	{
		document.getElementById("image").setAttribute("src", manches[mancheActuelle][imgIndex]) ;
	}

	else {
		
		document.getElementById("image").setAttribute("src", "../../assets/img/guess_image_indices/manche11-indice"+String(id)+".jpg") ;
	
	}
}

