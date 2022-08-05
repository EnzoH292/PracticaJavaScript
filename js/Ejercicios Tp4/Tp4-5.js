
// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.

// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona 
// creada y cual es el rasgo característico de esta generación.

// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.

// mostrarDatos: devuelve toda la información del objeto.

// generaDNI(): genera un número aleatorio de 8 cifras.


class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anoDeNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anoDeNacimiento = anoDeNacimiento;
    };

    mostrarGeneracion(){
        if(this.anoDeNacimiento >= 1930 && this.anoDeNacimiento<= 1948){
            document.write(`${this.nombre} es de la Silent Generation (Niños de la posguerra). `);
            document.write("Su rasgo característico es la Austeridad");
        }else{
            if(this.anoDeNacimiento >= 1949 && this.anoDeNacimiento<= 1968){
                document.write(`${this.nombre} es de la generación Baby Boom. `);
                document.write("Su rasgo característico es la Ambición");
            }else{
                if(this.anoDeNacimiento >= 1969 && this.anoDeNacimiento<= 1980){
                    document.write(`${this.nombre} es de la Generación X. `);
                    document.write("Su rasgo característico es la Obsesión por el éxito");
                }else{
                    if(this.anoDeNacimiento >= 1981 && this.anoDeNacimiento<= 1993){
                        document.write(`${this.nombre} es de la Generación Y (Millennials). `);
                        document.write("Su rasgo característico es la Frustración");
                    }else{
                        if(this.anoDeNacimiento >= 1994 && this.anoDeNacimiento<= 2010){
                            document.write(`${this.nombre} es de la Generación Z. `);
                            document.write("Su rasgo característico es la Irreverencia");
                        }else{
                            window.alert("El año ingresado no cumple con los parámetros para determinar la generación al que pertenece")
                        }
                    }
                }
            }
        }
    };

    esMayorDeEdad(){
        if(this.edad >= 18){
            document.write(`${this.nombre} es mayor de edad`)
        }else{
            document.write(`${this.nombre} es menor de edad`)
        }
    };

    mostrarDatos(){
        document.write(
        `<ul>
                <li>${this.nombre}</li>
                <li>${this.sexo}</li>
                <li>${this.edad}</li>
                <li>${this.anoDeNacimiento}</li>
                <li>${this.dni}</li>
                <li>${this.altura}</li>
                <li>${this.peso}</li>
        </ul>`
        )
    };

    
    generaDNI(){
        let nuevoDni = []
        for(let numeroDni=0; numeroDni<8; numeroDni++){
            nuevoDni.push(Math.ceil(Math.random()*9))
        }
        document.write("Su nuevo DNI es </hr>")
        for(let indice=0; indice<8; indice++){
            document.write(`${nuevoDni[indice]}`)
        }
        console.log(nuevoDni)
    };
}


let julieta = new Persona (`Julieta`, 13, 40258144, `M mujer`, 50.2, 1.64, 2009);
let mateo = new Persona (`Mateo`, 28, 33256874, `H hombre`, 72, 1.70, 1992);
mateo.mostrarDatos();
mateo.esMayorDeEdad();
mateo.generaDNI();
mateo.mostrarGeneracion();


julieta.mostrarDatos();
julieta.esMayorDeEdad();
julieta.generaDNI();
julieta.mostrarGeneracion();
