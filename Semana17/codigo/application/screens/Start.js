import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import {APP_ID} from './../utils/facebook';
import * as firebase from 'firebase';

export default class Start extends Component {

    static navigationOptions = {
        title: 'Playas App',
    };

    iniciarSesion = () => {
        // redireccionar a la pantalla de incio de sesion
        this.props.navigation.navigate('miLogin');
    }

    registrame = () => {
        // redireccionar a la pantalla de incio de sesion
        this.props.navigation.navigate('miRegister');
    }

    facebook = async () => {
        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(
            APP_ID,{permissions:['public_profile']});
        console.log("type=> " ,type);
        console.log("token=> ",token);
        if(type ==="success"){
            const credenciales = firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInAndRetrieveDataWithCredential(credenciales);
        } 
    }

    render() {
        return (
            <BackgroundImage source={require('./../../assets/bg.jpg')}>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <AppButton
                        bgColor={'rgba(220,100,20,0.7)'}
                        iconName={'sign-in'}
                        title={"Iniciar Sesión"}
                        action={this.iniciarSesion}
                        iconColor={"#fff"}
                        iconSize={30}
                        setWidth={true}
                    />
                    <AppButton
                        bgColor={'rgba(220,200,50,0.7)'}
                        iconName={'user-plus'}
                        title={"Registrarme"}
                        action={this.registrame}
                        iconColor={"#fff"}
                        iconSize={30}
                        setWidth={true}
                    />
                    <AppButton
                        bgColor={'rgba(69,69,146,0.7)'}
                        iconName={'facebook'}
                        title={"Facebook"}
                        action={this.facebook}
                        iconColor={"#fff"}
                        iconSize={30}
                        setWidth={false}
                    />

                </View>
            </BackgroundImage>
        )
    }
}
