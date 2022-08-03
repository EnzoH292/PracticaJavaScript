// Crea un objeto llamado auto que tenga algunas características como el color, 
// marca, modelo y si está encendido o apagado. 
// Crea los métodos necesarios para permitir encender y apagar el auto.

let auto = {
    color: "negro",
    marca: "Chervrolet",
    modelo:"Onix",
    encendido: false,
    apagado: true,
    encenderAuto: () => {
        auto.encendido = true;
        auto.apagado = false;
        document.write(`El auto está encendido`);
    },
    apagarAuto: () => {
        auto.apagado = true;
        auto.encendido = false;
        document.write(`El auto está apagado`);
    },
}

console.log(`Estado inicial`);
console.log(auto);

auto.encenderAuto();
console.log(`Auto encendido`);
console.log(auto);

// auto.apagarAuto();
// console.log(`Auto Apagado`);
// console.log(auto);