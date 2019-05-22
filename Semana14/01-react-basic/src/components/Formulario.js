import React, { Component } from 'react'


export default class Formulario extends Component {

    nombreRef;
    precioRef;
    
    constructor(props){
        super(props);
        // creando referencias
        this.nombreRef = React.createRef();
        this.precioRef = React.createRef();
    }

    onSubmit = (e) =>{
        e.preventDefault();
        let objProducto = {
            nombre : this.nombreRef.current.value,
            precio : this.precioRef.current.value,
        };
        // Invocando a la funcion agregarProducto que nos envia
        // el componente padre, es decir el componente Productos
        // a traves de las propiedades (props)
        this.props.agregarProducto(objProducto);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>
                    <label> Nombre del producto: </label>
                    <input type="text" ref={this.nombreRef}/>
                </p>
                <p>
                    <label> Precio del producto: </label>
                    <input type="number" ref={this.precioRef}/>
                </p>
                <p>
                    <button type="submit">Agregar Producto</button>
                </p>
            </form>
        )
    }
}
