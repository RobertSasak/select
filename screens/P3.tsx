import React from 'react'
import { Heading, HStack, Icon, IconButton, ScrollView } from 'native-base'

import B from '../components/B'
import P from '../components/P'

import { BottomTabScreenProps } from '../navigation/types'

const About = ({ navigation }: BottomTabScreenProps<'About'>) => (
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
        Beghi E, Carpio A, Forsgren L, Hesdorffer DC, Malmgren K, Sander JW, et
        al. Recommendation for a definition of acute symptomatic seizure.
        Epilepsia 2010; 51: 671-675.
      </P>
    </ScrollView>
  </>
)

export default About
