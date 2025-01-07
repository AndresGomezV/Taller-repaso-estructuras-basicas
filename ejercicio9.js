const prompt = require("prompt-sync")();
let numAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(
  "Juguemos a adivinar, estoy pensando en un numero entre el 1 y el 10 ¿podrias decirme cúal es?"
);
let intentos = 0;
while (true) {
  let intento = parseInt(prompt("Introduce tu número: "), 10);
  intentos++;
  if (intento < numAleatorio) {
    console.log("Es muy bajo. Vuelve a intentarlo");
  } else if (intento > numAleatorio) {
    console.log("Es muy alto. Vuelve a intentarlo");
  } else {
    console.log(`Felicitaciones, has acertado el numero es ${numAleatorio}`);
  }
}
