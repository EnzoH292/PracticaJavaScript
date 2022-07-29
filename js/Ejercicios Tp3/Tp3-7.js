// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
//  la creación de la tabla debe ser realizada con una función
//   y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
let numero = parseInt(prompt("ingrese un número"));
let multiplos = [1, 2 ,3 , 4, 5 ,6 ,7 , 6, 9, 10];

let tablaMultiplicar = () =>{

    for(let indice=0; indice < multiplos.length; indice++){
        let multiplicaciones = [];
        console.log(numero*(multiplos[indice]))
        multiplicaciones.push(numero*(multiplos[indice]))
        for(let indice2=0; indice2 < multiplicaciones.length; indice2++){
            document.write(`<table><tbody>`);
            document.write(`<tr>`)
            document.write(`<td>${multiplicaciones[indice2]}</td>`)
            document.write(`</tr>`)
            document.write(`</tbody></table>`)
        }
    }
}
tablaMultiplicar();