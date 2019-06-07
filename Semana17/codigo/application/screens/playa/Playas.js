import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackgroundImage from '../../components/BackgroundImage';
import PlayaEmpty from '../../components/playa/PlayaEmpty';
import * as firebase from 'firebase';
import PreLoader from '../../components/PreLoader';
export default class Playas extends Component {
    
    refPlayas;
    constructor(props) {
        super(props);
        this.state = {
            cargado: false,
            playas:[],
        };
        this.refPlayas = firebase.database().ref().child('playas');
    }
    componentDidMount(){
        this.refPlayas.on('value',(data)=>{
            let playasList = [];
            data.forEach((playa)=>{
                let objPlaya = {
                    id: playa.key,
                    nombre:playa.val().nombre,
                    capacidad:playa.val().capacidad,
                    lat:playa.val().lat,
                    lng:playa.val().lng,
                };
                playasList.push(objPlaya);
            });
            this.setState({
                playas:playasList,
                cargado:true,
            })
        });
    }
    

    
    render() {
        let {playas, cargado} = this.state;
        if(!cargado){
            return (<PreLoader/>);
        }else{
            if(playas.length > 0){
                return(<Text>Si hay Playitas.com</Text>)
            }else{
                return (
                    <BackgroundImage source={require('./../../../assets/bg.jpg')}>
                        <PlayaEmpty/>
                    </BackgroundImage>
                )
            }
        }
        
    }
}
