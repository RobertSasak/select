import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import NativeBase from './NativeBase'
import Navigation from './navigation'
import Storage from './Storage'
import Phone from './components/Phone'

const App = () => (
  <Storage>
    <NativeBase>
      <SafeAreaProvider>
        <Phone>
          <Navigation />
          <StatusBar style="light" />
        </Phone>
      </SafeAreaProvider>
    </NativeBase>
  </Storage>
)

export default App
