// Sumar números pares
// Usa un for para sumar todos los números pares entre 1 y 100.

let suma = 0;
for (let i=1; i<=100; i++){
    if (i%2 === 0){
        suma+=i;
    }
}
console.log(`La suma de los numeros pares de 1 a 100 es: ${suma}`);
