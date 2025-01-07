// Tabla de multiplicar
// Escribe un programa que imprima la tabla de multiplicar del 1 al 10 para un número ingresado por el usuario.
const prompt = require('prompt-sync')();

let num = Number(prompt(`Escribe un numero para conocer sus primeros 10 multiplos: `));
let multiply = [];
for (let i=1; i<=10; i++){
    multiply.push(num*i); 
}
console.log(`Los primeros 10 multiplos de ${num} son: ${multiply}`);
