import { Heading, Text, View } from 'native-base'
import { RootStackScreenProps } from '../navigation/types'

const NotFoundScreen = ({ navigation }: RootStackScreenProps<'NotFound'>) => (
  <View>
    <Heading>404</Heading>
    <Text>Page you are looking for does not exists.</Text>
  </View>
)

export default NotFoundScreen
