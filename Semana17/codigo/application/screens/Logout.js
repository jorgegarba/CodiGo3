import React, { Component } from 'react';
import {Alert} from 'react-native';
import * as firebase from 'firebase';

export default class Logout extends Component {
    componentDidMount(){
        firebase.auth().signOut().then(()=>{
            Alert.alert("Exito!","Se ha cerrado sesión correctamente");
        });
    }

    render() {
        return null;
    }
}
