'use client';
// Chakra imports
import {
  Flex,
  FormLabel,
  Input,
  SpaceProps,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

// Custom components

export default function InputBox (props: {
  id: string
  label: string
  name:string
  extra: JSX.Element
  placeholder: string
  type: string
  value:any
  onchange:React.ChangeEventHandler
  mb: SpaceProps['mb']
}) {
  const { id, label, extra, placeholder,name,onchange,value, type, mb, ...rest } = props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')

  return (
    <Flex direction='column' mb={mb ? mb : '10px'}>
      <FormLabel
        display='flex'
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
      <Input
        {...rest}
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={onchange}
        fontWeight='500'
        variant='main'
        rounded={5}
        placeholder={placeholder}
        _placeholder={{ fontWeight: '400', color: 'secondaryGray.600' }}
        h='40px'
        maxH='40px'
      />
    </Flex>
  )
}
