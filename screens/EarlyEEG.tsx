import React from 'react'
import { Heading, HStack, Icon, IconButton, ScrollView } from 'native-base'

import { RootStackScreenProps } from '../navigation/types'
import P from '../components/P'
import B from '../components/B'

const EarlyEEG = ({ navigation }: RootStackScreenProps<'EarlyEEG'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Early EEG
      </Heading>
    </HStack>
    <ScrollView px="5" py="3">
      <P>
        An "early EEG" is an EEG recorded within the first 7 days after stroke
        over a minimum of 20 minutes (longer recordings recommended for patients
        with higher <B>NIHSS scores</B> and severe generalized slowing).
      </P>
    </ScrollView>
  </>
)

export default EarlyEEG
