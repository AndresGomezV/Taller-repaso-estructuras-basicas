const prompt = require("prompt-sync")();
let dat1 = prompt("Ingrese una palabra: ");
let lista = dat1.split(""); //convierto la cadena en un array
let contador = 0;
const vocales = "aeiouAEIOU"; //defino una cadena con vocales mayusculas y minusculas donde se verificara includes
for (let i = 0; i < lista.length; i++)
  if (vocales.includes(lista[i])) {
    //se usa el metodo includes para saber si un caracter esta en una cadena, en este casode vocales
    contador++;
  } // en mi bucle for indico a i que vaya por cada indice verificando si esta incluida en la constante vocales y si es asi que inclemente en uno mi contador
console.log(`la cantidad de vocales son: ${contador}`);
