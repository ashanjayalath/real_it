// Chakra imports
import { EmailIcon } from '@chakra-ui/icons'
import {
    Flex,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    SpaceProps,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
// Custom components

export default function InputBoxIcon(props: {
    id: string
    label: string
    name: string
    extra: JSX.Element
    placeholder: string
    type: string
    leftElement:any
    onchange: React.ChangeEventHandler
    mb: SpaceProps['mb']
}) {
    const { id, label, extra, placeholder, name,leftElement, onchange, type, mb, ...rest } = props
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
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <Icon as={leftElement} color='gray.300'/>
                </InputLeftElement>
                <Input
                    {...rest}
                    name={name}
                    type={type}
                    id={id}
                    onChange={onchange}
                    fontWeight='500'
                    rounded={5}
                    placeholder={placeholder}
                    _placeholder={{ fontWeight: '400', color: 'secondaryGray.600' }}
                    h='40px'
                    maxH='40px'
                />
            </InputGroup>
        </Flex>
    )
}
