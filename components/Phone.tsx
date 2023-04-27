import { View } from 'native-base'
import React from 'react'
import { ImageBackground, Platform } from 'react-native'

const Phone = ({ children }: { children: React.ReactNode }) => {
  if (Platform.OS !== 'web') {
    return <>{children}</>
  }

  return (
    <View bg="trueGray.300" flex={1}>
      <ImageBackground
        source={require('../assets/images/table.jpg')}
        style={{ flex: 1 }}
      >
        <View
          flex={1}
          borderColor="red.300"
          overflow="clip"
          shadow={9}
          w="100%"
          mt={[0, 0, '50px']}
          maxW={[null, null, 448]}
          maxH={[null, null, 760]}
          borderWidth={[null, null, 1]}
          borderRadius={[0, 0, 30]}
          alignSelf="center"
        >
          <View
            flex={1}
            borderColor="gray.700"
            w="100%"
            overflow="clip"
            borderWidth={[null, null, 10]}
            borderRadius={[0, 0, 30]}
            bg="white"
          >
            {children}
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
export default Phone
