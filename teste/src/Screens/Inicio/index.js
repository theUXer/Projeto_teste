import React from 'react'
import { View, Button, Text } from 'react-native'
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery'

export default function Inicio() {
    return (
        <View>
            <Text>Olá mundo!</Text>
            <Button texto='Botão'
                onPress={() => props.navigation.navigate('Home')}></Button>
        </View>
    )
}

