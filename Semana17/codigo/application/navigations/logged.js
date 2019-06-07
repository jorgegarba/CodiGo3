import { 
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';

import PlayasScreen from './../screens/playa/Playas';

const playasStackNavigator = createStackNavigator(
    {
        miPlayasScreen:{
            screen: PlayasScreen
        }
    }
)