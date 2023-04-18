import React from 'react'
import { Heading, HStack, Icon, IconButton, ScrollView } from 'native-base'

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
        Chance of an occurrence of a seizure in the next year
      </Heading>
    </HStack>
    <ScrollView px={5}>
      <P>TODO</P>
    </ScrollView>
  </>
)

export default CosyInfo
