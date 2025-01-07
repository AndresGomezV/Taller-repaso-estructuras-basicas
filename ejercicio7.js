/*
Factorial
Escribe un programa que calcule el factorial de un número usando un for.
*/

const prompt = require("prompt-sync")();

function getNumber() {
  let number;
  do {
    number = Number(prompt("Ingresa un número: "));
    if (isNaN(number)) {
      console.log("El valor ingresado no es válido, intentalo de nuevo");
    }
  } while (isNaN(number));

  return number;
}

function getFactorial(number) {
    let factorial = 1
    for (let i = 1; i < number; i++) {
        factorial *= i;
    }
    return factorial;
}

const number = getNumber();
const factorial = getFactorial(number);
console.log(factorial);