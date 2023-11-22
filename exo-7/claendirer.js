/* Calendrier Tableau De Bord */
const daysTag = document.querySelector(".days")
const currentDate = document.querySelector(".current-date")
const prevNextIcon = document.querySelectorAll(".icons span");
let el = document.getElementById("myModal");
const list = document.querySelector("#list")
const divAfiche = document.getElementById('div-afiche')
// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// stocker le nom complet de tous les mois dans un tableau
const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet",
    "Août", "Septembre", "Octobre", "Novembre", "Decembre" ];
    let storedDate    
let firstDayofMonth
const renderCalendar = () => {
    firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // obtenir le premier jour du mois
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // obtenir la dernière date du mois
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // obtenir le dernier jour du mois
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // obtenir la dernière date du mois précédent
    let liTag = "";

    // création du (li) du mois précédent derniers jours
    for (let i = firstDayofMonth; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        const isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}" onclick="handleDateClick(${i})">${i}</li>`;


    }

     // création du premier jour du mois prochain
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    // en passant le mois et l'année en cours comme texte de date actuel
    currentDate.innerText = `${months[currMonth]} ${currYear}`; 
    daysTag.innerHTML = liTag;

     storedDate = JSON.parse(localStorage.getItem('selectedDate'));

    if (storedDate && storedDate.currMonth === currMonth && storedDate.currYear === currYear) {
        const selectedDay = storedDate.daye;
        const clickedDate = document.querySelector(`.days li:nth-child(${selectedDay + firstDayofMonth })`);
        clickedDate.classList.add('selected');
    }

}

renderCalendar();

let clickedDate

// function cliker pour les dates
function handleDateClick(daye) {

    localStorage.setItem('selectedDate', JSON.stringify({ daye, currMonth, currYear }));

    console.log(`Date sélectionnée : ${daye}/${currMonth + 1}/${currYear}`);

    list.innerHTML = localStorage.getItem("stock");
   

    // on recuoére tous ce qui est dans  notre class delete
    const spanDels = document.querySelectorAll(".delete");

    for (let span of spanDels) {
        // ajoute l'evenement del
        span.onclick = () => del(span.parentElement)

    };

    const buttonModif = document.querySelectorAll(".modif");

    for (let butModif of buttonModif) {
       

        butModif.addEventListener('click', () => {
            myinput1.value = myTitre.textContent
            myinput2.value = myPara.textContent

            del(myElement)
        })

    };

    nosTache.style.display = (list.innerHTML == "") ? "block" : "none";

    form.onsubmit = () => {
        const myElement = document.createElement("li");
        const myTitre = document.createElement('h3')
        const myPara = document.createElement("p");
        const myButton2 = document.createElement("button");
        const myButton1 = document.createElement("button");

        //  Ajouter une  class
        myButton2.classList.add("delete");
        myButton1.classList.add("modif");

        myButton2.onclick = () => del(myElement);
        myButton1.addEventListener('click', () => {
            myinput1.value = myTitre.textContent
            myinput2.value = myPara.textContent
            localStorage.setItem("stock", list.innerHTML)
            JSON.parse(localStorage.getItem('selectedDate'))
            del(myElement)
        })

        myTitre.innerHTML = myinput1.value;
        myPara.innerHTML = myinput2.value;

        myButton2.textContent = "Suprimer";
        myButton1.textContent = "Modifier";
        myButton2.style.marginLeft = "4px"
        myButton1.style.backgroundColor = "green"
        myButton2.style.backgroundColor = "red"


        myElement.appendChild(myTitre);
        myElement.appendChild(myPara);
        myElement.appendChild(myButton1);
        myElement.appendChild(myButton2);
        myElement.appendChild(divAfiche)
        list.appendChild(myElement);

        myinput1.value = "";
        myinput2.value = "";

        // Récupérer tous les éléments li
        const allDates = document.querySelectorAll('.days li [isToday]');

        // Retirer la classe 'selected' de tous les éléments li existants
        allDates.forEach(date => {
            date.classList.remove('selected');
        });

        // Sélectionner l'élément li correspondant à la date cliquée et lui ajouter la classe 'selected'
        clickedDate = document.querySelector(`.days li:nth-child(${daye + 3})`);
        console.log(clickedDate);
        clickedDate.classList.add('selected');


        nosTache.style.display = "none";

        //  stoker nos doner
        localStorage.setItem("stock", list.innerHTML)
        

        return false;
    }

    function del(element) {
        element.remove();
        clickedDate.classList.remove('selected');
        nosTache.style.display = (list.innerHTML == "") ? "block" : "none";
        localStorage.removeItem('selectedDate')

        // enregistre la nouvelle list
        localStorage.setItem("stock", list.innerHTML)
    }

    

    el.style.display = "block";
}



span.onclick = function () {
    el.style.display = "none";

}


document.onclick = function (event) {
    if (event.target == el) {
        el.style.display = "none";
    }
}

// les icons avant et apres
prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) { 
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); 
            currMonth = date.getMonth(); 
        } else {
            date = new Date(); 
        }
        renderCalendar(); 
    });
});




