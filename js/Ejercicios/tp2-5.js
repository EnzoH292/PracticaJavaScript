do{
    let dni=parseInt(prompt("ingrese su número de DNI"));
    console.log(dni)
    
    if(dni>=0 && dni<=99999999){
    
    let resultado=dni % 23;
    console.log(resultado)
    
    switch(resultado){
        case 0:
            document.write("La letra que le corresponde al DNI: "+dni+", es T");
            document.write("</br>")
            break;
        case 1:
            document.write("La letra que le corresponde al DNI: "+dni+", es R");
            document.write("</br>")
            break;
        case 2:
            document.write("La letra que le corresponde al DNI: "+dni+", es W");
            document.write("</br>")
            break;
        case 3:
            document.write("La letra que le corresponde al DNI: "+dni+", es A");
            document.write("</br>")
            break;
        case 4:
            document.write("La letra que le corresponde al DNI: "+dni+", es G");
            document.write("</br>")
            break;
        case 5:
            document.write("La letra que le corresponde al DNI: "+dni+", es M");
            document.write("</br>")
            break;
        case 6:
            document.write("La letra que le corresponde al DNI: "+dni+", es Y");
            document.write("</br>")
            break;
        case 7:
            document.write("La letra que le corresponde al DNI: "+dni+", es F");
            document.write("</br>")
            break;
        case 8:
            document.write("La letra que le corresponde al DNI: "+dni+", es P");
            break;
        case 9:
            document.write("La letra que le corresponde al DNI: "+dni+", es D");
            document.write("</br>")
            break;
        case 10:
            document.write("La letra que le corresponde al DNI: "+dni+", es X");
            document.write("</br>")
            break;
        case 11:
            document.write("La letra que le corresponde al DNI: "+dni+", es B");
            document.write("</br>")
            break;
        case 12:
            document.write("La letra que le corresponde al DNI: "+dni+", es N");
            document.write("</br>")
            break;
        case 13:
            document.write("La letra que le corresponde al DNI: "+dni+", es J");
            document.write("</br>")
            break;
        case 14:
            document.write("La letra que le corresponde al DNI: "+dni+", es Z");
            document.write("</br>")
            break;
        case 15:
            document.write("La letra que le corresponde al DNI: "+dni+", es S");
            document.write("</br>")
            break;
        case 16:
            document.write("La letra que le corresponde al DNI: "+dni+", es Q");
            document.write("</br>")
            break;
        case 17:
            document.write("La letra que le corresponde al DNI: "+dni+", es V");
            document.write("</br>")
            break;
        case 18:
            document.write("La letra que le corresponde al DNI: "+dni+", es H");
            document.write("</br>")
            break;
        case 19:
            document.write("La letra que le corresponde al DNI: "+dni+", es L");
            document.write("</br>")
            break;
        case 20:
            document.write("La letra que le corresponde al DNI: "+dni+", es C");
            document.write("</br>")
            break;
        case 21:
            document.write("La letra que le corresponde al DNI: "+dni+", es K");
            document.write("</br>")
            break;
        case 22:
            document.write("La letra que le corresponde al DNI: "+dni+", es E");
            document.write("</br>")
            break;
        default:
            alert("Se ingresó un valor que no corresponde")
        
    }
    }
    else{
        alert("Se ingresó un número de DNI erróneo");
    }
}while(confirm("¿Ingresar otro DNI?"))
