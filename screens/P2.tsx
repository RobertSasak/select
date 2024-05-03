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
import Li from '../components/Li'
import P from '../components/P'

import { RootStackScreenProps } from '../navigation/types'

const P2 = ({ navigation }: RootStackScreenProps<'P2'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Large-artery atherosclerosis
      </Heading>
    </HStack>
    <ScrollView px="5" py="3">
      <P>
        The item “<B>Large-artery atherosclerosis</B>” determines, whether this
        is the presumed aetiology of stroke. Stroke aetiology is categorized
        according to the TOAST classification.
      </P>
      <P>
        <B>TOAST classification</B>
      </P>
      <Li>Large-artery atherosclerosis</Li>
      <Li>Cardioembolism</Li>
      <Li>Small-vessel occlusion</Li>
      <Li>Stroke of other determined aetiology</Li>
      <Li>
        Stroke of undetermined aetiology
        {'\n'} a. Two or more causes identified
        {'\n'} b. Negative evaluation
        {'\n'} c. Incomplete evaluation
      </Li>

      <Heading size="md" my="2">
        Definition of large-artery atherosclerosis
      </Heading>
      <P>
        These patients will have clinical and brain imaging findings of either{' '}
        <B>significant (&gt;50%) stenosis or occlusion</B> of a major brain
        artery or branch cortical artery, presumably due to atherosclerosis.
        Clinical findings include those of cerebral cortical impairment
        (aphasia, neglect, restricted motor involvement, etc.) or brain stem or
        cerebellar dysfunction. A history of intermittent claudication,
        transient ischemic attacks (TIAs) in the same vascular territory, a
        carotid bruit, or diminished pulses helps support the clinical
        diagnosis. Cortical or cerebellar lesions and brain stem or subcortical
        hemispheric infarcts greater than 1.5 cm in diameter on CT or MRI are
        considered to be of potential large-artery atherosclerotic origin.
        Supportive evidence by duplex imaging or arteriography of a stenosis of
        greater than 50% of an appropriate intracranial or extracranial artery
        is needed. Diagnostic studies should exclude potential sources of
        cardiogenic embolism. The diagnosis of stroke secondary to large- artery
        atherosclerosis cannot be made if duplex or arteriographic studies are
        normal or show only minimal changes.
      </P>
      <Heading size="md" py={2}>
        Reference
      </Heading>
      <P>
        <Link href="https://www.ahajournals.org/doi/abs/10.1161/01.str.24.1.35">
          Adams HP, Bendixen BH, Kappelle LJ, Biller J, Love BB, Gordon DL, et
          al. Classification of subtype of acute ischemic stroke. Definitions
          for use in a multicenter clinical trial. TOAST. Trial of Org 10172 in
          Acute Stroke Treatment. Stroke 1993; 24: 35-41.
        </Link>
      </P>
    </ScrollView>
  </>
)

export default P2
