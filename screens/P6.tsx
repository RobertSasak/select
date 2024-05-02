import React from 'react'
import { Heading, HStack, Icon, IconButton, ScrollView } from 'native-base'

import { RootStackScreenProps } from '../navigation/types'

const P6 = ({ navigation }: RootStackScreenProps<'P6'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} color="white" isTruncated>
        Type of early seizure
      </Heading>
    </HStack>
    <ScrollView px="5"></ScrollView>
  </>
)

export default P6
