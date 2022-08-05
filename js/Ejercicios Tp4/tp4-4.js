// Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
//nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos
// instanciados.

class Producto {
    constructor (codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    };
    imprimeDatos(){
        document.write(
            `<ul>
            Valores
                <li>${this.nombre}</li>
                <li>${this.codigo}</li>
                <li>${this.precio}</li>
            </ul>`
        );
    }
}


//Objetos Instanciados
let gaseosa = new Producto ("CA8795", "Coca-Cola", "$ "+ 30);
let cereal = new Producto ("Ab258", "Trix", "$ "+50);
let aceite = new Producto ("CT456", "Cocinero", "$ "+ 10)
//console.log(gaseosa);


gaseosa.imprimeDatos();
cereal.imprimeDatos();
aceite.imprimeDatos();

//Array con objetos
let compras = [gaseosa, cereal, aceite];
console.log(compras);

