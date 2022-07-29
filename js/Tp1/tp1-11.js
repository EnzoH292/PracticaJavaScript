let numero1 = parseInt(prompt("Introduzca un dividendo"))


if ( (numero1 % 2) == 0){
    document.write("El número " + numero1 + " es divisible en 2 </br>")
}
else{
    if ( (numero1 % 3) == 0){
        document.write("<br> El número " + numero1 + " es divisible en 3 </br>")}
        else{
            if ( (numero1 % 5) == 0){
                document.write("<br> El número " + numero1 + " es divisible en 5 </br>")}
                else{
                    if ( (numero1 % 7) == 0){
                        document.write("<br> El número " + numero1 + " es divisible en 7 </br>")}
                }
        }
}
if ( ((numero1 % 2 == 0) & (numero1 % 3 == 0))){
    document.write("<br> El número " + numero1 + " es divisible en 2 y 3 </br>")
}
else{
    if ( ((numero1 % 2 == 0) & (numero1 % 4 == 0))){
        document.write("<br> El número " + numero1 + " es divisible en 2 y 4 </br>")}
        else{
            if (((numero1 % 2 == 0) & (numero1 % 5 == 0))){
                document.write("<br> El número " + numero1 + " es divisible en 2 y 5 </br>")}
                else{
                    if (((numero1 % 2 == 0) & (numero1 % 7 == 0))){
                        document.write("<br> El número " + numero1 + " es divisible en 2 y 7 </br>")}

                }
                
        }
}
if ( ((numero1 % 3 == 0) & (numero1 % 4 == 0))){
    document.write("<br> El número " + numero1 + " es divisible en 3 y 4 </br>")
}
else{
    if ( ((numero1 % 3 == 0) & (numero1 % 5 == 0))){
        document.write("<br> El número " + numero1 + " es divisible en 3 y 5 </br>")}
        else{
            if (((numero1 % 3 == 0) & (numero1 % 7 == 0))){
                document.write("<br> El número " + numero1 + " es divisible en 3 y 7 </br>")}
                
        }
}
if ( ((numero1 % 4 == 0) & (numero1 % 5 == 0))){
    document.write("<br> El número " + numero1 + " es divisible en 4 y 5 </br>")
}
else{
    if ( ((numero1 % 4 == 0) & (numero1 % 7 == 0))){
        document.write("<br> El número " + numero1 + " es divisible en 4 y 7 </br>")}                
        }         

        