import React from 'react'
import Button from '../../Components/Button'
import { View, Text } from 'react-native'
import { styles } from '../Home/styles'

export default function Home({ navigation }) {

    return (
        <View style={styles.content}>
            <Text>Olá Mundo!</Text>
            <Button
                texto='Uber'
                onPress={() => navigation.goBack()} />

        </View>
    )
}

