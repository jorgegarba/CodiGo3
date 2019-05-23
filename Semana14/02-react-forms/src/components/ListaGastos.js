import React, { Component } from 'react'
import Gasto from './Gasto';
import Presupuesto from './Presupuesto';
import Resto from './Resto';

export default class ListaGastos extends Component {

    render() {
        let { gastos } = this.props;
        return (
            <React.Fragment>
                <h4>Lista de Gastos</h4>
                <hr />
                
                <Presupuesto presupuesto={this.props.presupuesto}/>

                <Resto resto={this.props.resto}
                        presupuesto={this.props.presupuesto}/>

                <div className="list-group mt-2">
                    
                    {gastos.map(gasto => <Gasto key={gasto.id} gasto={gasto} />)}
                </div>
            </React.Fragment>
        )
    }
}
