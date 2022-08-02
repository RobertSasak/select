import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from './types'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Calculate: {
        path: '',
      },
      Prediction: {
        path: 'prediction/:score',
      },
      BottomTab: {
        screens: {
          About: {
            path: 'about',
          },
          Contact: {
            path: 'contact',
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
}

export default linking
