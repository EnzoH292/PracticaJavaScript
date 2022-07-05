let numero1 = parseInt(prompt("Ingresa un Número"))
let numero2 = parseInt(prompt("Ingresa un segundo Número"))
let numero3 = parseInt(prompt("Ingresa un tercer Número"))

if (numero1 > numero2 & numero1 > numero3) {
    document.write("El Mayor es " + numero1)
}
else{
    if (numero2 > numero1 & numero2 > numero3) {
        document.write("El Mayor es " + numero2)
    }
    else{
        document.write("El Mayor es " + numero3)
    }
}
