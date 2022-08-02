import React from 'react'
import { Icon } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import About from '../screens/About'
import Contact from '../screens/Contact'
import { BottomTabParamList } from './types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="information-outline" />,
        }}
      />
      <BottomTab.Screen
        name="Contact"
        component={Contact}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="account-multiple" />,
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
