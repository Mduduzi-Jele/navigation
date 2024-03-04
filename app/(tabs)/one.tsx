import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

function one() {
    const router = useRouter()
    return (
        <View>
            <Text>This is tab one</Text>
            <Button title='Go back' onPress={() => router.back()} />
        </View>
    )
}

export default one