import React, { Component } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      gastos:[]
    }
  }

  agregarGasto = (objGasto) => {
    let {gastos} = this.state;
    gastos.push(objGasto);
    this.setState({
      gastos
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Formulario agregarGasto={this.agregarGasto}/>
            </div>
            <div className="col-md-6">
              columna 2
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
