import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ModalScreen from '../screens/ModalScreen'
import Calculate from '../screens/Calculate'
import Prediction from '../screens/Prediction'
import BottomTabNavigator from './BottomTabNavigator'
import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from './types'
import P1 from '../screens/P1'
import P2 from '../screens/P2'
import P3 from '../screens/P3'
import P4 from '../screens/P4'
import P5 from '../screens/P5'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Calculate" component={Calculate} />
      <Stack.Screen name="P1" component={P1} />
      <Stack.Screen name="P2" component={P2} />
      <Stack.Screen name="P3" component={P3} />
      <Stack.Screen name="P4" component={P4} />
      <Stack.Screen name="P5" component={P5} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Screen name="Prediction" component={Prediction} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Group>
  </Stack.Navigator>
)

export default RootNavigator
