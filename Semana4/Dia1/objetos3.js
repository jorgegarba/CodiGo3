

var clasemascota = function(apodo){
    var mascota = {
        nombre: apodo,
        raza: "Bull Terrier",
        nombreCompleto: function(edad){       
            console.log(`El nombre es: ${this.nombre}
                        y tiene ${edad} anios`);
        },
        nombreYRaza: function(){
            return `Nombre => ${this.nombre} Raza => ${this.raza}`;
        },
        nuevoNombre: function(name){
            this.nombre = name;
        }
    }    
    return mascota;
};

var fido = clasemascota("FIDO");
var lucas = clasemascota("LUCAS");

console.log(fido.nombreYRaza());
console.log(lucas.nombreYRaza());
