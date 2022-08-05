
// Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. 
// Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. 
// Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede 
// almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.



let contactosGuardados = [];

let agenda = {
    
    aniadirContacto(){
        class Contacto {
            constructor(nombre, telefono){
                this.nombre = nombre;
                this.telefono = telefono;
            };
        }
    
        let contacto = new Contacto(prompt("Escriba el nombre del nuevo contacto"), parseInt(prompt("Introduzca el número de teléfono del contacto")));
        
        if(contactosGuardados.length<10){
            contactosGuardados.push(contacto);
        }else{
            window,alert("Número de contactos máximo")
        }
    },
    
    existeContacto(){
        let buscador = prompt("Buscar contacto");
        for(indice=0; indice<contactosGuardados.length; indice++){
            let nombreContacto = (contactosGuardados[indice]).nombre
            console.log(nombreContacto)
            if(buscador == nombreContacto){
                document.write(`El contacto ${buscador} ya se encuentra agendado`)
            }else{
                document.write(`El contacto  ${buscador} no está registrado`)
            };
        }
    },

    listarContactos(){
        for(indice=0; indice<contactosGuardados.length; indice++){
            let nombreContacto = (contactosGuardados[indice]).nombre;
            let numeroContacto = (contactosGuardados[indice]).telefono;
            document.write(
                `<ul>
                    <li>Contacto: ${nombreContacto}</li>
                    <li>Teléfono: ${numeroContacto}</li>
                </ul>`
            );
        };
    },

    buscarContacto(){
        let buscador = prompt("Buscar contacto");
        for(indice=0; indice<contactosGuardados.length; indice++){
            let nombreContacto = (contactosGuardados[indice]).nombre;
            let numeroContacto = (contactosGuardados[indice]).telefono;
            // console.log(nombreContacto)
            if(buscador == nombreContacto){
                document.write(`Teléfono: ${numeroContacto}`)
            }
        }
    },

    eliminarContacto(){
        let buscador = prompt("Eliminar contacto");
        for(indice=0; indice<contactosGuardados.length; indice++){
            let nombreContacto = (contactosGuardados[indice]).nombre;
            // console.log(nombreContacto)
            if(buscador == nombreContacto){
                contactosGuardados.splice(indice, 1);
            }
        }
    },

    agendaLlena(){
        if(contactosGuardados.length<10){
            document.write(`La agenda aún no está completa`);
        }else{
            document.write(`La agenda se encuentra llena`)
        };
    },

    huecosLibres(){
        let espaciosLibres = 10 - contactosGuardados.length
        document.write(`Hay ${espaciosLibres} espacios libres en la agenda`)
    },


};



console.log(contactosGuardados);

agenda.aniadirContacto();

console.log(contactosGuardados);

// agenda.existeContacto();

// agenda.listarContactos();

// agenda.buscarContacto();

// agenda.eliminarContacto();

// agenda.agendaLlena();

// agenda.huecosLibres();

