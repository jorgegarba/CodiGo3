import React from 'react';
import { 
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import PlayasScreen from './../screens/playa/Playas';

const playasStackNavigator = createStackNavigator(
    {
        miPlayasScreen:{
            screen: PlayasScreen
        },
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
        }
    }
);

export default createAppContainer(drawerNavigator);

