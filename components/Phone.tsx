import React from 'react'
import { View } from 'native-base'
import { Platform } from 'react-native'

const Phone = ({ children }: { children: React.ReactNode }) => {
  if (Platform.OS !== 'web') {
    return <>{children}</>
  }

  return (
    <View bg="trueGray.300" flex={1}>
      <View
        flex={1}
        borderColor="gray.700"
        overflow="clip"
        shadow={9}
        mt="50px"
        w="100%"
        maxW={[null, 480]}
        maxH={[null, 780]}
        borderRadius={[null, 30]}
        borderWidth={[null, 10]}
        alignSelf="center"
      >
        {children}
      </View>
    </View>
  )
}
export default Phone
