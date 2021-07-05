import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import { Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { Ubuntu_400Regular, Ubuntu_500Medium } from "@expo-google-fonts/ubuntu"


import AppStack from './src/routes/AppStack';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}

