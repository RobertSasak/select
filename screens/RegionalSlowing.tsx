import React from 'react'
import { Heading, HStack, Icon, IconButton, ScrollView } from 'native-base'

import { RootStackScreenProps } from '../navigation/types'
import P from '../components/P'

const RegionalSlowing = ({
  navigation,
}: RootStackScreenProps<'RegionalSlowing'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Regional Slowing
      </Heading>
    </HStack>
    <ScrollView px="5" py="3">
      <P>
        Regional slowing is defined as focal polymorphic slow activity. This
        activity can be either continuous or intermittent and consist of
        polymorphic theta or delta waves at frequencies slower than the
        background rhythm.
      </P>
    </ScrollView>
  </>
)

export default RegionalSlowing
