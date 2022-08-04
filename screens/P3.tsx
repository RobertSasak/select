import React from 'react'
import {
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  ScrollView,
} from 'native-base'

import B from '../components/B'
import P from '../components/P'

import { RootStackScreenProps } from '../navigation/types'

const P3 = ({ navigation }: RootStackScreenProps<'P3'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Early seizure
      </Heading>
    </HStack>
    <ScrollView px="5" py="3">
      <P>
        Early seizures are defined as{' '}
        <B>acute symptomatic seizures occurring within 7 days</B> of the
        ischemic stroke.
      </P>
      <Heading>Reference</Heading>
      <P>
        <Link href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1528-1167.2009.02285.x">
          Beghi E, Carpio A, Forsgren L, Hesdorffer DC, Malmgren K, Sander JW,
          et al. Recommendation for a definition of acute symptomatic seizure.
          Epilepsia 2010; 51: 671-675.
        </Link>
      </P>
    </ScrollView>
  </>
)

export default P3
