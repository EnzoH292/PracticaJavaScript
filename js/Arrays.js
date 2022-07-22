//Crear un arreglo
let listaSupermercado = [];

//crear un arreglo con datos
let series = [`Peaky Blinders`, 7, `Stranger Things`, 4, `The Boys`, 3, `Loki`];

let mostrarSeries = (titulo) => {
document.write("<hr> <h3>"+titulo+"</h3>");
document.write(`<hr> <ul>`);
for(let indice = 0; indice < series.length; indice++){
document.write(`<li>${series[indice]}</li>`)
};
document.write(`</ul>`);
}



//mostras un arreglo
mostrarSeries("Array Original");

//mostras un elemento del arreglo
document.write("<hr>"+series[2]);

//mostrar un arreglo dentro de una lista
//series.length devuelve la cantidad de elementos que hay en el arreglo
document.write(`<hr> <ul>`);
for(let indice = 0; indice < series.length; indice++){
document.write(`<li>${series[indice]}</li>`)
};
document.write(`</ul>`);

//agregar un elemento nuevo al final del arreglo
series.push(`Rick and Morty`);
mostrarSeries("Aquí se agregó un nuevo elementos al arreglo");

//agregar un elemento en una posicion en particular del arreglo
series.splice(2, 0, `The Witcher`); //Parametros del .splice (posición del elemento, cantidad de elementos a borrar, ítem que vamos a agregar)
document.write(`<hr> <h3>Aquí se agregó un nuevo elementos en una posición en particular</h3>`);
document.write(`<ul>`);
for(let indice = 0; indice < series.length; indice++){
document.write(`<li>${series[indice]}</li>`)
};
document.write(`</ul>`);

//eliminar elementos
series.splice(4, 1,);//siempre se elimina el elemento en la posición dada en adelante
document.write(`<hr> <h3>Aquí se eliminó un elemento en una posición en particular</h3>`);
document.write(`<ul>`);
for(let indice = 0; indice < series.length; indice++){
document.write(`<li>${series[indice]}</li>`)
};
document.write(`</ul>`);

//eliminar varios elementos
series.splice(5);

document.write(`<hr> <h3>Aquí se eliminaron varios elementos desde una posición en particular</h3>`);
document.write(`<ul>`);
for(let indice = 0; indice < series.length; indice++){
document.write(`<li>${series[indice]}</li>`)
};
document.write(`</ul>`);

//modificar elementos en un arreglo
series[1] = `Suits`;

document.write(`<hr> <h3>Modificar un elemento en una posición en particular y reemplazarlo</h3>`);
document.write(`<ul>`);
for(let indice = 0; indice < series.length; indice++){
document.write(`<li>${series[indice]}</li>`)
};
document.write(`</ul>`);