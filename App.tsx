import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import {AppStack} from './src/routes/AppStack'

import { Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { Ubuntu_400Regular, Ubuntu_500Medium } from "@expo-google-fonts/ubuntu"
import { MessageProvider } from './src/hooks/useMessage'

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
    <MessageProvider>
      <AppStack />
      <StatusBar style="light" />
    </MessageProvider>
  )
}

