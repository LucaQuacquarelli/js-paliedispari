function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function isEven(value) {

	if (value % 2 == 0) {
        return true;
    } else {
		return false;
    }
}
// L'utente sceglie pari o dispari 
do {
    var selectEvenOdd = prompt("Scegli Pari o Dispari");
    console.log("L'Utente ha scelto: " + selectEvenOdd);
} while (selectEvenOdd != "pari" && selectEvenOdd != "dispari");

do {
    // e inserisce un numero da 1 a 5.
    var userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));
    console.log("Il numero scelto dall'Utente é:", userNumber);
} while ((userNumber < 1 || userNumber > 5));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var pcNumber = getRandomNumber(1, 5);
console.log("Il numero scelto dal Computer é:", pcNumber);
// Sommiamo i due numeri
var sum = userNumber + pcNumber;
console.log("La somma è:", sum);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var evenOdd = isEven(sum) 

if (evenOdd == true) {
    console.log("La somma è pari");
} else {
    console.log("La somma è dispari");
}
// Dichiariamo chi ha vinto.
if (evenOdd == true && selectEvenOdd == "pari" || evenOdd == false && selectEvenOdd == "dispari" ) {
    console.log("Hai Vinto!!!");
} else {
    console.log("Hai Perso!!!");
}