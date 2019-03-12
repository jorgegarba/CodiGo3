var cadena = "Tecsup Pasion por la Tecnología";
document.write(`<p></p>`);
document.write(`<p>Longitud de la cadena = ${cadena.length}</p>`)
document.write(`<p>Caracter en la posición 5 = ${cadena.charAt(5)}</p>`);
document.write(`<p>Cadena en Mayúsculas = ${cadena.toUpperCase()}</p>`);
document.write(`<p>Cadena en Minúsculas = ${cadena.toLowerCase()}</p>`);
var arreglo = cadena.split(" ");
document.write(`<p>Convertir la cadena en un arreglo de n elementos dado un separador ${arreglo}</p>`);
console.log(arreglo);
document.write(`<p>Obtener la primera posición de un caracter/subcadena en una cadena ${cadena.indexOf("e")}</p>`);
document.write(`<p>Quitar los espacios en blanco a los extremos de una cadena ${cadena.trim()}</p>`);
document.write(`<p>Reemplaza la primera ocurrencia de una caracter/cadena por otro ${cadena.replace("e","H")}</p>`);
document.write(`<p>Extraer una subcadena de la cadena dado un inicio y fin = ${cadena.slice(5,9)}</p>`);
document.write(`<p>Extraer una subcadena de la cadena dado un inicio y un numero de caracteres = ${cadena.substr(5,4)}</p>`);

//EJERCICIOS
//1 de 78.- => Algoritmo para mostrar la cantidad de vocales que tiene una cadena(mayusculas y minusculas)
//2 de 78.- => Algoritmo para invertir una cadena
//3 de 78.- => Algotitmo para ver el numero de veces, que se repite una subcadena dentro de una cadena.
//4 de 78.- => Algoritmo para ver si una frase es palindromo o capicua
//78.- => Algoritmo para capitalizar una frase


var texto = "qwerty lxckvlqwerty sdfsd qwerty qwerty sdfsqwerty";
var busqueda = "qwerty";
var cont = 0;
for(let i = 0; i<texto.length; i++){
    if(texto.substr(i, busqueda.length) == busqueda){
        cont++;
    }
}
console.log(cont);
