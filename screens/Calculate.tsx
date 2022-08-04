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
} from 'native-base'
import { useStatePersist } from 'use-state-persist'

import { RootStackScreenProps } from '../navigation/types'
import Label from '../components/Label'
import Segment from '../components/Segment'
import Hr from '../components/Hr'
import P from '../components/P'

const Calculate = ({ navigation }: RootStackScreenProps<'Calculate'>) => {
  const [p1, setP1] = useStatePersist('p1', 0)
  const [p2, setP2] = useStatePersist('p2', 0)
  const [p3, setP3] = useStatePersist('p3', 0)
  const [p4, setP4] = useStatePersist('p4', 0)
  const [p5, setP5] = useStatePersist('p5', 0)

  const [termsVisible, setTermsVisible] = useStatePersist('terms', true)

  return (
    <>
      <Modal isOpen={termsVisible} onClose={() => setTermsVisible(false)}>
        <Modal.Content>
          <Modal.Header>Terms &amp; Conditions</Modal.Header>
          <Modal.Body>
            <P>
              The SeLECT score is a prediction tool applicable to people who
              suffered an ischemic stroke. Given some clinical characteristics,
              it provides risk estimates of late seizures occurring &gt; 7 days
              after stroke.
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
      <ScrollView px="5">
        <Box safeAreaBottom>
          <Label
            letter="SE"
            title="verity of stroke"
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
          <Label
            letter="L"
            title="arge-artery atherosclerosis"
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
          <Label
            letter="E"
            title="arly seizure"
            subTitle="≤ 7 days after stroke"
            onPress={() => navigation.navigate('P3')}
          />
          <Segment
            options={[
              { label: 'NO', value: 0 },
              { label: 'Short Seizure', value: 3 },
              { label: 'Status Epilepticus', value: 7 },
            ]}
            selected={p3}
            onPress={setP3}
          />
          <Hr />
          <Label
            letter="C"
            title="ortical involvement"
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
          <Label
            letter="T"
            title="erritory of MCA involvement"
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
          <Button
            mt="5"
            size="lg"
            leftIcon={<Icon name="calculator" />}
            onPress={() => {
              navigation.navigate('Prediction', {
                score: p1 + p2 + p3 + p4 + p5,
              })
            }}
          >
            Calculate
          </Button>
        </Box>
      </ScrollView>
    </>
  )
}
export default Calculate
