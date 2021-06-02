import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainPage } from '../components/MainPage';
import { Chat } from '../components/Chat';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: true }}>
        <Screen name="Main" component={MainPage} />
        <Screen name="Chat" component={Chat} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;