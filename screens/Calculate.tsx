import { Heading, Button } from 'native-base'
import { RootStackScreenProps } from '../navigation/types'

const Calculate = ({ navigation }: RootStackScreenProps<'Calculate'>) => (
  <>
    <Heading>Calculate</Heading>
    <Button
      onPress={() => {
        navigation.navigate('Prediction', { score: 5 })
      }}
    />
  </>
)

export default Calculate
