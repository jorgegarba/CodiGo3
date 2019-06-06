import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import BackgroundImage from '../components/BackgroundImage';


import t from 'tcomb-form-native';
import AppButton from '../components/AppButton';
var Form = t.form.Form;


export default class Login extends Component {
    validador;


    iniciarSesion = ()=>{
        var value = this.refs.form.getValue();
        if(value){
            console.log(value);
        }else{
            console.log(value);
        }
    }

    guardarState(data){
        console.log(data);
    }
    
    render() {

        this.validador = {
            validEmail: t.refinement(t.String,(valor)=>{
                if(/@/.test(valor)){
                    return true;
                }else{
                    return false;
                }
            }),
            validPass: t.refinement(t.String,(valor)=>{
                if(valor.length >= 6){
                    return true;
                }else{
                    return false;
                }
            }),
            validPassConfirm:t.refinement(t.String,(valor)=>{
                
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
                passwordConfirm:{
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
                <View>
                    <Card title="Iniciar Sesión" wrapperStyle={{ paddingLeft: 10 }}>
                        <Form
                            ref="form"
                            type={User}
                            options={options}
                            onChange={(data)=>{
                                this.guardarState(data);
                            }}
                        />
                        <AppButton
                            bgColor={'rgba(111,38,74,0.7)'}
                            iconName={'sign-in'}
                            title={"Iniciar Sesión"}
                            action={this.iniciarSesion}
                            iconColor={"#fff"}
                            iconSize={30}
                            setWidth={false}
                        />
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}
