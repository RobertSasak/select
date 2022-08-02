import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import LinkingConfiguration from './LinkingConfiguration'
import RootNavigator from './RootNavigator'

const Navigation = () => (
  <NavigationContainer linking={LinkingConfiguration}>
    <RootNavigator />
  </NavigationContainer>
)

export default Navigation
