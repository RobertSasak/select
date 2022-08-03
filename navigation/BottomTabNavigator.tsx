import React from 'react'
import { Icon } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import About from '../screens/About'
import Contact from '../screens/Contact'
import { BottomTabParamList } from './types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
        tabBarLabelStyle: { fontWeight: '500' },
      }}
    >
      <BottomTab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="information-outline" color={color} size="xl" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account-multiple" color={color} size="xl" />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
