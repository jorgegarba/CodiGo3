let alumnos = [{id:1,nombre:"Jorge",edad:"27",},
                {id:2,nombre:"Martha",edad:"90",},
                {id:3,nombre:"Javier",edad:"56",}];

let cursos = [{id:1,cursos:['POO','DB','IA']},
                {id:2,cursos:['Redes','POO']}];

let getAlumnoById = async (id) => {
    for(let i = 0; i < alumnos.length; i++){
        if(alumnos[i].id === id){
            return  (alumnos[i]);
        }
    }
    throw "Error, no se encontró el alumuno";
}

let getCursosByAlumno = async (objAlumno)=>{
    for(let i = 0; i < cursos.length; i++){
        if(objAlumno.id === cursos[i].id){
            return (cursos[i]);
        }
    }
    throw "Error, no se encontró el curso";
};

async function consumirDatos(){
    let objAlumno = await getAlumnoById(1);
    let cursos = await getCursosByAlumno(objAlumno);
    console.log(cursos);
}

console.log("primera linea");
consumirDatos();
console.log("tercera linea");