//  Pide un número al usuario y determina si es primo 
//  & (divisible solo por 1 y por sí mismo).
const prompt = require("prompt-sync")();

NumPrimo = Number(prompt("Ingresa un número: "))

if (NumPrimo % NumPrimo == 0 && NumPrimo % 1 == 0){
    console.log(NumPrimo + " Sí es un número primo")
}
else{
    console.log("No es número primo");
}
