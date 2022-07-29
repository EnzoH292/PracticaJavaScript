//Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
//Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
let meses = [`Enero`, `Febrero`, `Marzo`, `Abril`, `Mayo`, `Junio`, `Julio`, `Agosto`, `Septiembre`, `Octubre`, `Noviembre`, `Diciembre`,];

console.log(meses);

let calendario = (tituloEjercicio) => {
document.write(`<h2>${tituloEjercicio}</h2></br>`)
    document.write(`<ul>`);
    for(let indice=0; indice < meses.length; indice++){
     document.write(`<li>${meses[indice]}</li>`)
    };
    document.write(`</ul>`);
}
calendario("Calendario");