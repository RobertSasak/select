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
      <P>
        Early seizures are categorised as short seizures or status epilepticus.
        Status epilepticus is defined according to the definition of the ILAE;
        non-convulsive status epilepticus is defined electroencephalographically
        according to the Salzburg criteria. Short seizures are those that do not
        meet the criteria for status epilepticus.
      </P>
      <Heading>Reference</Heading>
      <P>
        <Link href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1528-1167.2009.02285.x">
          Beghi E, Carpio A, Forsgren L, Hesdorffer DC, Malmgren K, Sander JW,
          et al. Recommendation for a definition of acute symptomatic seizure.
          Epilepsia 2010; 51: 671-675.
        </Link>
      </P>
      <P>
        <Link href="https://onlinelibrary.wiley.com/doi/full/10.1111/epi.13121">
          Trinka E, Cock H, Hesdorffer D, et al. A definition and classification
          of status epilepticus--Report of the ILAE Task Force on Classification
          of Status Epilepticus. Epilepsia. 2015;56(10):1515-1523.
        </Link>
      </P>
      <P>
        <Link href="https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(16)30137-5/fulltext">
          Leitinger M, Trinka E, Gardella E, et al. Diagnostic accuracy of the
          Salzburg EEG criteria for non-convulsive status epilepticus: a
          retrospective study. The Lancet Neurology. 2016;15(10):1054-1062.
        </Link>
      </P>
    </ScrollView>
  </>
)

export default P3
