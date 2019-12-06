import React from 'react'
import { TouchableOpacity, Text } from 'react-native'


export default function Button({ onPress, texto }) {
    return (
        <TouchableOpacity
            style={[{
                borderRadius: 50,
                width: 300,
                height: 200,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000'
            }, props.style]}
            onPress={onPress}>
            <Text style={{ color: '#fff' }}>{texto}</Text>
        </TouchableOpacity>
    )
}
