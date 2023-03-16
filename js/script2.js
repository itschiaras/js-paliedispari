/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

function getRndNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


let result = document.getElementById('risultato');

document.getElementById('gioca').addEventListener('click', function (e) {
    e.preventDefault();
    
    const oddEven = document.getElementById('scelta').value;
    const myNumber = parseInt(document.getElementById('numero').value) || 0;
    const pcNumber = getRndNumber(1, 5);
    console.log(pcNumber);
    const sum = myNumber + pcNumber;
    console.log(isEven(sum));

    if ((oddEven === "even" && isEven(sum)) || (oddEven === "odd" && !isEven(sum))) {
        result.innerHTML = `Il computer ha fatto ${pcNumber}, hai vinto`;
    } else {
        result.innerHTML = `Il computer ha fatto ${pcNumber}, hai perso`;
    }
})








