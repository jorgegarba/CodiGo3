function miFuncion(n1, n2, otraFuncion){
    console.log(`Numero n1 => ${n1}`);
    console.log(`Numero n2 => ${n2}`);
    otraFuncion(9);
}
miFuncion(3,7, function(x){
    console.log(`Hola soy el CallBack con ${x}`);
});
// ejemplo
console.log("-------EJEMPLO DE CALLBACK");
function busquedaDB(nombre, callback){
    let nombres = ['Karla', 'Gabriela', 'Ximena'];
    for(let i = 0; i < nombres.length; i++){
        if(nombres[i] === nombre){
            callback(true, i);
            return;
        }
    }
    callback(false, -1);
}

busquedaDB('Ximena',function(encontrado,posicion){
    if(encontrado === false){
        console.log("No se encontró el nombre");
    }else{
        console.log(`Encontrado! En posicion => ${posicion}`);
    }
});



