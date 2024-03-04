import { Tabs } from 'expo-router'
import React from 'react'

function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name='one' options={{
            headerTitle: "Tab One",
            tabBarLabel: "Tab One"
        }} />
         <Tabs.Screen name='two' options={{
            headerTitle: "Tab Two",
            tabBarLabel: "Tab Two"
        }} />
        <Tabs.Screen name='posts' options={{
            headerTitle: "Tab Posts",
            tabBarLabel: "Tab Posts",
            headerShown: false
        }} />
    </Tabs>
  )
}

export default _layout