import { ITextProps, Text } from 'native-base'

const B = ({ children }: ITextProps) => (
  <Text fontWeight="bold">{children}</Text>
)

export default B
