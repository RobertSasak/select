import React from 'react'
import {
  Heading,
  Button,
  HStack,
  IconButton,
  Icon,
  ScrollView,
  Box,
  Modal,
  Text,
  View,
} from 'native-base'
import { useStatePersist } from 'use-state-persist'

import { RootStackScreenProps } from '../navigation/types'
import Label from '../components/Label'
import Segment from '../components/Segment'
import Hr from '../components/Hr'
import P from '../components/P'
import { Model } from '../types'
import Expand2 from '../components/Expand2'

const Calculate = ({ navigation }: RootStackScreenProps<'Calculate'>) => {
  const [termsVisible, setTermsVisible] = useStatePersist('terms', true)

  const [p1, setP1] = useStatePersist('p1', 0) // Severity of stroke
  const [p2, setP2] = useStatePersist('p2', 0) // Large-artery atherosclerosis
  const [p3, setP3] = useStatePersist<Model>('p3', Model.SeLECT2) // Does have early seizure
  const [p4, setP4] = useStatePersist('p4', 0) // Cortical involvement
  const [p5, setP5] = useStatePersist('p5', 0) // Territory of MCA involvement
  const [p6, setP6] = useStatePersist('p6', 0) // Type of acute symptomatic seizure
  const [p7, setP7] = useStatePersist('p7', 0) // Timing of acute symptomatic seizure
  const [p8, setP8] = useStatePersist('p8', 1) // Sex
  const [earlyEEG, setEarlyEEG] = useStatePersist<Model>(
    'earlyEEG',
    Model.SeLECT2
  )
  const [regionalSlowing, setRegionalSlowing] = useStatePersist(
    'regionalSlowing',
    0
  )
  const [epileptiformActivity, setEpileptiformActivity] = useStatePersist(
    'epileptiformActivity',
    0
  )

  let score = 0
  let model: Model
  if (p3 === Model.SeLECT_ASyS) {
    model = Model.SeLECT_ASyS
    if (p2 === 1) {
      score += p8
    }
    if (p6 === 4) {
      score += 4
    } else if (p6 === 1) {
      score += p7 + 1
    } else {
      score += p7
    }
    if (p4 === 2) {
      score += 1
    }
  } else if (earlyEEG === Model.SeLECT_EEG) {
    model = Model.SeLECT_EEG
    score = p1 + p2 + p4 + p5 + regionalSlowing + epileptiformActivity
  } else {
    model = Model.SeLECT2
    score = p1 + p2 + p4 + p5
  }
  return (
    <>
      <Modal isOpen={termsVisible} onClose={() => setTermsVisible(false)}>
        <Modal.Content>
          <Modal.Header>Terms &amp; Conditions</Modal.Header>
          <Modal.Body>
            <P>
              The SeLECT score is a prediction tool applicable to people who
              suffered an ischemic stroke. Given some clinical characteristics,
              it provides risk estimates of remote symptomatic seizures
              occurring &gt; 7 days after stroke.
            </P>
            <P>
              This tool is meant to be used only by medical professionals to
              improve prognostication of late seizures after stroke. Its
              clinical usefulness to influence medical decisions has not been
              tested.
            </P>
            <P>
              By accepting these terms, the user agrees on the nature and
              purpose of this prediction tool.
            </P>
          </Modal.Body>
          <Modal.Footer>
            <Button
              leftIcon={<Icon name="check" />}
              onPress={() => setTermsVisible(false)}
            >
              Accept Terms &amp; Conditions
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <HStack bg="primary.500" safeAreaTop pl="50px" alignItems={'center'}>
        <Heading color="white" flex={1} textAlign="center">
          Calculate
        </Heading>
        <IconButton
          icon={<Icon name="help-circle" color="white" size="xl" />}
          onPress={() => navigation.navigate('BottomTab', { screen: 'About' })}
        />
      </HStack>
      <ScrollView px="5" pb="5">
        <Box safeAreaBottom>
          <Label
            title="Acute symptomatic seizure"
            subTitle="≤ 7 days after stroke"
            onPress={() => navigation.navigate('P3')}
          />
          <Segment
            options={[
              { label: 'NO', value: Model.SeLECT2 },
              { label: 'YES', value: Model.SeLECT_ASyS },
            ]}
            selected={p3}
            onPress={setP3}
          />
          <Text color="gray.400">If "Yes" using SeLECT-ASyS model.</Text>
          <Hr />
          <Expand2
            showLeft={p3 === Model.SeLECT2}
            left={
              <>
                <Label
                  title="Early EEG"
                  onPress={() => navigation.navigate('EarlyEEG')}
                />
                <Segment
                  options={[
                    { label: 'NO', value: Model.SeLECT2 },
                    { label: 'YES', value: Model.SeLECT_EEG },
                  ]}
                  selected={earlyEEG}
                  onPress={setEarlyEEG}
                />
                <Text color="gray.400">
                  If "No" using SeLECT2.0 model, if "Yes" using SeLECT-EEG
                  model.
                </Text>
                <Hr />
                <Expand2
                  showLeft={earlyEEG === Model.SeLECT2}
                  left={<View />}
                  right={
                    <>
                      <Label
                        title="Regional slowing"
                        onPress={() => navigation.navigate('RegionalSlowing')}
                      />
                      <Segment
                        options={[
                          { label: 'NO', value: 0 },
                          { label: 'YES', value: 1 },
                        ]}
                        selected={regionalSlowing}
                        onPress={setRegionalSlowing}
                      />
                      <Hr />
                      <Label
                        title="Epileptiform Activity"
                        onPress={() =>
                          navigation.navigate('EpileptiformActivity')
                        }
                      />
                      <Segment
                        options={[
                          { label: 'NO', value: 0 },
                          { label: 'YES', value: 1 },
                        ]}
                        selected={epileptiformActivity}
                        onPress={setEpileptiformActivity}
                      />
                      <Hr />
                    </>
                  }
                />
                <Label
                  title="Severity of stroke"
                  subTitle="NIHSS at admission"
                  onPress={() => navigation.navigate('P1')}
                />
                <Segment
                  options={[
                    { label: '≤', value: 0 },
                    { label: '4-10', value: 1 },
                    { label: '≥11', value: 2 },
                  ]}
                  selected={p1}
                  onPress={setP1}
                />
                <Hr />
              </>
            }
            right={
              <>
                <Label
                  title="Type of acute symptomatic seizure"
                  onPress={() => navigation.navigate('P6')}
                />
                <Segment
                  options={[
                    { label: 'Other/Unknown', value: 0 },
                    { label: 'Bilateral tonic-clonic', value: 1 },
                    { label: 'Status epilepticus', value: 4 },
                  ]}
                  selected={p6}
                  onPress={setP6}
                />
                <Hr />
                <Label
                  title="Timing of acute symptomatic seizure"
                  onPress={() => navigation.navigate('P7')}
                />
                <Segment
                  options={[
                    { label: 'Day 0', value: 1 },
                    { label: 'Day ≥ 1 or Unknown', value: 0 },
                  ]}
                  selected={p7}
                  onPress={setP7}
                />
                <Hr />
              </>
            }
          />
          <Label
            title="Large-artery atherosclerosis"
            onPress={() => navigation.navigate('P2')}
          />
          <Segment
            options={[
              { label: 'NO', value: 0 },
              { label: 'YES', value: 1 },
            ]}
            selected={p2}
            onPress={setP2}
          />
          <Hr />
          <Expand2
            showLeft={p3 == Model.SeLECT2 || p2 === 0}
            left={<View />}
            right={
              <>
                <Label title="Sex" />
                <Segment
                  options={[
                    { label: 'FEMALE', value: 1 },
                    { label: 'MALE', value: 2 },
                  ]}
                  selected={p8}
                  onPress={setP8}
                />
                <Hr />
              </>
            }
          />
          <Label
            title="Cortical involvement"
            onPress={() => navigation.navigate('P4')}
          />
          <Segment
            options={[
              { label: 'NO', value: 0 },
              { label: 'YES', value: 2 },
            ]}
            selected={p4}
            onPress={setP4}
          />
          <Hr />
          <Expand2
            showLeft={p3 === Model.SeLECT2}
            left={
              <>
                <Label
                  title="Territory of MCA involvement"
                  onPress={() => navigation.navigate('P5')}
                />
                <Segment
                  options={[
                    { label: 'NO', value: 0 },
                    { label: 'YES', value: 1 },
                  ]}
                  selected={p5}
                  onPress={setP5}
                />
                <Hr />
              </>
            }
            right={<View />}
          />
          <Button
            mt="5"
            size="lg"
            leftIcon={<Icon name="calculator" />}
            onPress={() => {
              navigation.navigate('Prediction', {
                model,
                score,
                screen: 'Risk',
              })
            }}
          >
            Calculate
          </Button>
          <Text color="gray.300" textAlign="center" my="2">
            Total points: {score}
          </Text>
        </Box>
      </ScrollView>
    </>
  )
}
export default Calculate
