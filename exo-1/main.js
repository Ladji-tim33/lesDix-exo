
function triRapide(col) {
    const table = document.getElementById('myTable');
    const tbody = table.querySelector('tbody');
    // convertir la liste des éléments en un tableau JavaScript.
    const myArray = Array.from(tbody.querySelectorAll('tr'));
    
    const data = myArray.map(rowLet => {
        const cell = rowLet.querySelector(`td:nth-child(${col})`);
        return cell.textContent;
     
    });

    triRapideRecursif(data)
        

    for (let i = 0; i < myArray.length; i++) {
        const cell = myArray[i].querySelector(`td:nth-child(${col})`);
        cell.textContent = data[i];
    }
}

function triRapideRecursif(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = Math.floor(Math.random() * arr.length);
    console.log(pivotIndex);
    const pivot = arr[pivotIndex];
    const tab1 = [];
    console.log(tab1);
    const tab2 = [];
    console.log(tab2);

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (arr[i] < pivot) {
            tab1.push(arr[i]);
        } else {
            tab2.push(arr[i]);
        }
    }

    triRapideRecursif(tab1);
    triRapideRecursif(tab2);

    arr.length = 0;
    arr.push(...tab1, pivot, ...tab2);
    
}









