import React, { Component } from 'react'

import {FlatList} from 'react-native'
import {ListItem} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import BackgroundImage from '../../components/BackgroundImage';
import PlayaEmpty from '../../components/playa/PlayaEmpty';
import * as firebase from 'firebase';
import PreLoader from '../../components/PreLoader';
import PlayaAddButton from '../../components/playa/PlayaAddButton';

import {Notifications, Permissions} from 'expo';

export default class Playas extends Component {

    refPlayas;
    constructor(props) {
        super(props);
        this.state = {
            cargado: false,
            playas: [],
        };
        this.refPlayas = firebase.database().ref().child('playas');
    }

    registerForPushNotifications = async ()=>{
        // chekar el status de los permisos
        const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = status;
        
        // si el permiso no existe, pedirlo al usuario 
        if(status !== 'granted'){
            const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        // si aun asi no hay permisos, salir de la funcion
        if(finalStatus !== 'granted'){return;}

        //get push notification token
        let token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
        
        //agregar token a firebase
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref().child(`usuarios/${uid}`).update({
            tokenNotifications:token
        })

    }

    componentDidMount() {
        this.registerForPushNotifications();

        this.refPlayas.on('value', (data) => {
            let playasList = [];
            data.forEach((playa) => {
                let objPlaya = {
                    id: playa.key,
                    nombre: playa.val().nombre,
                    capacidad: playa.val().capacidad,
                    direccion: playa.val().direccion,
                    lat: playa.val().lat,
                    lng: playa.val().lng,
                };
                playasList.push(objPlaya);
            });
            this.setState({
                playas: playasList,
                cargado: true,
            })
        });
    }

    detallePlaya = (playa)=>{
        const navegador = NavigationActions.navigate({
            routeName: 'miDetallePlayaScreen',
            params:{
                playa:playa
            }
        });
        this.props.navigation.dispatch(navegador);
    }

    renderItems(item){
        return(
            <ListItem roundAvatar
                      title={`Playa ${item.nombre}`}
                      leftAvatar={{source: require('./../../../assets/icon.png')}}
                      rightIcon={{name:'arrow-right',
                                  type:'font-awesome',
                                  marginRight:10,
                                  fontSize:15,
                                  color:'white'}}
                      titleStyle={{color:'white'}}
                      containerStyle={{padding:5,
                                backgroundColor:'rgba(206,206,206,0.6)'}}
                      onPress={()=>{this.detallePlaya(item)}}
            >
            </ListItem>
        )
    }

    formularioPlaya = ()=>{
        this.props.navigation.navigate('miAgregarPlayasScreen');
    }

    render() {
        let { playas, cargado } = this.state;
        if (!cargado) {
            return (<PreLoader />);
        } else {
            if (playas.length > 0) {
                return (
                    <BackgroundImage source={require('./../../../assets/bg.jpg')}>
                        <FlatList data={playas}
                                renderItem={({item})=>{
                                    return this.renderItems(item);
                                }}
                                keyExtractor={(data)=>{
                                    return data.id
                                }}>
                        </FlatList>
                        <PlayaAddButton formularioPlaya={this.formularioPlaya}/>
                    </BackgroundImage>
                )
            } else {
                return (
                    <BackgroundImage source={require('./../../../assets/bg.jpg')}>
                        <PlayaEmpty />
                    </BackgroundImage>
                )
            }
        }

    }
}
