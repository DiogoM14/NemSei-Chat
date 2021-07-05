import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Chat } from '../screens/Chat'
import { TopTabs } from './TopTabs';

const { Navigator, Screen } = createStackNavigator();

export function AppStack() {
  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="TabNavigator" component={TopTabs} />
        <Screen name="Chat" component={Chat} />
      </Navigator>
    </NavigationContainer>
    </View>
  )
}
