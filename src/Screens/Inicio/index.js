import React from 'react'
import { View, Button, Text } from 'react-native'
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery'
import { styles } from '../Inicio/styles'

import { Background } from '../../Components/Background'

import { Baby, Red_rocket, Rocket_aliens } from '../../helpers/Images'
export default function Inicio({ navigation }) {

    return (
        <Background source={Baby} resizeMode='cover'>
            <View style={styles.content} >
                <Text style={styles.text}>Olá mundo! Tudo bem?</Text>
                <Button style={styles.botao}
                    title='lala'
                    onPress={() => navigation.navigate('Home')}></Button>
            </View>
        </Background >
    )
}

