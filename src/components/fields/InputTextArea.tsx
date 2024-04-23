'use client';
// Chakra imports
import {
    Flex,
    FormLabel,
    Textarea,
    SpaceProps,
    Text,
    useColorModeValue
  } from '@chakra-ui/react'
  // Custom components
  
  export default function InputBoxTextArea (props: {
    id: string
    label: string
    name:string
    value:any
    extra: JSX.Element
    placeholder: string
    onchange:React.ChangeEventHandler
    mb: SpaceProps['mb']
  }) {
    const { id, label, extra, placeholder,name,onchange,value, mb, ...rest } = props
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
        <Textarea
          {...rest}
          name={name}
          id={id}
          onChange={onchange}
          fontWeight='500'
          rounded={5}
          value={value}
          placeholder={placeholder}
          _placeholder={{ fontWeight: '400', color: 'secondaryGray.600' }}
          h='40px'
          maxH='80px'
        />
      </Flex>
    )
  }
  