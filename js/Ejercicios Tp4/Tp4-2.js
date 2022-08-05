// Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a 
// mostrar la descripción del estado de la cuenta.


let cuenta ={
    titular: "Alex",
    saldo: 0,

    ingresar(){
        this.saldo += parseFloat(prompt("Indique el saldo a depositar"))
    },

    extraer(){
        let extraccion = parseFloat(prompt("Indique el saldo a extraer"))
        if(this.saldo>extraccion){
            this.saldo -= extraccion
        }else{
            window.alert("La cuenta no tiene saldo suficiente para la extracción solicitada")
        }
    },

    informar(){
        document.write(
            `<ul>
                <li>Titular: ${cuenta.titular}</li>
                <li>Saldo: $${cuenta.saldo}</li>
            </ul>`
        )
    },
};

cuenta.informar()

cuenta.ingresar()

cuenta.extraer()

cuenta.informar()

