import React, { Component } from 'react'
import { Text, View, Alert, KeyboardAvoidingView} from 'react-native'
import { Card } from 'react-native-elements';
import BackgroundImage from './../../components/BackgroundImage';
import * as firebase from 'firebase';
import t from 'tcomb-form-native';
import AppButton from './../../components/AppButton';
import sliderTemplate from '../../components/playa/SliderTemplate';
var Form = t.form.Form;


export default class AddPlaya extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playa: {
                capacidad: 0,
                nombre: '',
                direccion: '',
                longitud: '',
                latitud: '',
            }
        }
        this.referencia = firebase.database().ref().child('playas');
    }

    crearPlaya = () => {
        var value = this.refs.form.getValue();
        if(value){
            // obtener un identificador unico en la referencia
            const id = this.referencia.push().key;
            this.referencia.child(id).set({
                nombre:this.state.playa.nombre,
                capacidad:this.state.playa.capacidad,
                direccion:this.state.playa.direccion,
                lat:this.state.playa.latitud,
                lng:this.state.playa.longitud,
            }).then(()=>{
                Alert.alert('Exito!','Se ha creado la playa correctamente');                
                this.props.navigation.navigate('miPlayasScreen');
            })
        }
    }

    guardarState = (data) => {
        this.setState({
            playa:data
        })
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
                    label: 'Capacidad',
                    help: 'Capacidad de Vehiculos',
                    config: {
                        step:1,
                        max:200,
                        min:1
                    },
                    template: sliderTemplate
                },
            }
        };

        return (
            <BackgroundImage source={require('./../../../assets/bg.jpg')}>
                <View>
                    <KeyboardAvoidingView behavior={'position'}>
                        <Card title="Agregar una Playa" wrapperStyle={{ paddingLeft: 10 }}>
                        <Form
                            ref="form"
                            type={Playa}
                            options={options}
                            onChange={(data) => {
                                this.guardarState(data);
                            }}
                            value={this.state.playa}
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
                    </KeyboardAvoidingView>
                </View>
            </BackgroundImage>
        )
    }
}
