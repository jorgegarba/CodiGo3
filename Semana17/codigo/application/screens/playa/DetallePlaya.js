import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackgroundImage from '../../components/BackgroundImage';
import Playa from '../../components/playa/Playa';
import {ScrollView} from 'react-native';
import CommentList from '../../components/comentarios/CommentList';
import AddComment from '../../components/comentarios/AddComment';

export default class DetallePlaya extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playa: props.navigation.state.params.playa
        }
    }
    
    render() {
        return (
            <BackgroundImage source={require('./../../../assets/bg.jpg')}>
                <ScrollView>
                    <Playa objPlaya={this.state.playa}/>
                    <AddComment idPlaya={this.state.playa.id}/>
                    <CommentList idPlaya={this.state.playa.id}/>
                </ScrollView>
            </BackgroundImage>
        )
    }
}
