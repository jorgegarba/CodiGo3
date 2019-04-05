let alumnos = [{id:1,nombre:"Jorge",edad:"27",},
                {id:2,nombre:"Martha",edad:"90",},
                {id:3,nombre:"Javier",edad:"56",}];

let cursos = [{id:1,cursos:['POO','DB','IA']},
                {id:2,cursos:['Redes','POO']}];

let getAlumnoById = (id,callback) => {
    for(let i = 0; i < alumnos.length; i++){
        if(alumnos[i].id === id){
            callback(null,alumnos[i]);
            return;
        }
    }
    callback("Error, no se encontró el alumno");
}

let getCursosByAlumno = (objAlumno, callback)=>{
    for(let i = 0; i < cursos.length; i++){
        if(objAlumno.id === cursos[i].id){
            callback(null,cursos[i]);
            return;
        }
    }
    callback("Error, no se encontró el curso");
};

getAlumnoById(1, (error,objAlumno)=>{
    if(error){
        console.log(error);
    }else{
        getCursosByAlumno(objAlumno, (error,objCursos)=>{
            if(error){
                console.log(`El alumno ${objAlumno.nombre}`);
                console.log(`No tiene cursos registrados`);
                console.log(error);
            }else{
                console.log("Alumno Encontrado");
                console.log(objAlumno);
                console.log("Cursos Encontrados");
                console.log(objCursos);
            }
        });
    }
});

