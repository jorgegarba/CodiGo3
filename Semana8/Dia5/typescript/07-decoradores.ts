function elDecorador(mensaje:string){
    return function(target){
        target.prototype.decorar = function(){
            console.log(`El mensaje es ${mensaje}`);
        }
    }
}
@elDecorador("Mensaje decorado")
class Equipo{
    constructor(integrantes:Array<string>,
                nombre:string){
    }
    saludar():void{
        console.log("Buenas");
    }
}
let objEquipo = new Equipo([],"");
objEquipo.decorar();

