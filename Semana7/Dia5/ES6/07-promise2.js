let alumnos = [{id:1,nombre:"Jorge",edad:"27",},
                {id:2,nombre:"Martha",edad:"90",},
                {id:3,nombre:"Javier",edad:"56",}];

let getAlumnoById = (id,callback) => {
    for(let i = 0; i < alumnos.length; i++){
        if(alumnos[i].id === id){
            callback(null,alumnos[i]);
            return;
        }
    }
    callback("Error, no se encontró");
}
getAlumnoById(3, (error,objAlumno)=>{
    if(error){
        console.log(error);
    }else{
        console.log(objAlumno);
    }
});

