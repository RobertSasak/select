import React from 'react'
import { Heading, HStack, Icon, IconButton, ScrollView } from 'native-base'

import B from '../components/B'
import P from '../components/P'

import { RootStackScreenProps } from '../navigation/types'

const P4 = ({ navigation }: RootStackScreenProps<'P4'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Cortical involvement
      </Heading>
    </HStack>
    <ScrollView px="5" py="3">
      <P>
        Cortical involvement is defined as{' '}
        <B>affection of the cerebral cortex by irreversible infarction</B> due
        to ischemic stroke. This is determined using brain imaging demonstrating
        the location and extent of irreversible infarction. MRI is preferred to
        CT.
      </P>
    </ScrollView>
  </>
)

export default P4
