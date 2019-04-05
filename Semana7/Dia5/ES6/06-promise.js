
let promesa = ()=>{
    return new Promise((resolve,reject)=>{
        //tooodo mi codigo async
        // tanto a la función resolve como reject
        // se puede enviar 1 parámetro como 
        // máximo.
        //Dar una respuesta positiva
        // resolve("BIEN!");
        //Dar una respues negativa
        // reject("MAL!");
        setTimeout(() => {
            reject("Promesa Finalizada");
        }, 3000);    
    });
};
// then() =>  responde a la ejecución de la función
// resolve() enviada desde la promesa
// catch() => reponde a la ejecución de la función
// reject() enviada desde la promesa

promesa().then((respuesta)=>{
    console.log("linea 2");
    console.log(respuesta);
}).catch((respuesta)=>{
    console.log(respuesta);
});