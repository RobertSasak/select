import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import NativeBase from './NativeBase'
import Navigation from './navigation'
import Storage from './Storage'

const App = () => (
  <Storage>
    <NativeBase>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </NativeBase>
  </Storage>
)

export default App
