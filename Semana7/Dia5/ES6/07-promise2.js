let alumnos = [{id:1,nombre:"Jorge",edad:"27",},
                {id:2,nombre:"Martha",edad:"90",},
                {id:3,nombre:"Javier",edad:"56",}];

let getAlumnoById = (id) => {
    return new Promise((resolve,reject)=>{
        for(let i = 0; i < alumnos.length; i++){
            if(alumnos[i].id === id){
                resolve(alumnos[i]);
                return;
            }
        }
        reject("Error, no se encontró");
    });
}
getAlumnoById(30).then((objAlumno)=>{
    console.log(objAlumno);
}).catch((error)=>{
    console.error(error);
});