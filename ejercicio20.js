// 20.Menú interactivo
// Diseña un programa que muestre un menú al usuario con opciones como:
// 1. Calcular el cuadrado de un número.
// 2. Mostrar números pares entre dos valores.
// 3. Salir del programa.
// Usa un bucle while para mantener el menú activo hasta que el usuario elija 
// salir

const prompt = require('prompt-sync')();
let running = true;

while (running){
    
    console.log('Hello, welcome!\n You will have 3 options in this menu.\n 1. Calculate the square of a number.\n 2. Show even numbers between two values.\n 3. Exit the program.');
    let option = Number(prompt('Write one of these numbers to continue: '))
    switch (option){
        case 1:
            let num = Number(prompt("Write a number to calculate it's square: "))
            let square = num*num;
            console.log(`The square of the number ${num} is ${square}.`);
            break;

        case 2:
            let num1 = Number(prompt("Write the smallest value: "));
            let num2 = Number(prompt("Write the highest value: "));
            let numbers = [];
            for (let i=num1+1; i<num2; i++){
                if (i%2 === 0){
                    numbers.push(i);
                }
            }
            console.log(`The even numbers between ${num1} and ${num2} are: ${numbers}`);
            break;
        
        case 3:
            console.log('Thank you. Bye!');
            running = false;
            break;
        
        default:
            console.log('Your option is not valid. Try again');
            
    }
    
}
