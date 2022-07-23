// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
//  sólo por minúsculas o por una mezcla de ambas.
// let cadena = prompt("ingrese una palabra")
// document.write(cadena)
// console.log(cadena.toUpperCase())

let tipografía = () =>{
   let cadenaTexto = prompt("Ingrese una cadena de texto")
   if (cadenaTexto == cadenaTexto.toUpperCase()){
       document.write(`El texto (${cadenaTexto}) está conformando sólo por mayúsculas`);
   } else{
       if(cadenaTexto == cadenaTexto.toLowerCase()){
        document.write(`El texto (${cadenaTexto}) está conformando sólo por minúsculas`);
       } else{
        document.write(`El texto (${cadenaTexto}) está conformando por una mezcla de mayúsculas y minúsculas`);
       }
   }
}

tipografía();