'use client'
import { useFormik } from "formik";
import { Center, Heading, Link } from '@chakra-ui/react'
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorModeValue,Text,
  HStack,
} from '@chakra-ui/react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import router from 'next/router';
import { useEffect, useState } from "react";
import { sign } from "crypto";
export default function VerifyEmailForm() {

  const [getPin,setPin] = useState<string>('');
  const [counter, setCounter] = useState(59);
 
    useEffect(() => {
      if (counter === 0) {
        return;
      }
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
    }, [counter]);


  const formik = useFormik({
    initialValues: {
      email: 'esoftshan@gmail.com',
      otp:''
    },
    onSubmit: async (values) => {
      try{
        const val={email:values.email,otp:getPin}
        const response = await fetch('http://localhost:3008/api/user/otpVerify',{
          method:'POST',
          body:JSON.stringify(val),
          headers: {
              'Content-Type': 'application/json',
          },
        });
        const responseData = await response.json();
        router.push('/signin');
      }catch (err){
        console.log(err)
      }
    }
  });



  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verify your Email
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          We have sent code to your email
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
          {"fwfewefw"}
        </Center>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <Center>
              <HStack>
                <PinInput onChange={(e:any)=>setPin(e)}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Center>
          </FormControl>
          <Stack
          fontSize={{ base: 'sm', sm: 'md' }}
          >
            <Text fontSize='xs'>Time Left : 00.{counter}</Text>
            <Text fontSize='sm'>Dont have received code? <Link>resend</Link></Text>

          </Stack>
        <Stack spacing={6}>
          <Button
            type="submit"
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Verify
          </Button>
        </Stack>
        </form>
      </Stack>
    </Flex>
  )
}