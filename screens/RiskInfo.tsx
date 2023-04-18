import React from 'react'
import { Heading, HStack, Icon, IconButton, ScrollView } from 'native-base'

import P from '../components/P'

import { RootStackScreenProps } from '../navigation/types'

const RiskInfo = ({ navigation }: RootStackScreenProps<'RiskInfo'>) => (
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
        Risk of late seizures
      </Heading>
    </HStack>
    <ScrollView px={5}>
      <P>
        SeLECT predicts the absolute cumulative risk of late seizures after
        stroke. Late seizures are defined as spontaneous seizures occurring &gt;
        7 days after ischemic stroke. The 95% confidence interval for the risk
        estimates is given in brackets.
      </P>
      <Heading size="sm">Prediction time</Heading>
      <P>
        The user can choose a custom prediction time in months using the slider.
        The range is between 0 and 60 months.
      </P>
      <Heading size="sm">Prediction graph</Heading>
      <P>
        The prediction graph displays Kaplan Meier risk estimates for the
        calculated SeLECT value. X-axis is time in months, Y-axis is cumulative
        absolute risk in percent. The dotted line is the 95% confidence
        interval.
      </P>
    </ScrollView>
  </>
)

export default RiskInfo
