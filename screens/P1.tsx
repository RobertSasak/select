import React from 'react'
import {
  Heading,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  Image,
  View,
} from 'native-base'

import B from '../components/B'
import P from '../components/P'

import { RootStackScreenProps } from '../navigation/types'

const P1 = ({ navigation }: RootStackScreenProps<'P1'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        Stroke severity
      </Heading>
    </HStack>
    <ScrollView>
      <View px={5} py="3">
        <P>
          Stroke severity is measured with the <B>NIH Stroke Scale (NIHSS)</B>{' '}
          at admission.
        </P>
      </View>
      <Image
        source={require('../assets/p1.jpeg')}
        resizeMode="contain"
        alt="NIH Stroke Scale"
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 604 / 794,
        }}
      />
    </ScrollView>
  </>
)

export default P1
