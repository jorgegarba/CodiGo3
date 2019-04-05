class Registro{
    regId = new Number();
    regFechin = new Date();
    regFechfin = new Date();
    regVehiculo = new Vehiculo("","","");
    regPrecio = new Number();

    constructor(newRegId,newRegFechin, newRegFechfin,
                newRegVehiculo, newRegPrecio){
        this.regFechfin = newRegFechfin;
        this.regFechin = newRegFechin;
        this.regPrecio = newRegPrecio;
        this.regVehiculo = newRegVehiculo;
        this.regId = newRegId;
    }

    getHoraEntrada(){
        let horaEntrada = "";
        horaEntrada = this.regFechin.getHours();
        horaEntrada += ":";
        horaEntrada += this.regFechin.getMinutes();
        horaEntrada += ":";
        horaEntrada += this.regFechin.getSeconds(); 
        return horaEntrada;
    }

}