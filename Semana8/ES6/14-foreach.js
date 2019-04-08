let arreglo = 
    [{
        nombre:"Jorge",
        apellido:"Garnica"
    },
    {
        nombre:"Javier",
        apellido:"Medina"
    },];

arreglo.forEach((elemento,index)=>{
    console.log(index);
    console.log(elemento.nombre + " " +elemento.apellido);
});