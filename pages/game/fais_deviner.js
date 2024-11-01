// Création du contenu principal
    const container = document.createElement('div');
    container.id = 'container';
    container.style.position = "relative";
    container.style.display = "inline-block";
    
    socle.appendChild(container);

// Création et ajout de l'image
    const image = document.createElement('img');
    image.src = "../../assets/img/jeux_drapeaux.png";
    image.alt = 'Image';
    image.id = 'image'; 
    container.appendChild(image);

// Définir les zones de drop avec leurs positions
const zones = [
    { id: '0', top: '76px', left: '25px' },
    { id: '1', top: '70px', left: '145px' },
    { id: '2', top: '68px', left: '265px' },
    { id: '3', top: '69px', left: '371px' },
    { id: '4', top: '96px', left: '483px' },
    { id: '5', top: '173px', left: '579px' },
    { id: '6', top: '270px', left: '578px' },
    { id: '7', top: '371px', left: '578px' },
    { id: '8', top: '435px', left: '470px' },
    { id: '9', top: '399px', left: '371px' },
    { id: '10', top: '398px', left: '249px' },
    { id: '11', top: '388px', left: '67px' },
    { id: '12', top: '284px', left: '40px' },
];

const drapeaux = [
    "../../assets/img/drapeau/belize.png",
    "../../assets/img/drapeau/bhoutan.png",
    "../../assets/img/drapeau/brunei.png",
    "../../assets/img/drapeau/gambie.png",
    "../../assets/img/drapeau/kyrgyzstan.png",
    "../../assets/img/drapeau/lesotho.png",
    "../../assets/img/drapeau/moldavie.png",
    "../../assets/img/drapeau/mozambique.png",
    "../../assets/img/drapeau/papouasie.png",
    "../../assets/img/drapeau/paraguay.png",
    "../../assets/img/drapeau/seychelles.png",
    "../../assets/img/drapeau/stkitts.png",
    "../../assets/img/drapeau/vanuatu.png",

];

const_reponses =[
    "belize",
    "stkitts",
    "moldavie",
    "kyrgyzstan",
    "bhoutan",
    "brunei",
    "papouasie",
    "vanuatu",
    "seychelles",
    "mozambique",
    "lesotho",
    "paraguay",
    "gambie"

]


const_propositions = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13"

]

// Création et ajout des zones de drop
    zones.forEach(zone => {
        const dropZone = document.createElement('div');
        dropZone.className = 'drop-zone';
        dropZone.id = zone.id;
        dropZone.style.position = 'absolute'; // Nécessaire pour positionner avec top/left
        dropZone.style.top = zone.top;
        dropZone.style.left = zone.left;
        dropZone.style.width = '60px'; // Largeur de la zone de drop
        dropZone.style.height = '48px'; // Hauteur de la zone de drop
        dropZone.style.border = '2px dashed black'; // Style de la bordure
        dropZone.style.opacity = '0.5'; // Opacité pour la visibilité

        // Événements pour la zone de drop
        dropZone.addEventListener('dragover', (event) => {
            event.preventDefault(); // Autoriser le drop
        });

        dropZone.addEventListener('drop', (event,index) => {
            event.preventDefault(); // Prévenir le comportement par défaut

            const id = event.dataTransfer.getData('text/plain'); // Récupérer l'id de l'image
            const draggedElement = document.getElementById(id);

             // Obtenir les coordonnées de la zone de drop
            const dropZoneRect = dropZone.getBoundingClientRect();

            // Déplacer l'image à la position de la zone de drop
            draggedElement.style.position = 'absolute';
            const offsetX = -10;
            const offsetY = -10;
            draggedElement.style.top = `${dropZoneRect.top + window.scrollY + offsetY}px`;
            draggedElement.style.left = `${dropZoneRect.left + window.scrollX + offsetX}px`;

            const_propositions[dropZone.id]=id;
        
        });

        container.appendChild(dropZone);
    });

// Création du contenu principal
const container_drapeaux = document.createElement('div');
container_drapeaux.id = 'container_drapeaux';
// container_drapeaux.style.position = "relative";
// container_drapeaux.style.display = "inline-block";
container_drapeaux.style.flexWrap = "wrap"; // Permet de passer à la ligne si nécessaire
container_drapeaux.style.justifyContent = "center"; // Centrer horizontalement
container_drapeaux.style.alignItems = "center"; // Centrer verticalement (optionnel)
container_drapeaux.style.margin = "20px"; // Ajouter un espacement autour

// Création et ajout des zones de drapeaux
    drapeaux.forEach((drapeau, index) => {
    const drapeauZone = document.createElement('img');
    drapeauZone.className = 'draggable';
    drapeauZone.id = drapeaux[index].split('/').pop().split('.')[0];
    drapeauZone.src = drapeaux[index];
    drapeauZone.style.width = '60px'; // Largeur de la zone de drop
    drapeauZone.style.height = '48px'; // Hauteur de la zone de drop
    drapeauZone.style.borderRadius = '10px'; 
    drapeauZone.style.margin = '10px'; 
    container_drapeaux.appendChild(drapeauZone);

    // Événement pour le drag
    drapeauZone.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id); // Stocker l'id de l'image
    });

    container_drapeaux.appendChild(drapeauZone);

});

socle.appendChild(container_drapeaux);

function reponse() {
    var score = 0;
    for (i = 0; i< const_propositions.length; i++) {
        
        if (const_propositions[i] == const_reponses[i]) {
            console.log("here");
            score = score + 1;
            console.log(score)
        }

        
    }


    if (score == 13) {alert("Gagné !");}
        else {alert("Perdu !");
        }
}

