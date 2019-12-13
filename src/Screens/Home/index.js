import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import { styles } from '../Home/styles'

import { Background } from '../../Components/Background'
import { Papo, Red_rocket, Rocket_aliens } from '../../helpers/Images'

export default function Home({ navigation }) {

    return (
        <Background source={Rocket_aliens} resizeMode='cover'>
            <View style={styles.content}>
                <Text style={styles.text}>Bem vindo!</Text>
                <Input color='#040' placeholder="Entre com seu usuário"></Input>
                <Input color='#040' placeholder="Entre com sua senha"></Input>
                <Button
                    texto='Voltar'
                    onPress={() => navigation.goBack()} />

            </View>
        </Background>
    )
}

