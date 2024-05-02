import React from 'react'
import { Heading, IconButton, Icon, HStack } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  PredictionTabParamList,
  RootStackScreenProps,
} from '../navigation/types'
import Risk from '../screens/Risk'
import Cosy from '../screens/Cosy'
import { Model } from '../types'

import COSY_SeLECT_ASyS from '../models/COSY_SeLECT_ASyS'
import COSY_SeLECT2 from '../models/COSY_SeLECT2'
import SeLECT_ASyS from '../models/SeLECT_ASyS'
import SeLECT2 from '../models/SeLECT2'

const BottomTab = createBottomTabNavigator<PredictionTabParamList>()

const Prediction = ({
  navigation,
  route,
}: RootStackScreenProps<'Prediction'>) => {
  const { score, model } = route.params
  const cosy = model === Model.SeLECT2 ? COSY_SeLECT2 : COSY_SeLECT_ASyS
  const risk = model === Model.SeLECT2 ? SeLECT2 : SeLECT_ASyS

  return (
    <>
      <HStack safeAreaTop bg="primary.500" pr="50px">
        <IconButton
          icon={<Icon name="arrow-left" color="white" size="xl" />}
          onPress={() => navigation.navigate('Calculate')}
        />
        <Heading alignSelf="center" flex={1} textAlign="center" color="white">
          Score {score}
        </Heading>
      </HStack>

      <BottomTab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'below-icon',
          headerShown: false,
          tabBarLabelStyle: { fontWeight: '500' },
        }}
      >
        <BottomTab.Screen
          name="Risk"
          options={{
            tabBarLabel: 'Risk of late seizures',
            tabBarIcon: ({ color }) => (
              <Icon name="brain" color={color} size="xl" />
            ),
          }}
        >
          {() => <Risk score={score} model={risk} />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="Cosy"
          options={{
            tabBarLabel: 'Risks for driving',
            tabBarIcon: ({ color }) => (
              <Icon name="car-traction-control" color={color} size="xl" />
            ),
          }}
        >
          {() => <Cosy score={score} model={cosy} />}
        </BottomTab.Screen>
      </BottomTab.Navigator>
    </>
  )
}

export default Prediction
