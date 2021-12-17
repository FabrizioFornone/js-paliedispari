/* Chiedere all’utente di inserire una parola Creare
 una funzione per capire se la parola inserita è palindroma */

// Funzione per avere una parola invertita tramite ciclo for inverso

function isPalindroma(wordToReverse) {
  let result = "";
  for (i = wordToReverse.length - 1; i >= 0; i--) {
    result += wordToReverse[i];
    console.log(result);
  }

  // // If Booleano, con true esce
  // if (result === wordToReverse) {
  //   return true;
  // }
  // // implicito
  // return false;

  return result === wordRequest // alternativa + pulita === ritorna un booleano
}

// Prompt

const wordRequest = prompt("Inserisci una parola");


// If di verifica
// if (isPalindroma(wordRequest) === true)
if (isPalindroma(wordRequest)) {
  console.log("è palindroma");
} else {
  console.log("NON è palindromo");
}
