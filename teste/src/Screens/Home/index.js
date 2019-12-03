import React from 'react'
import Button from '../../Components/Button'
import { View, Text } from 'react-native'

<View>
    <Text>Olá Mundo!</Text>
    <Button
        texto='Botão'
        onPress={() => props.navigation.navigate('Home')} />

</View>