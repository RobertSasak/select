import { Heading, Button, HStack, IconButton, Icon } from 'native-base'

import { RootStackScreenProps } from '../navigation/types'

const Calculate = ({ navigation }: RootStackScreenProps<'Calculate'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pl="50px">
      <Heading color="white" flex={1} textAlign="center">
        Calculate
      </Heading>
      <IconButton
        icon={<Icon name="help-circle" color="white" />}
        onPress={() => navigation.navigate('BottomTab', { screen: 'About' })}
      />
    </HStack>
    <Button
      onPress={() => {
        navigation.navigate('Prediction', { score: 5 })
      }}
    />
  </>
)

export default Calculate
