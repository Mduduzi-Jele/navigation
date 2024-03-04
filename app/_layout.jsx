import { Stack, router } from 'expo-router'
import React from 'react'
import { Button } from 'react-native'

function _layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: 'white'
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="register/index" options={{
                title: 'Register',
                headerRight: () => (
                    <Button title='login' onPress={() => router.push('/login/')} />
                )
            }} />
            <Stack.Screen name="login/index" options={{ title: 'Login', presentation: 'modal' }} />
            <Stack.Screen name="[missing]" options={{ title: 'Not found' }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}

export default _layout