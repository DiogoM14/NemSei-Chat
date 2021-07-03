import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainPage } from '../components/MainPage';
import { themes } from '../Global/Styles/themes';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Main" component={MainPage} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;