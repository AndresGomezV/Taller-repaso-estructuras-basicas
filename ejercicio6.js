// Pide al usuario un número N e imprime todos los números del 1 al N usando un while.
const prompt = require("prompt-sync")();

contador = 0
num = Number(prompt("Ingresa un número "))

while (num > contador){
    contador += 1 
    console.log(contador);
}