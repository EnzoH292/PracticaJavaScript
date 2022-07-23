// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
//  la creación de la tabla debe ser realizada con una función
//   y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
let numero = parseInt(prompt("ingrese un número"))
let multiplos = [1, 2 ,3 , 4, 5 ,6 ,7 , 6, 9, 10]
let vecesMultiplicar = 10

for(let indice=0; indice < multiplos.length; indice++){
    document.write((multiplos[indice])*numero);
   };

   

document.write(`<table> <tbody>`);
   for(let indiceFila=0; indiceFila < 10; indiceFila++){

       document.write(`<tr>`);

        document.write(`<td>${vecesMultiplicar}</td>`);
        vecesMultiplicar--;


       document.write(`</tr>`);
   };

document.write(`</tbody> </table>`); 