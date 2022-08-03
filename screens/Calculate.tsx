import {
  Heading,
  Button,
  HStack,
  IconButton,
  Icon,
  ScrollView,
  Box,
} from 'native-base'

import { RootStackScreenProps } from '../navigation/types'
import Label from '../components/Label'
import { useStatePersist } from 'use-state-persist'
import Segment from '../components/Option'
import Hr from '../components/Hr'

const Calculate = ({ navigation }: RootStackScreenProps<'Calculate'>) => {
  const [p1, setP1] = useStatePersist('p1', 0)
  const [p2, setP2] = useStatePersist('p2', 0)
  const [p3, setP3] = useStatePersist('p3', 0)
  const [p4, setP4] = useStatePersist('p4', 0)
  const [p5, setP5] = useStatePersist('p5', 0)
  return (
    <>
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
