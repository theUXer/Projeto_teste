import React from 'react'
import { View, Button, Text } from 'react-native'
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery'
import { styles } from '../Inicio/styles'

export default function Inicio({ navigation }) {

    return (
        <View style={styles.content} >
            <Text>Olá mundo! Tudo bem?</Text>
            <Button
                title='Botao'
                onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
}

