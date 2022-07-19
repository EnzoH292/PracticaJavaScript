let numeroRep=prompt("Introduce un número")
if(Number(numeroRep)==numeroRep){
    if(numeroRep>0 && numeroRep<=50){
        let rep; 
        let incremento;
        for(incremento=1; incremento<=numeroRep; incremento++){
            for(rep=incremento; rep<=numeroRep; rep++){
                document.write(incremento);
            }
            document.write("</br>");
        }
    }
} else{
    alert("El valor introducido no está dentro de los permitidos")
}

/*let i, repeticion;
for(i=1; i<=50; i++){
    for(repeticion=0; repeticion<1; repeticion++){
        document.write(i)
    }
    document.write("</br>")
}*/