import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { MainPage } from '../screens/MainPage'
import { GroupsPage } from '../screens/GroupsPage'
import { Header } from '../components/Header'

const { Navigator, Screen } = createMaterialTopTabNavigator()

export function TopTabs() {
  return (
    <>
      <Header />

      <Navigator   
        tabBarOptions={{
          labelStyle: { fontSize: 14, color: '#fff', fontFamily: 'Ubuntu_500Medium' },
          indicatorStyle: { backgroundColor: '#8257e6', borderRadius: 10 },
          style: { backgroundColor: '#1f1f1f' },
        }}
      >
        <Screen name="Pessoas" component={MainPage} />
        <Screen name="Grupos" component={GroupsPage} />
      </Navigator>
    </>
  )
}
