import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'

export default class PlayaEmpty extends Component {
    render() {
        return (
            <View style={misEstilos.playaView}>
                <Text style={misEstilos.playaText}> No hay playas disponibles </Text>
            </View> 
        )
    }
}

const misEstilos = StyleSheet.create({
    playaView:{
        justifyContent:'center',
        flex:1,
        marginTop:10,
        marginBottom:10
    },
    playaText:{
        backgroundColor:'rgba(10,225,10,0.5)',
        color:'white',
        textAlign:'center',
        padding:20
    }
});


