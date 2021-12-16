/* Chiedere all’utente di inserire una parola Creare
 una funzione per capire se la parola inserita è palindroma */

// Funzione per avere una parola invertita tramite ciclo for inverso

function wordReverse(wordToReverse) {
  let result = "";
  for (i = wordToReverse.length - 1; i >= 0; i--) {
    result += wordToReverse[i];
  }
  return result;
}

// funzione per richiamare il risultato

function palindrome(word, wordReverse, outputHtml) {
  if (word === wordReverse) {
    outputHtml.innerHTML = `${word} è palindromo`;
  } else {
    outputHtml.innerHTML = `${word} non è palindromo`;
  }
}

// Prompt

const wordRequest = prompt("Inserisci una parola");

// associo una nuova variabile alla funzione calcolata nella parola inserita dall'utente

let reverseWord = wordReverse(wordRequest);

//div hook

const hookHtml = document.getElementById("hook");

// ottengo il risultato

palindrome(wordRequest, reverseWord, hookHtml);
