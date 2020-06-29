class Camioneta extends Vehiculo{
    turbo = new Boolean(false);
    /**
     * Sobreescritura del constructor
     */ 
    constructor(newPlaca,newColor,newCategoria,newTurbo){
        /**
         * Funcion constructora del padre (Vehiculo)
         * que recibe los 3 parametros, ya solo queda por 
         * asignar el parametro turbo
         */
        super(newPlaca, newColor, newCategoria);
        this.turbo = newTurbo;
    }
    /**
     * Función que llama a la imprimirDatos para aumentar una linea
     * de impresión
     */
    imprimirDatosCamioneta = ()=>{
        this.imprimirDatos();
        console.log(`---- ¿ Turbado ? => ${this.turbo}`);
    }
}