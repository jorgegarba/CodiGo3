import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import AppButton from '../AppButton';
import PlayaRating from './PlayaRating';

export default class Playa extends Component {
    render() {
        const playa = this.props.objPlaya;

        return (
            <Card title={playa.nombre}
                  image={require('./../../../assets/icon.png')}>
                    <PlayaRating idPlaya={playa.id}/>
                    <Text style={{marginBottom:10,marginTop:10}}>
                        {`Capacidad: ${playa.capacidad} vehiculos`}
                    </Text>
                    <AppButton bgColor={'rgba(255,38,74,0.8)'}
                            iconName={'pencil'}
                            title={"Editar una Playa"}
                            action={()=>{}}
                            iconColor={"#fff"}
                            iconSize={30}
                            setWidth={false}/>

                    <AppButton bgColor={'rgba(28,25,21,0.8)'}
                            iconName={'arrow-left'}
                            title={"Regresar"}
                            action={()=>{}}
                            iconColor={"#fff"}
                            iconSize={30}
                            setWidth={false}/>
                            
            </Card>
        )
    }
}
