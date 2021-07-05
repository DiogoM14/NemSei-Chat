import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Chat } from '../screens/Chat'
import { TopTabs } from './TopTabs';
import { MainPage } from '../screens/MainPage';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="TabNavigator" component={TopTabs} />
        <Screen name="Chat" component={Chat} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;