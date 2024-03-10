'use client'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Link,
  Text,
  Stack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { useUserForgetPasswordMutation } from 'app/api/apiSlice';
import { useAppDispatch } from 'app/services/hooks';
import { useFormik } from 'formik';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import DefaultAuthLayout from 'layouts/auth/Default';
import { FaChevronLeft } from 'react-icons/fa';



export default function ResetPasswordForm() {

  const toast = useToast()
  const dispatch = useAppDispatch();

  const [passwordChange,
    {
      data:PassData,
      isLoading:isPassLoading,
      isSuccess:isPassSuccess,
      isError:isPassError,
      error:PassError
    }] = useUserForgetPasswordMutation();
    


  const formik = useFormik({
    initialValues: {
      email:localStorage.getItem("email") || "",
      password:''
    },
    onSubmit: async (values) => {
      await passwordChange(values);
   }
  });

  
  useEffect(()=>{
    if(isPassSuccess){
      toast(
        {
          title:'Password Change',
          description:PassData.message || "User Password change Success",
          status:'success',
          isClosable:true,
          position:'top-right'
        }
      )
      localStorage.removeItem("email")
      redirect('/auth/sign-in')
    }else if(isPassError){
      toast.closeAll();
      toast(
        {
          title:'Error',
          description:(PassError as any).data.error || "User Password change Unsuccess.",
          isClosable:true,
          status:'error',
          position:'top-right'
        }
        )
    }
  },[isPassSuccess]);
      

  return (
    <DefaultAuthLayout>
      <Link
          href="/admin"
          style={{
            width: 'fit-content',
            marginTop: '20px',
          }}
        >
          <Flex
            align="center"
            ps={{ base: '25px', lg: '0px' }}
            pt={{ lg: '0px', xl: '0px' }}
            w="fit-content"
          >
            <Icon
              as={FaChevronLeft}
              me="12px"
              h="13px"
              w="8px"
              color="secondaryGray.600"
            />
            <Text ms="0px" fontSize="sm" color="secondaryGray.600">
              Back to Dashboard
            </Text>
          </Flex>
        </Link>
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
          Enter new password
        </Heading>


        <form onSubmit={formik.handleSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              placeholder="your-email@example.com"
              defaultValue={localStorage.getItem("email")}
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>
          <FormControl id="password" isRequired marginTop={2}>
            <FormLabel>Add New Password</FormLabel>
            <Input 
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            />
          </FormControl>
          <Stack spacing={6} marginTop={5}>
            <Button
              isLoading={isPassLoading}
              variant="brand"
              type='submit'
              fontSize="sm"
              fontWeight="500"
              w="100%"
              rounded={5}
              >
              Change Password
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
    </DefaultAuthLayout>
  )
}