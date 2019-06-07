import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackgroundImage from '../../components/BackgroundImage';
import PlayaEmpty from '../../components/playa/PlayaEmpty';

export default class Playas extends Component {
    render() {
        return (
            <BackgroundImage source={require('./../../../assets/bg.jpg')}>
                <PlayaEmpty/>
            </BackgroundImage>
        )
    }
}
