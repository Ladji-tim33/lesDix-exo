
let display = document.getElementById("display" );
let lim= document.getElementById("lim" );
let calculation = "";

// on appel notre appendValue
function appendValue(value){
     // on met notre value dans la calculation
    calculation += value;
    // Afficher notre calculation dans le display(input)
    display.value = calculation;
}

// on appel notre cleardisplay 
function cleardisplay(){
    // chanque touche CE on supprime tous
    calculation = "";
    display.value = calculation;
    
}
// on appel notre delet
function delet(){
    // chanque touche c on supprime une 
    calculation = calculation.slice(0, -1);
    display.value = calculation;
}

// on appel notre calaculate
function calaculate(){
    // try instruction définit un bloc de code à exécuter
    try{
    // touche (=) on utilise un fonction qui est eval pour evluer le contenu du écran
        let result = eval(calculation);
        display.value = result;
        calculation = result;
        lim.value = result


    //catch instruction définit un bloc de code pour gérer toute erreur.
    } catch(error){
        display.value = "Error";
        calculation = "";
     
    }
    
}



