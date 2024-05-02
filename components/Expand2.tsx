import { View } from 'native-base'
import { useEffect, useRef, useState } from 'react'
import { Animated } from 'react-native'

interface ExpandProps {
  showLeft: boolean
  left: React.ReactNode
  right: React.ReactNode
}

const TIME = 400
const DELAY = 100

const Expand = ({ showLeft, left, right }: ExpandProps) => {
  const [width, setWidth] = useState<number>(0)
  const [heightLeft, setHeightLeft] = useState<number>(0)
  const [heightRight, setHeightRight] = useState<number>(0)

  const newHeight = showLeft ? heightLeft : heightRight
  const newWidth = showLeft ? 0 : -width
  const height = useRef(new Animated.Value(newHeight)).current
  const translateX = useRef(new Animated.Value(newWidth)).current

  useEffect(() => {
    height.setValue(newHeight)
    translateX.setValue(newWidth)
  }, [heightLeft, heightRight])

  useEffect(() => {
    if (showLeft) {
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: newWidth,
          duration: TIME,
          useNativeDriver: false,
        }),
        Animated.delay(DELAY),
        Animated.timing(height, {
          toValue: newHeight,
          duration: TIME,
          useNativeDriver: false,
        }),
      ]).start()
    } else {
      Animated.sequence([
        Animated.timing(height, {
          toValue: newHeight,
          duration: TIME,
          useNativeDriver: false,
        }),
        Animated.delay(DELAY),
        Animated.timing(translateX, {
          toValue: newWidth,
          duration: TIME,
          useNativeDriver: false,
        }),
      ]).start()
    }
  }, [showLeft])

  return (
    <View overflow={'hidden'}>
      <Animated.View
        style={{
          height,
          transform: [
            {
              translateX: translateX,
            },
          ],
        }}
      >
        <View
          w="100%"
          position={'absolute'}
          onLayout={(e) => {
            setWidth(e.nativeEvent.layout.width)
            setHeightLeft(e.nativeEvent.layout.height)
          }}
        >
          {left}
        </View>
        <View
          w="100%"
          left={width}
          position={'absolute'}
          onLayout={(e) => setHeightRight(e.nativeEvent.layout.height)}
        >
          {right}
        </View>
      </Animated.View>
    </View>
  )
}

export default Expand
