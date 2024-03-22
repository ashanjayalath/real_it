// Chakra imports
import {
  Flex,
  FormLabel,
  Select,
  SpaceProps,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
// Custom components


type data = any;
export default function ComboBox(props: {
  id: string
  name: string
  label: string
  extra: JSX.Element
  placeholder: string
  mb: SpaceProps['mb']
  optionProp: [...data]
}) {
  const { id, label, name, extra, placeholder, mb, optionProp, ...rest } = props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')

  return (
    <Flex direction='column' mb={mb ? mb : '10px'}>
      <FormLabel
        display='flex'
        ms='10px'
        htmlFor={id}
        fontSize='sm'
        color={textColorPrimary}
        fontWeight='bold'
        _hover={{ cursor: 'pointer' }}
      >
        {label}
        <Text fontSize='sm' fontWeight='400' ms='2px'>
          {extra}
        </Text>
      </FormLabel>
      <Select
        {...rest}
        id={id}
        name={name}
        fontWeight='500'
        variant='main'
        placeholder={placeholder}
        _placeholder={{ fontWeight: '400', color: 'secondaryGray.600' }}
        h='40px'
        maxH='40px'
      >
        {optionProp.map(data => {
          return (
            <option value={data.value}>{data.label}</option>
          )
        })}
      </Select>
    </Flex>
  )
}
