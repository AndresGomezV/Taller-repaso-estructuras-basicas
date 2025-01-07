// 16.Fibonacci
// Escribe una función que genere los primeros N números de la secuencia de Fibonacci.

const prompt = require('prompt-sync')();
let sucFibonacci = [0,1]
let numN = Number(prompt('Escribe la cantidad de numeros que deseas conocer de la funcion de Fibonacci, escribe un numero mayor que 2: '));

for (let i=0; i<numN-2; i++){
    let j = i+1;
        let newNum = sucFibonacci[i] + sucFibonacci[j];
    sucFibonacci.push(newNum);
}

console.log(sucFibonacci);