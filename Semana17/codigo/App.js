import React from 'react';

import Invitado from './application/navigations/invitado';
// importando el archivo de configuracion de firebase
import firebaseConfig from './application/utils/firebase';
// importar todas las funciones de firebase
import * as firebase from 'firebase';
// inicializar la conexion a nuestra base de datos
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <Invitado/>
    );
  }
}