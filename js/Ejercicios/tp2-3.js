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
