import React, { Component } from 'react'
import {MapView} from 'expo';

export default class Mapa extends Component {
    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: -16.53323,
                    longitude: -70.45423,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        )
    }
}
