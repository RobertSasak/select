import { Heading, IconButton, Icon, HStack } from 'native-base'
import { RootStackScreenProps } from '../navigation/types'

const Prediction = ({
  navigation,
  route,
}: RootStackScreenProps<'Prediction'>) => (
  <>
    <HStack safeAreaTop bg="primary.500" pr="50px">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading alignSelf="center" flex={1} textAlign="center" color="white">
        Score {route.params.score}
      </Heading>
    </HStack>
    <Heading>Prediction</Heading>
  </>
)

export default Prediction
