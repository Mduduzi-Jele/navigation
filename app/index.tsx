import React from 'react'
import { View, Text, Button } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

function index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar style='light' />
      <Text>Home page</Text>
      <Link href={'/register/'} asChild>
        <Button title='Open Register Page' />
      </Link>
      <Link href={'/(tabs)/one'} asChild>
        <Button title='Open tab one' />
      </Link>
    </View>
  )
}

export default index