import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import NativeBase from './NativeBase'
import Navigation from './navigation'

const App = () => (
  <NativeBase>
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  </NativeBase>
)

export default App
