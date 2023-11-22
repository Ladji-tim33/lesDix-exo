let form = document.querySelector('#myForm')

// Ecouter le modification du Nom
form.prenom.addEventListener('change', function() {
    validPrenom(this);
})

// Ecouter le modification du Numero
form.numero.addEventListener('change', function() {
    validNumero(this);
})

// Ecouter le modification de l'email
form.email.addEventListener('change', function() {
    validEmail(this);
})

// Ecouter le modification du password
form.password.addEventListener('change', function() {
    validPassword(this);
})

// Ecouter le soumission du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validEmail(form.email) && validPassword(form.password) && validPrenom(form.prenom) && validNumero(form.numero)) {
        form.submit()
    }
})

// ************** Validation Prenom **********
const validPrenom = function (inputPrenom) {

    let message;
    let valide = false;

    if(inputPrenom.value.length < 3) {
        message = 'le Nom doit contenir au moin 3 caracters';
    }
    // au moin 1 majuscule
    else if (!/[A-Z]/.test(inputPrenom.value)) {
        message = 'le Nom doit contenir au moin 1 majuscule';
    }

    // au moin 1 minuscule
    else if (!/[a-z]/.test(inputPrenom.value)) {
        message = 'le mot de passe doit contenir au moin 1 minuscule';
    }

    else{ 
        message = '';
        valide = true
    }

     //  recupérer le small
     let small = inputPrenom.nextElementSibling;

     // expression regulier
     if(valide){
         small.innerHTML ='Nom Valide'
         small.classList.remove('text-danger')
         small.classList.add('text-success')
         return true
     }else{
         small.innerHTML = message;
         small.classList.remove('text-success')
         small.classList.add('text-danger')
         return false
     }

}

// ************** Validation Numero**********
const validNumero = function (inputNumero) {

    let message;
    let valide = false;

    
    if(inputNumero.value.length < 12) {
        message = 'le numero doit contenir au moin 12 caracters';
    }


    else if(!/[0-9]\s/.test(inputNumero.value)) {
        message = 'le numero doit contenir que des chiffres';
    }

    else{ 
        message = '';
        valide = true
    }
 
    let small = inputNumero.nextElementSibling;

    if(valide){
        small.innerHTML ='Numero Valide'
        small.classList.remove('text-danger')
        small.classList.add('text-success')
        return true
    }else{
        small.innerHTML = message;
        small.classList.remove('text-success')
        small.classList.add('text-danger')
        return false
    }

    
}

// ************** Validation Email ************

const validEmail = function (inputEamil) {
    // creation de le expression regulier pour email
    let regExpEmail = new RegExp (
        '^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'  
    );
    //  recupérer le small
    let small = inputEamil.nextElementSibling;

    // expression regulier
    
     if(regExpEmail.test(inputEamil.value)){
        small.innerHTML ='Adress Valide'
        small.classList.remove('text-danger')
        small.classList.add('text-success')
        return true
    }else{
        small.innerHTML = 'Adress non Valide'
        small.classList.remove('text-success')
        small.classList.add('text-danger')
        return false
    }
};



// ************** Validation Passeword ************

const validPassword = function (inputPasseword) {
    let message;
    let valide = false;
    // au moin 7 caracters
    if(inputPasseword.value.length < 7) {
        message = 'le mot de passe doit contenir au moin 7 caracters';
    }
    // au moin 1 majuscule
    else if (!/[A-Z]/.test(inputPasseword.value)) {
        message = 'le mot de passe doit contenir au moin 1 majuscule';
    }

    // au moin 1 minuscule
    else if (!/[a-z]/.test(inputPasseword.value)) {
        message = 'le mot de passe doit contenir au moin 1 minuscule';
    }

    // au moin 1 chiffre
    else if(!/[0-9]/.test(inputPasseword.value)) {
        message = 'le mot de passe doit contenir au moin 1 chiffre';
    }

    // mot de passe valide
    else{ 
        message = '';
        valide = true
    }


     //  recupérer le small
     let small = inputPasseword.nextElementSibling;

     // expression regulier
     if(valide){
         small.innerHTML ='Mot de passe Valide'
         small.classList.remove('text-danger')
         small.classList.add('text-success')
         return true
     }else{
         small.innerHTML = message;
         small.classList.remove('text-success')
         small.classList.add('text-danger')
         return false
     }
    
}