// 12.Número mayor
// Escribe una función que reciba tres números y devuelva el mayor de ellos.
const prompt = require('prompt-sync')();

let numbers = [];

for (let i=0; i<3; i++){
    numbers [i] = Number(prompt(`Escribe el numero ${i+1}: `));
}
let mayor = numbers[0];

for (let i=0; i<3; i++){
    if(numbers[i]>mayor){
        mayor = numbers[i];
        pos = i;
    }
}
console.log(`El numero mayor de los que ingresaste es: ${mayor}`);
