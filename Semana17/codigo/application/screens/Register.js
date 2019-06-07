import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import BackgroundImage from '../components/BackgroundImage';

import * as firebase from 'firebase';

import t from 'tcomb-form-native';
import AppButton from '../components/AppButton';
var Form = t.form.Form;

export default class Register extends Component {
    validador;

    constructor(props) {
        super(props);
        this.state = {
            credentials: ''
        }
    }
    registrarme = () => {
        var value = this.refs.form.getValue();
        if (value) {
            // proceder con el registro
            console.log(value);
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
                .then((response) => {
                    console.log("Usuario ha sido creado con exito");
                    console.log(response);
                    // crear el usuario en la base de datos
                    firebase.database().ref().child('usuarios').child(response.user.uid).set({
                        nombre: 'Pepito',
                        apellido: 'Pepon'
                    }).then(() => {
                        console.log("usuario creado en la base de datos realtime");
                    }).catch(() => {
                        console.log("Error al crear el usuario en la base de datos real time");
                    })

                }).catch((error) => {
                    console.log("ocurrió un error al crear el usuario");
                    console.log(error);
                })

        } else {
            // el error se generará
            console.log(value);
        }
    }

    guardarState(data) {
        console.log(data);
        this.setState({
            credentials: data
        });
    }

    render() {

        this.validador = {
            validEmail: t.refinement(t.String, (valor) => {
                if (/@/.test(valor)) {
                    return true;
                } else {
                    return false;
                }
            }),
            validPass: t.refinement(t.String, (valor) => {
                if (valor.length >= 6) {
                    return true;
                } else {
                    return false;
                }
            }),
            validPassConfirm: t.refinement(t.String, (valor) => {
                if (valor === this.state.credentials.password) {
                    return true;
                } else {
                    return false;
                }
            }),
        };

        var User = t.struct({
            email: this.validador.validEmail,
            password: this.validador.validPass,
            passwordConfirm: this.validador.validPassConfirm,
        });

        var options = {
            fields: {
                email: {
                    help: 'Introduce tu email',
                    error: 'Email Incorrecto',
                    autoCapitalize: 'none',
                    label: 'Correo Electronico',
                    placeholder: 'Ejm: jgarnica@gmail.com'
                },
                password: {
                    help: 'Introduce tu password',
                    error: 'Password Incorrecto',
                    password: true,
                    secureTextEntry: true,
                    label: 'Contraseña'
                },
                passwordConfirm: {
                    help: 'Confirma tu password',
                    error: 'Las contraseñas no coinciden',
                    password: true,
                    secureTextEntry: true,
                    label: 'Confirmar Contraseña'
                }
            }
        };

        return (
            <BackgroundImage source={require('./../../assets/bg.jpg')}>
                <ScrollView style={estilos.scroll}>
                    <View style={estilos.container}>
                        <Card containerStyle={estilos.card} title="Iniciar Sesión" >
                            <Form
                                value={this.state.credentials}
                                ref="form"
                                type={User}
                                options={options}
                                onChange={(data) => {
                                    this.guardarState(data);
                                }}
                            />
                            <AppButton
                                bgColor={'rgba(111,38,74,0.7)'}
                                iconName={'sign-in'}
                                title={"Iniciar Sesión"}
                                action={this.registrarme}
                                iconColor={"#fff"}
                                iconSize={30}
                                setWidth={false}
                            />
                        </Card>
                    </View>
                </ScrollView>
            </BackgroundImage>
        )
    }
}


var estilos = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
    },
    card: {
        width: '90%',
        borderRadius: 10,
        marginBottom: 20
    },
    scroll: {
        paddingVertical: 20,
        marginBottom: 20
    }
});