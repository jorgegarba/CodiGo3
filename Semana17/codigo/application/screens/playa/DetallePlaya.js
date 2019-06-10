import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DetallePlaya extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playa: props.navigation.state.params.playa
        }
    }
    
    render() {
        return (
            <View>
                <Text> Detalle de playa  </Text>
            </View>
        )
    }
}
