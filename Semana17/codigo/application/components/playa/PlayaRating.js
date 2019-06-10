import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase';
import {Rating} from 'react-native-elements';

export default class PlayaRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promedio: -1
        }
        this.refComentarios = firebase.database()
            .ref()
            .child(`comentarios/${this.props.idPlaya}`);
    }

    componentDidMount() {
        var promedio = 0;
        var i = 0;
        this.refComentarios.on('value', data => {
            data.forEach(fila => {
                promedio += +fila.val().rating
                i++;
            });
            promedio = promedio / i;
            if(!isNaN(promedio)){
                this.setState({
                    promedio
                });
            }
        })
    }

    render() {
        let { promedio } = this.state;       
        if (promedio === -1) {
            return (
                <View>
                    <Text style={{textAlign:'center', fontWeight:'bold'}}> Sin Puntuaciones </Text>
                </View>
            )
        }else{
            return(
                <View>
                    <Rating ref={"rating"}
                            imageSize={20}
                            readonly
                            startingValue={promedio}/>
                </View>
            )
        }
    }
}
