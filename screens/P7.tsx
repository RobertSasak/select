import React from 'react'
import { Heading, HStack, Icon, IconButton, ScrollView } from 'native-base'

import { RootStackScreenProps } from '../navigation/types'
import P from '../components/P'
import B from '../components/B'

const P7 = ({ navigation }: RootStackScreenProps<'P7'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Timing of acute symptomatic seizure
      </Heading>
    </HStack>
    <ScrollView px="5">
      <P>
        <B>Day 0</B> refers to seizures occurring on the same day as stroke
        onset.
      </P>
      <P>
        <B>Day 1</B> refers to the next day after stroke onset.
      </P>
    </ScrollView>
  </>
)

export default P7
