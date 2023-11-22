const texte = document.querySelector('.texte');

// input font size
function font(e) {
    let value = e.value
    texte.style.fontSize = value + "px"
}

// input color
function color(e) {
    let value = e.value
    texte.style.color = value ;
}

const outils = document.querySelectorAll('.btn');

// evenement pour chaque button 

outils.forEach(Elements => {
    Elements.addEventListener('click', () => {
        // recuperer les élément dans ta elémént
    let myElements = Elements.dataset['element']

    // condition
    if(myElements == 'createlink' || myElements == 'insererImage'){
        let url = prompt('Entrez le lien','http//')
        document.execCommand(myElements,false,url)
    }else{
        // excute les commende
      document.execCommand(myElements,false,null)
    }
    
    })
});