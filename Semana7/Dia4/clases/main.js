$(function(){

    var objVehiculo1 = new Vehiculo("QWE-123","Rojo","MOTO");
    // Ejectuando funciones que no retornan valor
    objVehiculo1.imprimirDatos();
    // Ejecutando funciones que retornan valor
    console.log(objVehiculo1.getLetrasDePlaca());
    console.log(Vehiculo.getFecha().getDay());

    // Ejectuando un setter
    objVehiculo1.setColor("Azul");
    console.log(objVehiculo1.getColor());

    // Ejecutando un setter ES6
    objVehiculo1.categoria = "Camioneta";
    // Ejcutnado un getter ES6
    console.log(objVehiculo1.categoria);

    
    // Las funciones estaticas son exclusivas de las clases, no de
    // los objetos
    // console.log(objVehiculo1.getFecha().getDay()); ERROR


});