import { createAppContainer, createSwitchNavigator } from 'reat-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import InicioScreen from '../Screens/Inicio/index'
import HomeScreen from '../Screens/Home/index'

const PjNavigator = createStackNavigator({
    Inicio: {
        screen: InicioScreen,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: HomeScreen,
    }
})