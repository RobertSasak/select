import { HStack, ITextProps, Text } from 'native-base'

interface Props extends ITextProps {
  number?: number
}

const Li: React.FC<Props> = ({ children, number }) => (
  <HStack pl="5">
    <Text>
      <Text fontSize={number ? '14px' : '10px'}>
        {number ? number + '.' : '●'}
      </Text>
    </Text>
    <Text pl={1}>{children}</Text>
  </HStack>
)

export default Li
