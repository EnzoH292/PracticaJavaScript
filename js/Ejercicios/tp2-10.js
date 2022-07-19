//debe pedir filas y columnas
//dibujar una tabla
//cada celda debe tener un numero decendente de multiplicar filas por culumnas

const filas = parseInt(prompt("Indique número de Filas"));
const columnas = parseInt(prompt("Indique número de Columnas"));
let resultado = filas*columnas;

document.write(`<table> <tbody>`);
    for(let indiceFila=0; indiceFila < filas; indiceFila++){

        document.write(`<tr>`);

        for(let indiceColumnas=0; indiceColumnas < columnas; indiceColumnas++){
                   document.write(`<td>${resultado}</td>`);
                   resultado--;
                }

        document.write(`</tr>`);
    };

document.write(`</tbody> </table>`); 