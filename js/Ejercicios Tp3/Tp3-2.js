//Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
//cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, 
//luego realizar las siguientes acciones:

/*Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let ciudades = [];

let agregarCiudades = () => {
    ciudades.push(prompt("Escriba su ciudad preferida"));
    console.log(ciudades);
    window.confirm("Agregar más ciudades?");
    console.log(window.confirm("Agregar más ciudades?"))
}

do{
    agregarCiudades()
} while(window.confirm("Agregar más ciudades?"))

for(let indice=0; indice < ciudades.length; indice++){
    document.write(`<li>${ciudades[indice]}</li>`)
    document.write(`</ul></br>`);
   };
   let cantidadTotal = (ciudades.length)
   
   ciudades.push("París")
   document.write(`Primera posicion ${ciudades[0]}</br>`);
   console.log(ciudades[1]);
   ciudades[1] = "Barcelona"
   document.write(`Tercera posicion ${ciudades[2]}</br>`);
   document.write(`Tercera posicion ${ciudades[cantidadTotal-1]}</br>`);
   
