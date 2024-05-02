import { Button } from 'native-base'

interface Option {
  label: string
  value: number
}

interface SegmentProps {
  options: Option[]
  selected: number
  onPress: (value: number) => void
}
const Segment = ({ options, selected, onPress }: SegmentProps) => (
  <Button.Group isAttached flex={1}>
    {options.map(({ label, value }) => (
      <Button
        key={value}
        flexGrow={1}
        flexShrink={1}
        variant={value === selected ? 'solid' : 'outline'}
        onPress={() => onPress(value)}
      >
        {label}
      </Button>
    ))}
  </Button.Group>
)

export default Segment
