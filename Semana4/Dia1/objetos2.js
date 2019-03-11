var mascota = {
    nombre: "Chancho",
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

mascota.nombreCompleto(4);
console.log(mascota.nombreYRaza());

mascota.nuevoNombre("Chanchito");
mascota.nombreCompleto(4);

