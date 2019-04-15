interface iAlumno{
    nombre:string;
    apellido:string;
    /**
     * Funcion que devuelve el nombre y el apellido
     */
    getNombreCompleto():string;
}

class Alumno implements iAlumno{
    nombre:string = "";
    apellido:string = "";
    getNombreCompleto():string{
        return "Jorge Garnica";
    }
}