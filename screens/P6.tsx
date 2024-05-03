import React from 'react'
import {
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  ScrollView,
} from 'native-base'

import { RootStackScreenProps } from '../navigation/types'
import P from '../components/P'

const P6 = ({ navigation }: RootStackScreenProps<'P6'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} color="white" isTruncated>
        Type of acute symptomatic seizure
      </Heading>
    </HStack>
    <ScrollView px="5">
      <P>
        Acute symptomatic seizure types are categorised as focal to bilateral
        tonic-clonic, status epilepticus, or other according to current ILAE
        definitions. Focal to bilateral tonic-clonic seizures were previously
        known as seizures with “partial onset with secondary generalisation.”
        Use “Other/Unkown” for other types of focal seizures or if the seizure
        type was not determined.{' '}
      </P>
      <P>
        Status epilepticus is defined according to the definition of the ILAE;
        non-convulsive status epilepticus is defined electroencephalographically
        according to the Salzburg criteria.
      </P>
      <Heading>Reference</Heading>
      <P>
        <Link href="https://onlinelibrary.wiley.com/doi/full/10.1111/epi.13670">
          Fisher RS, Cross JH, French JA, et al. Operational classification of
          seizure types by the International League Against Epilepsy: Position
          Paper of the ILAE Commission for Classification and Terminology.
          Epilepsia. 2017;58(4):522-530.
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
          Salzburg EEG criteria for non- convulsive status epilepticus: a
          retrospective study. The Lancet Neurology. 2016;15(10):1054-1062.
        </Link>
      </P>
    </ScrollView>
  </>
)

export default P6
