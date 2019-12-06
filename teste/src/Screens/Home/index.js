import React from 'react'
import Button from '../../Components/Button'
import { View, Text } from 'react-native'

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Olá Mundo!</Text>
            <Button
                title='Botão'
                onPress={() => navigation.goBack()} />

        </View>
    )
}

