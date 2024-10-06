let texts = 
[
	[
		"Banh mi", 
		"Porc mariné\n" +
		"Sauce soja\n" +
		"Vinaigre de riz\n" +
		"Huile de sésame\n" +
		"Ail\n" +
		"Gingembre frais\n" +
		"Miel\n" +
		"Carottes\n" +
		"Concombres\n" +
		"Radis\n" +
		"Coriandre fraîche\n" +
		"Pain baguette\n" +
		"Mayonnaise\n" +
		"Piment frais\n" +
		"Sel\n" +
		"Sucre\n" +
		"Vinaigre de riz\n" +
		"Eau\n"
	],
	[
		"Kalimotxo", 
		"Vin rouge\n" +
		"Coca-Cola\n" +
		"Glaçons\n"
	],
	[
		"Albondigas", 
		"Boeuf haché\n" +
		"Porc haché\n" +
		"Ail\n" +
		"Oignon\n" +
		"Persil frais\n" +
		"Œuf\n" +
		"Chapelure\n" +
		"Lait\n" +
		"Sel\n" +
		"Poivre\n" +
		"Huile d'olive\n" +
		"Tomates\n" +
		"Bouillon de viande\n" +
		"Vin blanc\n" +
		"Paprika\n" +
		"Cumin\n"
	],
	[
		"Aubergines à la parmigiana",
		"Aubergines\n" +
		"Tomates\n" +
		"Mozzarella\n" +
		"Parmesan\n" +
		"Basilic frais\n" +
		"Ail\n" +
		"Oignon\n" +
		"Huile d'olive\n" +
		"Sel\n" +
		"Poivre\n"
	],
	[
		"Roulé au pavot (Makowiec)",
		"Farine\n" +
		"Sucre\n" +
		"Levure\n" +
		"Lait\n" +
		"Beurre\n" +
		"Œufs\n" +
		"Graines de pavot\n" +
		"Miel\n" +
		"Raisins secs\n" +
		"Zeste de citron\n" +
		"Vanille\n" +
		"Sel\n"
	],
	[
		"Cornes de gazelle",
		"Farine\n" +
		"Beurre\n" +
		"Sucre glace\n" +
		"Eau de fleur d'oranger\n" +
		"Amandes moulues\n" +
		"Sucre semoule\n" +
		"Cannelle\n" +
		"Levure chimique\n" +
		"Sel\n" +
		"Zeste d'orange\n" +
		"Oeuf (pour dorer)\n"
	]
];

var wordsToGuess = [];
var currentPageIndex = 0;

function setGames()
{
	for(let i = 0; i<texts.length; i++)
	{
		var page = document.createElement("div");
		

		var title = document.createElement("h1");
		title.id = "title"+String(i);
		title.classList.add("invisible");
		var currentTitleToGuess = splitSentence(texts[i][0]);
		
		var text = document.createElement("div");
		text.id = "page"+String(i);
		text.classList.add("invisible")
		var currentWordsToGuess = splitSentence(texts[i][1]);

		page.appendChild(title);
		page.appendChild(text);
		document.getElementById("pages").appendChild(page);

		wordsToGuess.push([currentTitleToGuess, currentWordsToGuess]);

		var currentSelect = document.createElement("option")
		currentSelect.value = i;
		currentSelect.text = "Manche "+String(i+1);
		document.getElementById("select").appendChild(currentSelect)

		createHiddenItems(currentTitleToGuess,i, "title");
		createHiddenItems(currentWordsToGuess,i, "page");
	}
	document.getElementById("page"+String(currentPageIndex)).classList.remove("invisible");
	document.getElementById("title"+String(currentPageIndex)).classList.remove("invisible");
}

function changePage(index)
{
	currentPageIndex = index;
	for(let i = 0; i<texts.length; i++)
	{
		document.getElementById("page"+String(i)).classList.add("invisible");
		document.getElementById("title"+String(i)).classList.add("invisible");
	}
	document.getElementById("page"+String(currentPageIndex)).classList.remove("invisible");
	document.getElementById("title"+String(currentPageIndex)).classList.remove("invisible");
}

function splitSentence(sentence) {
    var pattern = /([\wÀ-ÖØ-öø-ÿ]+|[ ,])/gu;
    var result = sentence.split(pattern).filter(function (element) {
        return element !== ''; 
    });
    return result;
}

function findWordIndices(array, word) {
	var indices = [];
	for (var i = 0; i < array.length; i++) {
	  if (array[i].toLowerCase() === word) {
		indices.push(i);
	  }
	}
	return indices;
  }

function isWord(elt)
{
	var wordPattern = /[\wÀ-ÖØ-öø-ÿ]+/;
	return wordPattern.test(elt);
}

function createHiddenItems(separateWords, pageNb, eltType)
{
	for(var i = 0; i < separateWords.length ; i++)
	{
		if(separateWords[i] == "\n")
		{
			document.getElementById(eltType+String(pageNb)).appendChild(document.createElement("br"));
		}
		else{
			var span = document.createElement("span");
			var word = document.createTextNode(separateWords[i]);
			span.appendChild(word);
			document.getElementById(eltType+String(pageNb)).appendChild(span);
			if(isWord(separateWords[i]))
			{
				span.classList.add("inconnu");
			}
			else
			{
				span.classList.add("connu");
			}
			span.classList.add("index"+String(i));
		}

	}
}

window.addEventListener("keydown", function(e) {
	var touche = e.keyCode;
	var mot = document.getElementById("prop").value;
	if (touche === 13) {
		verifier(mot, wordsToGuess[currentPageIndex][0], 0); 
		verifier(mot, wordsToGuess[currentPageIndex][1], 1); 
		document.getElementById("prop").value ="";
	}
}, true);

document.getElementById("select").addEventListener("change", function(e)
{
	var selectedValue = document.getElementById("select").value;
	changePage(selectedValue)
});

function verifier(input, text, indexType) 
{
	var eltType = indexType == 0 ? "#title" : "#page"

	justGuessedElts = document.querySelectorAll(eltType+String(currentPageIndex)+' .justGuessed');

	Array.from(justGuessedElts).forEach(function(elt)
	{
		elt.classList.remove("justGuessed")
	})

	var wordToTest = input.toLowerCase();
	var wordsGuessed = findWordIndices(text, wordToTest);

	for(let i = 0; i < wordsGuessed.length; i++)
	{
		document.querySelectorAll(eltType+String(currentPageIndex)+' .inconnu.index'+String(wordsGuessed[i]))[0].classList.replace("inconnu", "justGuessed")
	}
}


function devoiler_reponse() 
{
	var spanElements = document.querySelectorAll('#page'+String(currentPageIndex)+' .inconnu');

	Array.from(spanElements).forEach(function(elt)
	{
		elt.classList.remove("inconnu")
	})

	spanElements = document.querySelectorAll('#title'+String(currentPageIndex)+' .inconnu');

	Array.from(spanElements).forEach(function(elt)
	{
		elt.classList.remove("inconnu")
	})

	justGuessedElts = document.querySelectorAll('.justGuessed');

	Array.from(justGuessedElts).forEach(function(elt)
	{
		elt.classList.remove("justGuessed")
	})
	
}

setGames();