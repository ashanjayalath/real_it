'use client'
import { Center, Spinner } from '@chakra-ui/react'
import {
  Flex,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'

let navbarFilter = 'none'
let navbarBackdrop = 'blur(20px)'

export default function Loading() {

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition='center'
      backgroundSize='cover'
      transitionDelay='0s, 0s, 0s, 0s'
      transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
      transition-property='box-shadow, background-color, filter, border'
      transitionTimingFunction='linear, linear, linear, linear'
      alignItems={{ xl: 'center' }}
      >
        <Center>
        <Spinner
            thickness='4px'
            speed='0.95s'
            emptyColor='gray.200'
            color={useColorModeValue('black.100', 'gray.800')}
            size='lg'
            />
        </Center>
    </Flex>
  )
}