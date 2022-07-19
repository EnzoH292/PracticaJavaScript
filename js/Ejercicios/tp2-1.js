let edad = parseInt(prompt("Ingrese su Edad"))
if (edad >= 18){
    console.log("Tiene edad para conducir")
    document.write("Tiene edad para conducir")
}
else{
    console.log("Es menor de edad "+ "(" + edad + ")" + ", no puede conducir")
    document.write("Es menor de edad "+ "(" + edad + ")" + ", no puede conducir")
}