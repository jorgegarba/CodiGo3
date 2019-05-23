import React, { Component } from 'react'

export default class Resto extends Component {

    getAlertColor= () => {
        const {presupuesto, resto} = this.props;
        if(resto >= presupuesto/2){
            return "alert alert-success";
        }else if(resto >= presupuesto/4){
            return "alert alert-warning"
        }else{
            return "alert alert-danger"
        }
    }
    render() {
        return (
            <div className={this.getAlertColor()}>
                Te quedan: <strong>S/. {this.props.resto}</strong>
            </div>
        )
    }
}
