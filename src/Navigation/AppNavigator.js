import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import InicioScreen from '../Screens/Inicio'
import HomeScreen from '../Screens/Home'
import PrincipalScreen from '../Screens/Principal'

const PjNavigator = createStackNavigator({
    Inicio: {
        screen: InicioScreen,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Principal: {
        screen: PrincipalScreen,
        navigationOptions: {
            header: null
        }
    }
})

export default createAppContainer(PjNavigator)