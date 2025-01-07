/*
Área de un triángulo
Crea una función que calcule el área de un triángulo dados su base y altura.
*/
const prompt = require("prompt-sync")();

function getTriangle() {
    let baseAndHeight = [];
    do {
      let base = Number(prompt("Ingresa la base del triángulo: "));
      let height = Number(prompt("Ingresa la altura del triángulo: "));
      
      if (isNaN(base) || isNaN(height)) {
        console.log("Uno de los valores ingresados no es válido, intentalo de nuevo");
      } else {
        baseAndHeight = [base, height];
      }
    } while (baseAndHeight.length === 0);
  
    return baseAndHeight;
  }

function getArea(baseAndHeight) {
    let area = (baseAndHeight[0] * baseAndHeight[1]) / 2
    return area;
}

const baseAndHeight = getTriangle();
const area = getArea(baseAndHeight);

console.log(area);