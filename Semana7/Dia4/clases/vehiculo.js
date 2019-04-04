class Vehiculo{
    placa = new String("");
    color = new String("");
    _categoria = new String("");
    /**
     * Constructor de la clase
     * @param {String} newPlaca 
     * @param {String} newColor 
     * @param {String} newCategoria 
     */
    constructor(newPlaca,newColor,newCategoria){
        this.placa = newPlaca;
        this.color = newColor;
        this._categoria = newCategoria;
    }

    // Getters y Setters
    // Getter => Función que retorna el valor de un atributo encapsulado
    // Setter => Función que modifica o [Settea] el valor de un atributo encapsulado
    // A continuación getters y setters con funciones 
    // tradicionales 
    setColor(newColor){
        this.color = newColor;
    }
    getColor(){
        return this.color;
    }
    // A continuación, getters y setter de acuerdo al 
    // estándar ES6
    set categoria(newCategoria){
        this._categoria = newCategoria;
    }
    get categoria(){
        return this._categoria;
    }

    /**
     * Método que imprime los datos del Vehiculo
     * No recibe parametros ni retorna valor
     */
    imprimirDatos(){
        console.log("/////INFO DEL VEHICULO//////");
        console.log(`---- Placa => ${this.placa}`);
        console.log(`---- Categoria => ${this._categoria}`);
        console.log(`---- Color => ${this.color}`);
    }
    /**
     * Método que devuelve los 3 primeros caracteres
     * de la placa del vehículo
     * [return] 3 caracteres
     */
    getLetrasDePlaca(){
        return this.placa.substr(0,3);
    }
    /**
     * Método estático que devuelve la fecha actual
     * [return] objeto Date con fecha actual
     */
    static getFecha(){
        let fecha = new Date();
        return fecha;
    }
}