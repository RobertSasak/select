import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ModalScreen from '../screens/ModalScreen'
import Calculate from '../screens/Calculate'
import Prediction from '../screens/Prediction'
import BottomTabNavigator from './BottomTabNavigator'
import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Screen name="Calculate" component={Calculate} />
      <Stack.Screen name="Prediction" component={Prediction} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Group>
  </Stack.Navigator>
)

export default RootNavigator
