let alumno = {
    nombre:"Jorge",
    codigo:1001,
    email:"jorgegarba@gmail.com",
    gustos:['Rock','Chicharron']
};
// Creamos una variable 'nombre' tomada del
// objeto alumno
let nombre = alumno.nombre;
console.log(nombre);
console.log("..............");

/**
 * Creamos 3 variables por desctructuarción
 * del objeto alumno
 * - las dos primeras, llevan el mismo identificador
 * - la tercera lleva un nuevo nombre de variable
 * llamada 'correo´
 */
var {codigo,gustos,email:correo} = alumno;
console.log(codigo);
console.log(gustos);
console.log(correo);

var usuario = {
    codigo,//codigo:codigo
    correo,//correo:correo
    id:9000,
    codigoYCorreo: function(){
        console.log(this.codigo+"-"+this.correo);
    }
};

console.log(usuario);
usuario.codigoYCorreo();


// destructurando arreglos

let arreglo = [9,5,4,"otro gato"];
// creando 4 variables para cada uno de los elementos 
// del arreglo por destructuración
var [x,y,z,a] = arreglo;
console.log(a);

var [p, ...resto] = arreglo;
console.log(p);
console.log(resto);
