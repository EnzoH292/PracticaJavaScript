/*
while (condicion lógica){
    todas las lineas del codigo que quiero que repita el programa
    cambiar la condicion lógica
}
*/

let cantidad = 0; //cantidad de mates servidos//

while (cantidad <= 20 ){ //20 es la cantidad de veces q se puede servir mates hasta que ya no haya agua//
    document.write("<br>preparar mate y entregar al siguiente compañero" + cantidad);
    cantidad = cantidad +1 ; //o cantidad++ // //se modifica la condicion lógica para que no sea un bucle infinito//
}

/* Bucles Do While (hacer....mientras)

do{
    ---todo el codigo que quiero ejecutar x cantidad de veces
    ---cambiar la condicion lógica
} while (condicion lógica)

*/

let mates = 1;

do{
    document.write("<br>preparar mate y entregar al siguiente compañero, mate cebado n°:" + mates);
    mates++;
} while( mates <= 20)


/* Bucle For

for ( inicializar una variable; condicion lógica; incremente o decrementa la variable declarada al inicio)

*/


for(let mate=1; mate<=20; mate++){
    document.write("<br>preparar mate y entregar al siguiente compañero, mate cebado n°:" + mate);
}