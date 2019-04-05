let getNombreYApellidos = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Jorge Garnica");
        }, 2000);
    });
};

// async function
// la función se transforma en una promesa
// la sentencia 'return' equivale al 'resolve'
// la sentencia 'throw' equivale al 'reject'

let saludar = async ()=>{
    // return "repuesta resolve";
    throw 'MENSJAE DE ERROR';
};

saludar().then((respuesta)=>{
    console.log(respuesta)
}).catch((error)=>{
    console.log(error);
});


let getDatos = async ()=>{
    let respuesta = await getNombreYApellidos();
    console.log(respuesta);
    return respuesta;
};

getDatos().then((respuesta)=>{
    console.log("ultima respuesta");
    console.log(respuesta);
});
