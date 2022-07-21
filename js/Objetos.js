//Objetos con notacion literal
let motorola = {
    //propiedade -> clave: valor
    modelo: `G31`,
    SO: `Android`,
    resistenteAgua: false,
    pantalla: 9,
    // color: [`celeste`, `negro`, `plateado`],
    // conectividad:{
    //     bluetooth: true,
    //     red:`4g`,
    // }

    //Metodos (son similares a las funciones)
    navegar: function(){
        document.write(`<p>SE abrió el navegador</p></hr>`);
    },
    apagar: () => { document.write(`<p>Se apagó el dispositivo</p>`)},
}


//Mostrar un objeto
console.log(motorola);
//document.write(motorola); no usamos esta forma normalmente
document.write(`<p>Modelo del celular: ${motorola.modelo}</p>`);
document.write(`<p>Modelo del celular: ${motorola.pantalla}</p>`);
document.write(`<p>SO: ${motorola[`SO`]}</p>`);

//Modificar  propiedad de un objeto
motorola.pantalla = 10;
 document.write(`<p>Modelo del celular: ${motorola.pantalla}</p>`);

//borrar una propiedad
delete motorola.resistenteAgua;
console.log(motorola);

//agregar una propiedad nueva a un objeto existente
motorola.precio = 90000;

document.write(`<p>Precio: ${motorola.precio}</p>`);
console.log(motorola);

//usar un método
motorola.navegar();