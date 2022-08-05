// Escribe una clase que permita crear distintos objetos “rectángulos”,
// con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades,
// calcular el perímetro y el área

// let altura = parseFloat(prompt(`Ingresar el valor de altura del rectángulo`));
// let ancho = parseFloat(prompt(`Ingresar el valor de ancho del rectángulo`));

class Rectangulo {
    constructor (altura, ancho) {
         this.altura = altura;
         this.ancho = ancho;
    };
    mostrarDatos(){
      document.write(
          `<ul>
          <li>Altura: ${this.altura}</li>
          <li>Ancho: ${this.ancho}</li>
          </ul>`
      )
    }
    perimetro(){
        let perimetro = 2*(this.altura + this.ancho);
        document.write(`El perímetro del rectángulo es ${perimetro} </hr>`);
        document.write(`</hr>`);
    };
    area(){
        let area = this.altura * this.ancho;
        document.write(`El área del rectángulo es ${area}`);
        document.write(`</hr>`)
    };
    modificarAltura(){
        this.altura = parseInt(prompt("Introduzca nuevo valor de altura"))
        document.write("Se modificó el valor altura")
    }
}



let rectanguloGrande = new Rectangulo (parseFloat(prompt("introduzca un valor de altura")), parseFloat(prompt("introduzca un valor de ancho")));
console.log(rectanguloGrande);
rectanguloGrande.mostrarDatos();
rectanguloGrande.perimetro();
// rectanguloGrande.area();
// rectanguloGrande.modificarAltura();
// rectanguloGrande.perimetro();
