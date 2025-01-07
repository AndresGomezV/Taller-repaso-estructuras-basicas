/*
Mayor de tres números
Pide tres números al usuario e imprime cuál es el mayor.
*/

const prompt = require("prompt-sync")();

function getNumbers() {
  let numbers = [];
  do {
    let firstNumber = Number(prompt("Ingresa el primer número: "));
    let secondNumber = Number(prompt("Ingresa el segundo número: "));
    let thirdNumber = Number(prompt("Ingresa el tercer número: "));
    if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
      console.log("Uno de los valores ingresados no es válido, intentalo de nuevo");
    } else {
      numbers = [firstNumber, secondNumber, thirdNumber];
    }
  } while (numbers.length === 0);

  return numbers;
}

function largestOfThreeNumbers(numbers) {
  let mayor;
  if (numbers[0] >= numbers[1] && numbers[0] >= numbers[2]) {
    mayor = numbers[0];
  } else if (numbers[1] >= numbers[0] && numbers[1] >= numbers[2]) {
    mayor = numbers[1];
  } else {
    mayor = numbers[2];
  }

  return mayor;
}

const numbers = getNumbers();
const mayorDeTres = largestOfThreeNumbers(numbers);

console.log(`El número mayor es: ${mayorDeTres}`);
