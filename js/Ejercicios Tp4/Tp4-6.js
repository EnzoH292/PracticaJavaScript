
// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
// Crear el método mostrarLibro() para mostrar la información relativa al libro 
// con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.


class Libro {
    constructor(ISBN, título, autor, numeroPaginas){
        this.ISBN = ISBN;
        this.título = título;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    };

    get mostrarISBN(){
        document.write(`El número de ISBN es ${this.ISBN}`)
    };
    set modificarISBN(nuevoISBN = prompt("Escriba el nuevo ISBN")){
        this.ISBN = nuevoISBN;
    };
    get mostrartitulo(){
        document.write(`El título del libro es ${this.título}`)
    };
    set modificarTitulo(nuevoTitulo = prompt("Escriba el nuevo título para el libro")){
        this.título = nuevoTitulo;
    };
    get mostrarAutor(){
        document.write(`El autor del libro es ${this.autor}`)
    };
    set modificarAutor(nuevoAutor = prompt("Escriba el nombre del nuevo autor")){
        this.autor = nuevoAutor;
    };
    get mostrarNumeroPaginas(){
        this.numeroPaginas
    };
    set modificarNumeroPaginas(nuevoNumeroPaginas = prompt("Escriba el nuevo número de paginas")){
        this.numeroPaginas = nuevoNumeroPaginas;
    };

    mostrarLibro(){
        document.write(`El libro ${this.título} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numeroPaginas} páginas.`);
    };

};

//Libros Instanciados
let libro1 = new Libro (75913, `"El Libro de la Selva"`, "Rudyard Kipling", 320);
let libro2 = new Libro (63251, `"1984"`, "George Orwell", 326);



// console.log(libro1);

// libro1.modificarAutor = "Enzo Heredia"
// libro1.modificarISBN = 11111
// libro1.modificarNumeroPaginas = 10000
// libro1.modificarTitulo = "La Historia de mi vida"

// console.log("Despues de modificar todo");
// console.log(libro1);

// libro1.mostrarAutor
// libro1.mostrarISBN
// libro1.mostrarNumeroPaginas
// libro1.mostrartitulo



//Pruebas con Console.log

// console.log(libro1.numeroPaginas);
// console.log(libro2.numeroPaginas);

// let primero = parseInt(libro1.numeroPaginas);
// let segundo = parseInt(libro2.numeroPaginas);

// console.log(primero) 
// console.log(segundo) 


function compararLibros(){
    if(libro1.numeroPaginas>libro2.numeroPaginas){
        document.write(`El libro ${libro1.título} tiene más páginas.`)
    }else{
        if(libro1.numeroPaginas<libro2.numeroPaginas){
        document.write(`El libro ${libro2.título} tiene más páginas.`)
        }
        else{
            document.write(`Los libros ${libro1.título} y ${libro2.título} tienen la misma cantidad de páginas.`);
        }
    }
};

compararLibros();

