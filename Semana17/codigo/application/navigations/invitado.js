import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
const AppNavigator = createStackNavigator(
    {
        miStart: {
            screen: StartScreen,
        },
        miLogin: {
            screen: LoginScreen
        },
        miRegister: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null,
            },
        }
    },
    {
        initialRouteName: 'miStart',
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
export default createAppContainer(AppNavigator);