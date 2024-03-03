'use client'

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorModeValue,
} from '@chakra-ui/react'
import router from 'next/router';
import { useFormik } from "formik";

type ForgotPasswordFormInputs = {
  email: string
}

export default function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      try{
        const response = await fetch('http://localhost:3008/api/user/otp',{
          method:'POST',
          body:JSON.stringify(values),
          headers: {
              'Content-Type': 'application/json',
          },
        });
        const responseData = await response.json();
        if (response.status === 200){
          router.push(`/VerifyEmail?prop=${values.email}`);
        }else if(response.status === 400){
          <Alert status='error'><AlertIcon />{responseData.statusText}</Alert>
        }else{
          <Alert status='warning'><AlertIcon />{responseData.statusText}</Alert>
        }
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
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          You&apos;ll get an email with a reset link
        </Text>

        <form onSubmit={formik.handleSubmit}>
          <FormControl id="email">
            <Input
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              type='submit'
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Request Reset
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  )
}