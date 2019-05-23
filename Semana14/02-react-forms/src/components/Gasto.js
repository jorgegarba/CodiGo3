import React, { Component } from 'react'

export default class Gasto extends Component {
    render() {
        return (
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.props.gasto.descripcion}</h5>
                    <small>{this.props.gasto.fecha}</small>
                </div>
                <p className="mb-1">S/. {this.props.gasto.monto}</p>
                <small>{this.props.gasto.id}</small>
            </a>
        )
    }
}
