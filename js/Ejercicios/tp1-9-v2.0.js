let frase = prompt("ingrese una frase de 10 caracteres");
frase = frase.toLowerCase();

for (let vocal= 0; frase <= frase.length; vocal++){
    console.log(frase.charAt(vocal))
    if 
        (frase.charAt(vocal) == "a" ||
        frase.charAt(vocal) == "e" ||
        frase.charAt(vocal) == "i" ||
        frase.charAt(vocal) == "o" ||
        frase.charAt(vocal) == "u")
        {
            document.write(frase.charAt(vocal)) }
        
}