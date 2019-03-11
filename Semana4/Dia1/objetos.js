// DEFINIENDO UN OBJETO CON PROPIEDADES
var primeraPersona = {
    nombre: "Jorge",
    edad: 27,
    dni: "12345678"
};
console.log(`nombre => ${primeraPersona.nombre}`);
console.log(`edad => ${primeraPersona.edad}`);
console.log(`dni => ${primeraPersona.dni}`);
//MODIFICANDO UNA DE LAS PROPIEDADES DEL OBJETO
primeraPersona.nombre = "Luis";
console.log(`nombre => ${primeraPersona.nombre}`);
console.log(`edad => ${primeraPersona.edad}`);
console.log(`dni => ${primeraPersona.dni}`);

// Creando un objeto con ojbetos como contenido

var vehiculo = {
    placa: "V5R-674",
    marca: "Land Rover",
    color: {
        color1:"Marron",
        color2:"Tierra"
    },
    propietarios:   [
                        {
                            nombre:"Jorge",
                            fecha: "2015"
                        },
                        {
                            nombre:"Daniel",
                            fecha:"2018"
                        }
                    ]
};

for(let i=0; i<vehiculo.propietarios.length; i++){
    console.log(`${vehiculo.propietarios[i].nombre} => ${vehiculo.propietarios[i].fecha}`);
    
}
console.log(vehiculo);