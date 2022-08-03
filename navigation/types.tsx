import { BottomTabScreenProps as RNBottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Calculate: undefined
  P1: undefined
  P2: undefined
  P3: undefined
  P4: undefined
  P5: undefined
  Risk: undefined
  Prediction: {
    score: number
  }
  BottomTab: NavigatorScreenParams<BottomTabParamList> | undefined
  Modal: undefined
  NotFound: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type BottomTabParamList = {
  About: undefined
  Contact: undefined
}

export type BottomTabScreenProps<Screen extends keyof BottomTabParamList> =
  CompositeScreenProps<
    RNBottomTabScreenProps<BottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >
