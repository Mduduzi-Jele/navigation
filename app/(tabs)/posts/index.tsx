import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

function index() {
  return (
    <View>
        <Link href={'/posts/1'}>Open link 1</Link>
        <Link href={'/posts/2'}>Open link 2</Link>
        <Link href={'/posts/3'}>Open link 3</Link>
    </View>
  )
}

export default index