import React from 'react'
import Button from '../../Components/Button'
import { View, Text } from 'react-native'
import { styles } from '../Home/styles'

import { Background } from '../../Components/Background'
import { Papo } from '../../helpers/Images'

export default function Home({ navigation }) {

    return (
        <Background source={Papo} resizeMode='cover'>
            <View style={styles.content}>
                <Text>Olá Mundo!</Text>
                <Button
                    texto='Uber'
                    onPress={() => navigation.goBack()} />

            </View>
        </Background>
    )
}

