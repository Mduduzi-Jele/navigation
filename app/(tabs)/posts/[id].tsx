import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

function PostDetails() {
  const {id} = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen options={{ headerTitle: "Post "+ id}}/>
      <Text>Post {id}</Text>
    </View>
  )
}77

export default PostDetails