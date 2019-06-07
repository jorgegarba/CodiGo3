import React from 'react';

import { Text } from 'react-native';

import PreLoader from './application/components/PreLoader';

import Invitado from './application/navigations/invitado';
// importando el archivo de configuracion de firebase
import firebaseConfig from './application/utils/firebase';
// importar todas las funciones de firebase
import * as firebase from 'firebase';
import Logged from './application/navigations/logged';
// inicializar la conexion a nuestra base de datos
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      cargado: false,
    };

    // firebase.auth().signOut();
  }

  async componentDidMount(){
    await firebase.auth().onAuthStateChanged(usuario=>{
      if(!usuario){
        // El usuario no tenía la sesión iniciada
        this.setState({
          isLogged:false,
          cargado:true
        });
      }else{
        // El usuario 
        this.setState({
          isLogged:true,
          cargado:true
        });
      }
    });
    // logica de negocio
  }

  render() {
    const { isLogged, cargado } = this.state;
    if(!cargado){
      return(<PreLoader/>)
    }
    if (isLogged) {
      return (<Logged/>)
    } else {
      return (
        <Invitado />
      );
    }
  }
}