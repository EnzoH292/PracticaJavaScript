// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

let perimetroRectangulo = () => {
    let base = parseInt(prompt("Ingrese el valor de la base"));
    let altura = parseInt(prompt("Ingrese el valor de la altura"));
    let perimetro = 2*(base + altura);
    document.write(`El perímetro del rectángulo de base (${base}) y altura (${altura}) es ${perimetro}`);
}

perimetroRectangulo();