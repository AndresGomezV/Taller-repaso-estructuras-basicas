// Frecuencia de letras
// Escribe un programa que cuente la cantidad de veces que aparece cada letra en una 
// palabra dada por el usuario.

const prompt = require("prompt-sync")();

function contarLetras(palabra) {
    let contador = {}
  
    palabra = palabra.toLowerCase();
  
    for (let i = 0; i < palabra.length; i++) {
      let letra = palabra[i]
  
      if (contador[letra]) {
        contador[letra]++;
      } else {
        contador[letra] = 1
      }
    }
  
    for (let letra in contador) {
      console.log(`La letra '${letra}' aparece ${contador[letra]} veces.`)
    }
}
  
let palabraUsuario = prompt("Introduce una palabra:");
  
contarLetras(palabraUsuario);