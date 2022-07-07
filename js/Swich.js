/*
let estacion = prompt("ingrese su estacion del año favorita: 1-verano; 2-otoño; 3-primavera; 4-invierno")

if (estacion == 1){
    document.write("Helado");
}
else if(estacion==2){
    document.write("Locro");
    }
    else if(estacion==3){
        document.write("Chocolate")
    }
    else if(estacion==4){
        document.write("Cerveza")
    }
    else{
        document.write("Opcion no valida")
    }

*/

    /*
    Swich (opcion){
        caso 1:
        todas las lineas de codigo en caso de q el usuario elija la opcion 1
        ..
        ..
        break;
        caso 2:
        todas las lineas de codigo en caso de q el usuario elija la opcion 2
        ..
        ..
        break;
        caso 3:
        todas las lineas de codigo en caso de q el usuario elija la opcion 3
        ..
        ..
        break;
        default:
            todas las lineas de codigo que sean necesarias si el usuario elije una opcion no contemplada

    }
    */

    
let estacion =prompt("ingrese su estacion del año favorita: 1-verano; 2-otoño; 3-primavera; 4-invierno")

switch(estacion){
    case "1":
        console.log("helado")
        document.write("Helado");
        break;
    case "2":
        console.log("locro")
        document.write("Locro")
        break;
    case "3":
        console.log("chocolate")
        document.write("Chocolate");
        break;
    case "4":
        console.log("cerveza")
        document.write("Cerveza");
        break;
    default:
        document.write("Opcion no valida"); 
}
