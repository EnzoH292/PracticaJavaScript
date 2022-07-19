let nota = parseInt(prompt("Ingrese su nota (número)"))

if(nota<=2 & nota>=0){
   window.alert("Muy deficiente")
} else{
    if(nota>2 & nota<=4){
        window.alert("Insuficiente")
    } else{
        if(nota>4 & nota<=6){
            window.alert("Suficiente")
        } else{
            if(nota==7){
                window.alert("Bien")
            } else{
                if(nota>=8 & nota<=9){
                    window.alert("Notable")
                } else{
                    if(nota==10){
                        window.alert("Sobresaliente")
                    } else{
                        if(nota>10 || nota<0){
                            window.alert("número erróneo - Introduce un número válido")
                        }
                    }
                }
            }
        }
    }
}
