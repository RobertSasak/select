import React, { useMemo, useState } from 'react'
import {
  Heading,
  IconButton,
  Icon,
  HStack,
  Slider,
  VStack,
  Text,
  View,
} from 'native-base'
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
  Tooltip,
} from 'react-native-responsive-linechart'

import { RootStackScreenProps } from '../navigation/types'
import { model } from '../services/model'
import { theme } from '../NativeBase'
import P from '../components/P'
import Svg, { Circle, G } from 'react-native-svg'

const primary = theme.colors.primary[500]
const primary800 = theme.colors.primary[800]

const Prediction = ({
  navigation,
  route,
}: RootStackScreenProps<'Prediction'>) => {
  const [selected, setSelected] = useState(12)
  const score = route.params.score
  const values = model.value[score].map((v, i) => ({ x: i, y: v * 100 }))
  const mins = useMemo(
    () => model.min[score].map((v, i) => ({ x: i, y: v * 100 })),
    [score]
  )
  const maxs = useMemo(
    () => model.max[score].map((v, i) => ({ x: i, y: v * 100 })),
    [score]
  )
  const min = mins[selected].y.toFixed(0)
  const max = maxs[selected].y.toFixed(0)
  const value = values[selected].y.toFixed(0)
  return (
    <>
      <HStack safeAreaTop bg="primary.500" pr="50px">
        <IconButton
          icon={<Icon name="arrow-left" color="white" size="xl" />}
          onPress={() => navigation.navigate('Calculate')}
        />
        <Heading alignSelf="center" flex={1} textAlign="center" color="white">
          Score {score}
        </Heading>
      </HStack>
      <Chart
        style={{ height: '100%', maxHeight: 300, width: '100%' }}
        padding={{ left: 40, bottom: 20, right: 20, top: 40 }}
        xDomain={{ min: 0, max: 60 }}
        yDomain={{ min: 0, max: 100 }}
      >
        <VerticalAxis
          tickCount={11}
          theme={{ labels: { formatter: (v) => v.toFixed(0) + '%' } }}
        />
        <HorizontalAxis tickCount={6} />
        <Line
          data={mins}
          theme={{
            stroke: {
              color: primary,
              width: 2,
              dashArray: [5],
            },
          }}
        />
        <Line
          data={maxs}
          theme={{
            stroke: {
              color: primary,
              width: 2,
              dashArray: [5],
            },
          }}
        />
        <Line
          data={values}
          initialTooltipIndex={selected}
          tooltipComponent={
            <Tooltip
              theme={{
                label: {
                  dy: 20,
                },
                shape: {
                  dy: 25,
                  width: 120,
                  height: 30,
                  color: 'rgba(0,0,0,.7)',
                },
                formatter: ({ x, y }) =>
                  'Month ' + x + ', ' + y.toFixed(0) + '%',
              }}
            />
          }
          theme={{
            stroke: { color: primary, width: 4 },
            scatter: {
              default: { width: 0, height: 0, rx: 5 },
              selected: { width: 10, height: 10, color: primary800 },
            },
          }}
          onTooltipSelect={(_, i) => setSelected(i)}
        />
      </Chart>
      <View mx="5" mt="3">
        <HStack alignItems="center">
          <Heading flex={1}>Risk of late seizures</Heading>
          <IconButton
            icon={<Icon name="information" />}
            onPress={() => navigation.navigate('Risk')}
          />
        </HStack>
        <HStack
          borderColor="gray.400"
          borderTopWidth={0.5}
          py="1"
          alignItems="center"
        >
          <VStack flex={1}>
            <Text>{selected} months after stroke</Text>
            <Text color="muted.400">
              ({min}% - {max}%)
            </Text>
          </VStack>
          <Heading size="md">{value}%</Heading>
        </HStack>
        <HStack
          justifyContent="space-between"
          borderColor="gray.400"
          borderBottomWidth={0.5}
          borderTopWidth={0.5}
          py="3"
          alignItems="center"
        >
          <Heading size="md" fontWeight="300" pl="2">
            0
          </Heading>
          <Slider
            w="75%"
            defaultValue={selected}
            minValue={0}
            maxValue={60}
            value={selected}
            onChange={setSelected}
            accessibilityLabel="hello world"
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
          <Heading size="md" fontWeight="300" pr="2">
            60
          </Heading>
        </HStack>
      </View>
    </>
  )
}

export default Prediction
