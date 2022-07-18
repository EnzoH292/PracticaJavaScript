let texto=prompt("Ingresar Texto")

if(window.confirm(texto)==false){
    document.write(texto)
}else{
    texto1=prompt("Ingresar Texto")
    if(window.confirm(texto1)==false){
        document.write(texto + "-" + texto1)
    } else{
        texto2=prompt("Ingresar Texto")
        if(window.confirm(texto2)==false){
            document.write(texto + "-" + texto1 + "-" + texto2)
        }else{
            texto3=prompt("Ingresar Texto")
            if(window.confirm(texto3)==false){
                document.write(texto + "-" + texto1 + "-" + texto2 + "-" + texto3)
            } else{
            texto4=prompt("Ingresar Texto")
            if(window.confirm(texto4)==false){
                document.write(texto + "-" + texto1 + "-" + texto2 + "-" + texto3 + "-" + texto4)}
            }
        }
    }
}


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
