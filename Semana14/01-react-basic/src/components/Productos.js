import React, { Component } from 'react'
import Producto from './Producto';
import Button from './../ui/Button';
import Formulario from './Formulario';
export default class Productos extends Component {

    constructor(props) {
        super(props);
        console.log("constructor");
        // El state, es un objeto de Component que sirve para guardar datos
        // El state, solo se inicializa una vez.
        this.state = {
            productos: this.props.productos
        };
    }

    componentDidMount() {
        // Funcion que se ejecuta después de que el componente ha renderizado su vista.
        // Usualmente, se usa este componente, para hacer peticiones asincronas
        // EJM: ajax, apis, etc.
        console.log("componentDidMount");
        // setState es una funcion que recive como parametro
        // el nuevo valor del objeto state en forma de un JSON.
        setTimeout(() => {
            let { productos } = this.state;
            productos.push({
                nombre: 'Teclado',
                precio: 30
            });
            this.setState({
                productos: productos
            })
        }, 3000);

    }

    componentWillUpdate() {
        // Funcion que se ejecuta antes de que el 'state' sea modificado
        console.log("componentWillUpdate");
    }

    addProduct = () => {
        console.log("add product ejectuado");

        let { productos } = this.state;
        productos.push({
            nombre: 'CPU',
            precio: 4000
        });
        this.setState({
            productos: productos
        })
    }

    addProductDeFormulario(objProducto){
        let {productos} = this.state;
        productos.push(objProducto);
        this.setState({
            productos:productos
        })
    }

    render() {
        console.log("render");
        let { productos } = this.state;
        return (
            <div>
                <h3>Lista de Productos</h3>
                {
                    productos.map((prod, i) => {
                        return <Producto producto={prod}
                            key={i} />
                    })
                }
                <Button texto={"Texto"}
                        click={this.addProduct}>
                </Button>

                {/* <button onClick={this.addProduct.bind(this)}> Agregar producto </button> */}
                {/* {productos.map((prod,i) => <Producto producto={prod} key={i}/>)} */}

                <hr/>
                <h4>Formulario</h4>

                <Formulario agregarProducto={this.addProductDeFormulario.bind(this)}/>

            </div>
        )
    }
}
