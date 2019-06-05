import React, { Component } from 'react';
import {View, ActivityIndicator,
        StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export default class PreLoader extends Component {
    render() {
        return (
            <View style={estilos.preloader}>
                <ActivityIndicator size="large"/>
            </View>            
        )
    }
}

const estilos = StyleSheet.create({
    preloader:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#242935',
        height:height,
    }
})
