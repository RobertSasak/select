import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#F7FBCB',
      200: '#EEF899',
      300: '#DAEC65',
      400: '#C3D93E',
      500: '#A3C109',
      600: '#89A506',
      700: '#708A04',
      800: '#586F02',
      900: '#475C01',
    },
  },
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

const NativeBase: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
}

export default NativeBase
