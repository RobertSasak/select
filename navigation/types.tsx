import { BottomTabScreenProps as RNBottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Model } from '../types'

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
  P6: undefined
  P7: undefined
  Prediction: NavigatorScreenParams<PredictionTabParamList> & {
    model: Model
    score: number
  }
  Risk: undefined
  Cosy: undefined
  RiskInfo: undefined
  CosyInfo: undefined
  BottomTab: NavigatorScreenParams<BottomTabParamList>
  Terms: undefined
  NotFound: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type BottomTabParamList = {
  About: undefined
  Terms: undefined
}

export type BottomTabScreenProps<Screen extends keyof BottomTabParamList> =
  CompositeScreenProps<
    RNBottomTabScreenProps<BottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >

export type PredictionTabParamList = {
  Risk: undefined
  Cosy: undefined
}

export type PredictionTabScreenProps<
  Screen extends keyof PredictionTabParamList
> = CompositeScreenProps<
  RNBottomTabScreenProps<PredictionTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>
