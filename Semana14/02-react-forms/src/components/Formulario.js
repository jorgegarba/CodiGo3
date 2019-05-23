import React, { Component } from 'react'

export default class Formulario extends Component {

    descripcionRef;
    montoRef;
    fechaRef;

    constructor(props){
        super(props);
        this.descripcionRef = React.createRef();
        this.montoRef = React.createRef();
        this.fechaRef = React.createRef();
    }

    enviarGasto = (e)=>{
        e.preventDefault();
        let objGasto = {
            descripcion: this.descripcionRef.current.value,
            monto: this.montoRef.current.value,
            fecha: this.fechaRef.current.value,
        }

        this.props.agregarGasto(objGasto);
        
    }
    render() {
        return (
            <form onSubmit={this.enviarGasto}>
                <fieldset>
                    <legend>Gastos y Presupuestos</legend>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Descripción del Gasto</label>
                        <input type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Ejm: Comida"
                                ref={this.descripcionRef}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Monto del Gasto</label>
                        <input type="number"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Ejm: 100.00"
                                ref={this.montoRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fechaDelGasto">Fecha del Gasto</label>
                        <input type="date"
                                className="form-control"
                                id="fechaDelGasto"
                                ref={this.fechaRef}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Crear Gasto</button>
                </fieldset>
            </form>
        )
    }
}
