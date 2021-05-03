// Creare una funzione per capire se la parola inserita è palindroma
function invertWords(word) {
    var invertedWords = word.split('').reverse().join('');
    return invertedWords; 
}

// Chiedere all'utente di inserire una parola
var userWord = (prompt("Inserisci una parola"));
var invertedWord = invertWords(userWord)

// Verificare se la parola è palindroma
if (userWord == invertedWord) {
    console.log("La parola é palindroma");
} else {
    console.log("La parola NON é palindroma");
}

// SOLUZIONE SENZA FUNCTION:

// var splitWord = userWord.split('');
// console.log(splitWord);

// splitWord = splitWord.reverse();
// console.log(splitWord);

// var reverseWord = splitWord.join('');
// console.log(reverseWord);

