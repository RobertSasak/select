import { useEffect, useRef, useState } from 'react'
import { Animated } from 'react-native'

interface ExpandProps {
  show: boolean
  children: React.ReactNode
}

const Expand = ({ show, children }: ExpandProps) => {
  const [height, setHeight] = useState<number | null>(null)
  const opacity = useRef(new Animated.Value(show ? 1 : 0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: show ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }, [show, opacity])

  return (
    <Animated.View
      onLayout={(e) => !height && setHeight(e.nativeEvent.layout.height)}
      style={{
        overflow: 'hidden',
        opacity: opacity,
        height:
          height === null
            ? 'auto'
            : opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, height],
              }),
      }}
    >
      {children}
    </Animated.View>
  )
}

export default Expand
