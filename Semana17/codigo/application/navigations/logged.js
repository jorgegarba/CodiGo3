import React from 'react';
import { 
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import PlayasScreen from './../screens/playa/Playas';
import MapaScreen from './../screens/maps/Mapa';
import AddPlaya from './../screens/playa/AddPlaya';
import DetallePlaya from '../screens/playa/DetallePlaya';

import {View,Text} from 'react-native';
import LogoutScreen from '../screens/Logout';

const playasStackNavigator = createStackNavigator(
    {
        miPlayasScreen:{
            screen: PlayasScreen
        },
        miAgregarPlayasScreen:{
            screen: AddPlaya
        },
        miDetallePlayaScreen:{
            screen: DetallePlaya
        }
    },
    {
        initialRouteName: 'miPlayasScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'rgba(30,30,30,1)'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                flex: 1
            }
        }
    }
);

const mapasStackNavigator = createStackNavigator(
    {
        miMapaScreen:{
            screen: MapaScreen
        },
    },
    {
        initialRouteName: 'miMapaScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'rgba(30,30,30,1)'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                flex: 1
            }
        }
    }
);


const logoutStackNavigator = createStackNavigator(
    {
        miLogoutScreen:{
            screen: LogoutScreen
        },
    },
    {
        initialRouteName: 'miLogoutScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'rgba(30,30,30,1)'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                flex: 1
            }
        }
    }
);



const drawerNavigator = createDrawerNavigator(
    {
        miPlayasStackNavigator : {
            screen: playasStackNavigator,
            navigationOptions: ()=>{
                return({
                    drawerLabel: "Lista de Playas",
                    drawerIcon: ()=>{
                        return (<Icon name="home"
                                        size={24}
                                        style={{color:'white'}}/>)
                    }
                })
            }
        },

        miMapaStackNavigator : {
            screen: mapasStackNavigator,
            navigationOptions: ()=>{
                return({
                    drawerLabel: "Mapa de Playas",
                    drawerIcon: ()=>{
                        return (<Icon name="map"
                                        size={24}
                                        style={{color:'white'}}/>)
                    }
                })
            }
        },

        miLogoutStackNavigator : {
            screen: logoutStackNavigator,
            navigationOptions: ()=>{
                return({
                    drawerLabel: "Cerrar Sesión",
                    drawerIcon: ()=>{
                        return (<Icon name="sign-out"
                                        size={24}
                                        style={{color:'white'}}/>)
                    }
                })
            }
        },


    },
    {
        initialRouteName:'miPlayasStackNavigator',
        drawerBackgroundColor: 'rgba(128,35,60,0.7)',
        contentOptions:{
            activeTintColor: 'white',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: 'white',
            itemsContainerStyle:{
                marginVertical:0
            }
        },
        // contentComponent: ()=>(<View><Text>asd</Text></View>)
    }
);

export default createAppContainer(drawerNavigator);

