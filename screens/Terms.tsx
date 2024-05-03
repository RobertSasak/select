import React from 'react'
import * as Application from 'expo-application'
import {
  Heading,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  VStack,
  Text,
} from 'native-base'

import { BottomTabScreenProps } from '../navigation/types'
import P from '../components/P'
import Constants from 'expo-constants'

const Terms = ({ navigation }: BottomTabScreenProps<'Terms'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop alignItems="center" pr="50px">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white" isTruncated>
        Terms
      </Heading>
    </HStack>
    <ScrollView p="5">
      <VStack safeAreaBottom>
        <Heading size="md">Terms &amp; Conditions</Heading>
        <P>
          The SeLECT score is a prediction tool applicable to people who
          suffered an ischemic stroke. Given some clinical characteristics, it
          provides risk estimates of remote symptomatic seizures occurring &gt;
          7 days after stroke.
        </P>
        <P>
          This tool is meant to be used only by medical professionals to improve
          prognostication of late seizures after stroke. Its clinical usefulness
          to influence medical decisions has not been tested.
        </P>
      </VStack>
      <Text textAlign="center" color="gray.400">
        {Constants.expoConfig?.version}
      </Text>
      <Text textAlign="center" color="gray.400">
        {Application.nativeBuildVersion}
      </Text>
      <Text textAlign="center" color="gray.400">
        {Application.nativeApplicationVersion}
      </Text>
    </ScrollView>
  </>
)

export default Terms
