var personas = [];
var n = +prompt("¿Cuántas personas va a ingresar?");
for(let i = 0; i < n; i++){
    var persona = [];
    persona["nombre"] = prompt("Ingrese el nombre");
    persona["edad"] = +prompt("Ingrese la edad");
    persona["dni"] = prompt("Ingrese el dni");
    personas.push(persona);
}
var mayor = [0,"sin_nombre"];
var menor = [300,"sin_nombre"];
for(let i = 0; i < personas.length; i++){
    if( mayor[0] < personas[i]["edad"]){
        mayor[0] = personas[i]["edad"];
        mayor[1] = personas[i]["nombre"];
    }
    if( menor[0] > personas[i]["edad"]){
        menor[0] = personas[i]["edad"];
        menor[1] = personas[i]["nombre"];
    }
}
console.log(`La edad menor es igual a => ${menor[0]} y nombre ${menor[1]}`);
console.log(`La edad mayor es igual a => ${mayor[0]} y nombre ${mayor[1]}`);
