import React, { Component } from 'react'

export default class Presupuesto extends Component {
    render() {
        return (
            <div className="alert alert-primary">
                Tu presupuesto: <strong>S./ {this.props.presupuesto}</strong>
            </div>
        )
    }
}
