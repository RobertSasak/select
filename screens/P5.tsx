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
      <Heading flex={1} color="white" isTruncated>
        Territory of MCA involvement
      </Heading>
    </HStack>
    <ScrollView px="5">
      <P>
        Territory of MCA involvement is defined as{' '}
        <B>
          affection of the middle cerebral artery (MCA) territory by
          irreversible infarction
        </B>{' '}
        due to ischemic stroke. This is determined using brain imaging
        demonstrating the location and extent of irreversible infarction. MRI is
        preferred to CT.
      </P>
      <P>
        Arterial territories are defined according to a published atlas (Tatu et
        al. 1998).
      </P>
      <Heading size="md" my="2">
        Reference
      </Heading>
      <P>
        Tatu L, Moulin T, Bogousslavsky J, Duvernoy H. Arterial territories of
        the human brain: cerebral hemispheres. Neurology 1998; 50: 1699-1708.
      </P>
    </ScrollView>
  </>
)

export default About
