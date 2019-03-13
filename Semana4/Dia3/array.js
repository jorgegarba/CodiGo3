
var arreglo2 = new Array();
var arreglo2 = [9,21,3,4,89];
//ordenar un arreglo numerico
//console.log(arreglo2.sort(function(a, b){ return a > b ? 1 : -1}));

//propiedades
document.write(`<p>Tamaño de arreglo2 ${arreglo2.length}</p>`);
document.write(`<p>Insertar un elemento al final ${arreglo2.push(80)}</p>`);
document.write(`<p>Eliminar y obtener el ultimo elemento ${arreglo2.pop()}</p>`);
document.write(`<p>slice(inicio, final) => devuelve un 
                arreglo considerando las posiciones inicio y fin ${arreglo2.slice(3,6)}`);
console.log(arreglo2);                
document.write(`<p>splice(inicio, nro_elementos) => cambia el arreglo original y
                el comportamiento, es similar a la funcion slice ${arreglo2.splice(3,2)}</p>`);
console.log(arreglo2);
document.write(`<p>IndexOf => retorna la primera
                posicion de un elemento buscado</p>${arreglo2.indexOf(5)}`);
document.write(`<p>SORT => ordena los elementos de un arreglo ${arreglo2.sort()}</p>`)
console.log(arreglo2);
