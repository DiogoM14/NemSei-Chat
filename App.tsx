import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MainPage } from './src/components/MainPage';
import AppStack from './src/routes/AppStack';

export default function App() {
  return (
    <>
      <AppStack />
      <StatusBar style="auto" />
    </>
  );
}

