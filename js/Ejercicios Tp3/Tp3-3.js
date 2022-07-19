//simular el lanzamiento de un dado
//let dado1 = Math.floor(Math.random()* (max - min + 1)+min);
let dado1 = Math.floor(Math.random()* (6 - 1 + 1)+ 1);
let dado2 = Math.floor(Math.random()* (6 - 1 + 1)+ 1);

//sumar el resultado de ambos dados y anotar en un array

let sumas = []

for(let i=0; i<50; i++){
    let dado1 = Math.floor(Math.random()* (6 - 1 + 1)+ 1);
    let dado2 = Math.floor(Math.random()* (6 - 1 + 1)+ 1);
    let suma = dado1+dado2;
    sumas.push(suma);
}

document.write(sumas);

document.write(`<table>
<tbody>`)
for(resultado=2; resultado<=12; resultado++){
     document.write(`<tr><td>${resultado}</td><td>Frecuencia</td></tr>`)
     for(let posicion=0; posicion< sumas.length; posicion++){
         if(resultado === sumas[posicion]){
             
         }
     }
}
document.write(`</tbody></table>`)