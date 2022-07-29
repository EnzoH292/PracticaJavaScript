
// Escribir un script que simule el lanzamiento de dos dados. 
// Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno 
//de los lanzamientos de los dados. 
// Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
// repitiendo 50 veces esta operación.
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
<tbody><tr><td>Resultado</td><td>Frecuencia</td></tr>`)
for(resultado=2; resultado<=12; resultado++){
    
    let frecuencia = 0
    
    for(let posicion=0; posicion< sumas.length; posicion++){
        if(resultado === sumas[posicion]){
            frecuencia = frecuencia+1
            document.write(frecuencia)
        }
    }
    document.write(`<tr><td>${resultado}</td><td>${frecuencia}</td></tr>`)
}
document.write(`</tbody></table>`)