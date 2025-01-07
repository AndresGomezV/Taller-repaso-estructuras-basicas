/*
Es palíndromo
Crea una función que determine si una palabra es un palíndromo (se lee igual al
derecho y al revés). Da un mensaje, si no lo es.
*/

const prompt = require("prompt-sync")();

function getWord() {
  let word;
  do {
    word = String(prompt("Introduce una palabra y descubre si es palíndroma: ")
    );
    if (typeof word !== "string" || word.length === 0) {
      console.log("El valor ingresado no es válido, intentalo de nuevo");
    }
  } while (word.length === 0);

  return word;
}

function isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

const word = getWord();
const isPalindromo = isPalindrome(word);
if (isPalindromo) {
  console.log(`${word} es un palíndromo.`);
} else {
  console.log(`${word} no es un palíndromo.`);
}
