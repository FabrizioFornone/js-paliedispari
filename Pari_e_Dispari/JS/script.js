/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// Funzione random

function randomNumber(min, max) {
  const result = Math.floor(Math.random() * (max + 1 - min)) + min;
  // Return per poterla portare fuori
  return result;
}

// Funzione isPari

function isPari(num) {
  //   if (num % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return num % 2 == 0; // super pulto ed equivalente a quello sopra
}

// prompt utente sceglie pari o dispari

const userChoice = prompt("Scegli, pari o dispari");

// prompt utente sceglie un numero da 1 a 5

const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

const machineNumber = randomNumber(1, 5);

// totale dei 2 numeri

const total = userNumber + machineNumber;

// If per il risultato

if (isPari(total) && userChoice === "pari") {
  console.log("Hai vinto");
} else if (isPari(total) && userChoice !== "pari") {
  console.log("Hai perso");
} else if (!isPari(total) && userChoice === "dispari") {
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}
