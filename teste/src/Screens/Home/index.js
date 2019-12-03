import React from 'react'
import Button from '../../Components/Button'
<View>
    <Text>Olá Mundo!</Text>
    <Button
        texto='Botão'
        onPress={() => props.navigation.navigate('Home')} />

</View>