window.addEventListener("load",function(){
    //localStorage => Objecto creado por defecto
    //que sirve para guardar datos en el navegador
    //OBS => Los datos se pierden cuando el navegador es cerrado.
    //setItem([clave],[valor])=>
    // clave => es el nombre de la variable que se creará en el localStorage
    // valor => es el valor que le pertenecerá a dicha clave.
    localStorage.setItem("nombre","Jorge Luis");
    //getItem([clave])=> obtiene un valor dada una clave
    // document.querySelector("body").innerHTML = localStorage.getItem("nombre");
    //removeItem([clave])=> borra una clave del LocalStorage
    localStorage.removeItem("nombre");
    // Creando un objeto que represente a una factura
    let factura = {
        fecha:'18.03.2019',
        total:'S/.1900.00',
        productos: [{
                        nombre:"Cocina"
                    },
                    {
                        nombre:"Lavadora"
                    },
                    {
                        nombre:"Refrigerador"
                    }]
    };

    
    // JSON.stringify([objeto])=> convierte el objeto a una cadena o string
    // Es necesario realizar este paso ya que el localStora, acepta strings solamente
    let facturaString = JSON.stringify(factura);
    localStorage.setItem("factura",facturaString);

    // JSON.parse([string]) => convierte una cadena o string a un objeto JSON
    let facturaStorageString = localStorage.getItem("factura");
    let facturaStorageJSON = JSON.parse(facturaStorageString);
    console.log(facturaStorageJSON);


    var boton = document.getElementById("btn");
    var link = document.getElementById("link");

    boton.addEventListener("click",function(evento){
        //preventDefault => anula cualquier accion por 
        //defecto que se realice al hacer click a un
        //elemento
        evento.preventDefault();
    });

    link.addEventListener("click",function(evento){
        evento.preventDefault();
    });



});