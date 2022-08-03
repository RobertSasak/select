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
      P1: {
        path: 'severity-of-stroke',
      },
      P2: {
        path: 'large-artery-atherosclerosis',
      },
      P3: {
        path: 'early-seizure',
      },
      P4: {
        path: 'cortical involvement',
      },
      P5: {
        path: 'territory-of-mca-involvement',
      },
      Risk: {
        path: 'risk-of-late-seizures',
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
