import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import InicioScreen from '../Screens/Inicio'
import HomeScreen from '../Screens/Home'

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

export default createAppContainer(PjNavigator)