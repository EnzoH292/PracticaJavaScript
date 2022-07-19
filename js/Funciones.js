//funcion sin parámetros
function saludar(){
    //todo el código que quiero que tengo ó haga esta función
    document.write(`<br>Hola Mundo!</br>`);
};

//funcion con parámetros
function saludoNuevo(nombre, apellido){
    document.write(`Hola mi nombre es ${nombre} y mi apellido es ${apellido}`)
};

//invocar o llamar a una función
saludar();//sin parámetro


let ingresoNombre = prompt(`Ingrese un Nombre`);
let ingresoApellido = prompt(`Ingrese un Apellido`);

saludoNuevo(ingresoNombre, ingresoApellido);//con parámetros
