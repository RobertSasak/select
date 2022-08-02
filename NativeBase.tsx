import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const theme = extendTheme({
  components: {
    Icon: {
      defaultProps: {
        as: MaterialCommunityIcons,
      },
    },
  },
})

type CustomThemeType = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

const NativeBase: React.FC = ({ children }) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
}

export default NativeBase
