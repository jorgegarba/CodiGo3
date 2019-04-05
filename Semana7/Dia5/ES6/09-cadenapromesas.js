let alumnos = [{id:1,nombre:"Jorge",edad:"27",},
                {id:2,nombre:"Martha",edad:"90",},
                {id:3,nombre:"Javier",edad:"56",}];

let cursos = [{id:1,cursos:['POO','DB','IA']},
                {id:2,cursos:['Redes','POO']}];

let getAlumnoById = (id) => {
    return new Promise((resolve,reject)=>{
        for(let i = 0; i < alumnos.length; i++){
            if(alumnos[i].id === id){
                resolve(alumnos[i]);
                return;
            }
        }
        reject("Error, no se encontró el alumuno");
    });
}

let getCursosByAlumno = (objAlumno)=>{
    return new Promise((resolve, reject)=>{
        for(let i = 0; i < cursos.length; i++){
            if(objAlumno.id === cursos[i].id){
                resolve(cursos[i]);
                return;
            }
        }
        reject("Error, no se encontró el curso");
    });
};

getAlumnoById(1).then((objAlumno)=>{
    return getCursosByAlumno(objAlumno);
}).then((cursos)=>{
    console.log(cursos);
}).catch((error)=>{
    console.error(error);
});