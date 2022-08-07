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
        w="100%"
        mt={[0, 0, '50px']}
        maxW={[null, null, 768]}
        maxH={[null, null, 780]}
        borderWidth={[null, null, 10]}
        borderRadius={30}
        alignSelf="center"
      >
        {children}
      </View>
    </View>
  )
}
export default Phone
