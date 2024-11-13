import React from 'react'
import { Heading, HStack, Icon, IconButton, ScrollView } from 'native-base'

import { RootStackScreenProps } from '../navigation/types'
import P from '../components/P'
import Li from '../components/Li'
import Sup from '../components/Sup'

const EpileptiformActivity = ({
  navigation,
}: RootStackScreenProps<'EpileptiformActivity'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Epileptiform activity
      </Heading>
    </HStack>
    <ScrollView px="5" py="3">
      <P>Epileptiform activity is defined as either:</P>
      <Li>Interictal epileptiform discharges¹</Li>
      <Li>Lateralized or generalized periodic discharges (LPDs, GPDs)²</Li>
      <Li>Lateralized rhythmic delta activity (LRDA)²</Li>
      <Li>Electrographic seizures²</Li>
      <Li>Electrographic status epilepticus² ³</Li>
      <P>
        These definitions follow the IFCN criteria for epileptic discharges, ¹
        the ACNS 2021 criteria for Neurocritical Care EEG² and Salzburg criteria
        for status epilepticus.³
      </P>
      <Heading>References:</Heading>
      <Li number={1}>
        Kural MA, Duez L, Hansen VS, et al. Criteria for defining interictal
        epileptiform discharges in EEG: A clinical validation study. Neurology.
        2020;94(20):10.
      </Li>
      <Li number={2}>
        Hirsch LJ, Fong MWK, Leitinger M, et al. American Clinical
        Neurophysiology Society&#39;s Standardized Critical Care EEG
        Terminology: 2021 Version. J Clin Neurophysiol. Jan 1 2021;38(1):1-29.
      </Li>
      <Li number={3}>
        Leitinger M, Trinka E, Gardella E, et al. Diagnostic accuracy of the
        Salzburg EEG criteria for non-convulsive status epilepticus: a
        retrospective study. The Lancet Neurology. 2016;15(10):1054-1062.
      </Li>
    </ScrollView>
  </>
)

export default EpileptiformActivity
