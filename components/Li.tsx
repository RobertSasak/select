import { HStack, ITextProps, Text } from 'native-base'

const Li = ({ children }: ITextProps) => (
  <HStack pl="5">
    <Text>
      <Text fontSize="10px">●</Text>
    </Text>
    <Text pl={1}>{children}</Text>
  </HStack>
)

export default Li
