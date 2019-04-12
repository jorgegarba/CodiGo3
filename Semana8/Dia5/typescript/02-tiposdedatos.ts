// string
let miCadena:string = "una cadena";
miCadena = "Un nuevo valor";
// number
let miNumero:number = 5;
miNumero = 123456;
// booleano
let miBooleano:boolean = true;
miBooleano = false;
// any => cualquier tipo de dato
let miAny:any = true;
miAny = "Cadena";
miAny = 7;
// Arreglitos
let peliculas:Array<string> = ['Peli1','Peli2'];
let arregloNumeros:number[] = [1,4,67,45,158];
let arregloMultiGato:Array<any> = ['string',true,2];

// variables bidatos
let alfanumerico:number|string = "Algo";

// Definir tipo de dato
type stringbool = string | boolean;
let miStringBool:stringbool = "alguito";