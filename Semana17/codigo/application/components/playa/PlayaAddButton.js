import React from 'react'
import {View, StyleSheet} from 'react-native';
import AppButton from './../AppButton';

export default function PlayaAddButton(props) {
    return (
        <View style={estilos.contenedor}>
            <AppButton bgColor={'rgba(235,38,74,0.6)'}
                            iconName={'plus'}
                            title={"Añadir Playa"}
                            action={props.formularioPlaya}
                            iconColor={"#fff"}
                            iconSize={30}
                            setWidth={true}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedor:{
        position:'absolute',
        alignSelf: 'flex-end',
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.5)'
    }
});