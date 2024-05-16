import React from 'react'
import {
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  ScrollView,
} from 'native-base'

import P from '../components/P'

import { RootStackScreenProps } from '../navigation/types'

const CosyInfo = ({ navigation }: RootStackScreenProps<'CosyInfo'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack()
          } else {
            navigation.navigate('Calculate')
          }
        }}
      />
      <Heading flex={1} textAlign="center" color="white">
        Chance of seizures
      </Heading>
    </HStack>
    <ScrollView px={5}>
      <P>
        Chance of an occurrence of a seizure in the next year (COSY) was
        calculated calculated using the SeLECT model. Many regulators consider a
        COSY below 20-40% acceptable for private driving and below 2% for
        professional driving [ref 1].
      </P>
      <P>
        COSY was calculated according to the number of seizure-free months after
        stroke. For example, COSY at 3 months was the probability of having a
        seizure during the next 12 months (ie. 15 months since stroke), given
        that the patient had no unprovoked seizures during the first 3 months
        after stroke. Acute symptomatic seizures during the first 7 days after
        stroke were not counted as unprovoked seizures.
      </P>
      <P>
        The red horizontal line shows the 20% cut-off for COSY that is
        frequently considered safe for private driving.
      </P>
      <P>
        The 95% confidence interval for the risk estimates is given in brackets.
      </P>
      <P>
        Safe driving after stroke may be impacted by other factors, e.g.
        hemianopia, weakness, or cognitive deficits. These factors are not
        included in the SeLECT score and need to be taken into account for an
        individualised approach considering the safety to drive in stroke
        surviors.
      </P>
      <Heading size="md" py="2">
        Reference manuscript:
      </Heading>
      <Link href="https://road-safety.transport.ec.europa.eu/system/files/2021-07/epilepsy_and_driving_in_europe_final_report_v2_en.pdf">
        Second European Working Group on Epilepsy and Driving. Epilepsy and
        driving in Europe. 2005.
      </Link>
    </ScrollView>
  </>
)

export default CosyInfo
