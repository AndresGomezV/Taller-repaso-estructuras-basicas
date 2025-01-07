// Par o impar
//  Pide un número al usuario y determina si es par o impar usando if.

const prompt = require("prompt-sync")();

let numero;
numero = Number(prompt("Escriba un número: "));

if (numero % 2 == 0) {
    console.log("-------------------");
    console.log("| el numero es par |")
    console.log("-------------------");

}
else{
    console.log("---------------------");
    console.log("| El numero es impar |")
    console.log("---------------------");

}
