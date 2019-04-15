class Vehiculo {
    // public color:string = "";
    constructor(color, modelo) {
        this.color = color;
        this.modelo = modelo;
        this.marca = "Defecto";
        this._id = 0;
        // this.color=color;
    }
    get id() {
        return this._id;
    }
    set id(nuevoId) {
        this._id = nuevoId;
    }
    imprimirModeloYMarca() {
        console.log(this.modelo + " " + this.marca);
    }
    metodoPrivado() {
        console.log("Este es un metodo privado");
    }
    static obtenerFecha() {
        return new Date();
    }
}
let objVehiculo = new Vehiculo("Rojito", "CX-3");
console.log(`Modelo ${objVehiculo.modelo}`);
objVehiculo.imprimirModeloYMarca();
objVehiculo.id = 90;
console.log(objVehiculo.id);
console.log(Vehiculo.obtenerFecha());
console.log("Chau");
// Codigo para crear un atributo privado en JavaScript
// let Carro = ():any=>{
//     let privado = 9;
//     let objCarro = {
//         atributoPublico:8,
//         getPrivado : ():number=>{
//             return privado;
//         }
//     }
//     return objCarro;
// }
// let nuevoCarro = new Carro();
// console.log(nuevoCarro.getPrivado());
