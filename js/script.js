/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//Creo due variabili per prendere l'inputbox dove l'utente inserirà la parola ed il bottone
let userWordInput = document.getElementById('userWord');
const submitBtn = document.getElementById('submitBtn');
const risultato = document.querySelector('h3');


//aggiungo evento al click al bottone richiamando la funzione
submitBtn.addEventListener('click', checkPalindrome);

//do le istruzioni alla funzione per confermare che la parola inserita sia o meno palindroma
function checkPalindrome(userWord) {
    //prendo il valore inserito dall'utente
    userWord = userWordInput.value;
    // console.log(userWord);

    let isPalindrome = true;

    //ne ricavo la lunghezza
    let wordLength = userWord.length;
    // console.log(wordLength);
    
    //creo un ciclo for per comparare la prima e l'ultima lettera, la seconda e la penultima e così via, ponendo la condizione per cui il loop si fermi a metà parola
    for (let i = 0; i < wordLength / 2 && isPalindrome; i++) {
       
        // imposto una condizione per cui se la prima lettere e l'ultima (e così via) sono diverse allora la parola non sarà palindroma e viceversa.
        if (userWord[i] !== userWord[wordLength - 1 - i]) {
            isPalindrome = false;
            risultato.innerHTML = "la parola non è palindroma"
        } else {
            risultato.innerHTML = "la parola è palindroma"
        }
        
        
    }
    

   
    
   

}
