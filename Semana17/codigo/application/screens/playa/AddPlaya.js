import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import BackgroundImage from './../../components/BackgroundImage';
import * as firebase from 'firebase';
import t from 'tcomb-form-native';
import AppButton from './../../components/AppButton';
var Form = t.form.Form;


export default class AddPlaya extends Component {

    crearPlaya = ()=>{

    }

    render() {

        var Playa = t.struct({
            nombre: t.String,
            direccion: t.String,
            capacidad: t.Number,
            latitud: t.String,
            longitud: t.String,
        });

        var options = {
            fields: {
                nombre: {
                    error: 'Ingrese un nombre',
                    label: 'Nombre de Playa',
                    placeholder: 'Ejm: Central'
                },
                direccion: {
                    error: 'Ingrese una dirección',
                    label: 'Dirección de la Playa',
                    placeholder: 'Ejm: Av. Progreso 244'
                },
                capacidad: {
                    label: 'Capacidad de Vehiculos',
                },
            }
        };

        return (
            <BackgroundImage source={require('./../../../assets/bg.jpg')}>
                <View>
                    <Card title="Agregar una Playa" wrapperStyle={{ paddingLeft: 10 }}>
                        <Form
                            ref="form"
                            type={Playa}
                            options={options}
                        />
                        <AppButton
                            bgColor={'rgba(255,38,74,0.8)'}
                            iconName={'plus'}
                            title={"Crear Playa"}
                            action={this.crearPlaya}
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
