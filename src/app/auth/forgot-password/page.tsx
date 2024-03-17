'use client'

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
  useColorModeValue,
  Box,
  Link,
  Icon,
} from '@chakra-ui/react'
import { useFormik } from "formik";
import { useUserOtpSendMutation } from 'app/api/apiSlice';
import { useAppDispatch } from 'app/services/hooks';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import DefaultAuthLayout from 'layouts/auth/Default';
import { FaChevronLeft } from 'react-icons/fa';

export default function ForgotPassword() {
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  // const textColorSecondary = 'gray.400';
  // const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  // const textColorBrand = useColorModeValue('brand.500', 'white');
  // const brandStars = useColorModeValue('brand.500', 'brand.400');
  // const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  // const googleText = useColorModeValue('navy.700', 'white');
  // const googleHover = useColorModeValue(
  //   { bg: 'gray.200' },
  //   { bg: 'whiteAlpha.300' },
  // );
  // const googleActive = useColorModeValue(
  //   { bg: 'secondaryGray.300' },
  //   { bg: 'whiteAlpha.200' },
  // );
  const toast = useToast()
  // const dispatch = useAppDispatch();

  const [otpSend,
    {
      data:OTPData,
      isLoading:isOTPLoading,
      isSuccess:isOTPSuccess,
      isError:isOTPError,
      error:OTPError
    }] = useUserOtpSendMutation();
    


  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      await otpSend(values);
      localStorage.setItem("email",values.email);
   }
  });

  
  useEffect(()=>{
    if(isOTPSuccess){
      toast(
        {
          title:'OTP Send',
          description:OTPData.message || "User OTP Send Success",
          status:'success',
          isClosable:true,
          position:'top-right'
        }
      )
      redirect('/auth/otp')
    }else if(isOTPError){
      toast.closeAll();
      toast(
        {
          title:'Error',
          description:(OTPError as any).data.error || "User OTP Send Unsuccess.",
          isClosable:true,
          status:'error',
          position:'top-right'
        }
        )
    }
  },[isOTPSuccess]);
      

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
        maxW={{ base: '100%', md: 'max-content' }}
        w="100%"
        mx={{ base: 'auto', lg: '0px' }}
        me="auto"
        h="100%"
        alignItems="center"
        justifyContent="center"
        mb={{ base: '20px', md: '60px' }}
        px={{ base: '15px', md: '0px' }}
        mt={{ base: '30px', md: '14vh' }}
        flexDirection="column"
      >

        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
          Forgot your password?
          </Heading>

        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: '100%', md: '420px' }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: 'auto', lg: 'unset' }}
          me="auto"
          mb={{ base: '20px', md: 'auto' }}
        >
        {/* <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Forgot your password?
        </Heading> */}
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
          <Stack spacing={6} marginTop={5}>
            <Button
              isLoading={isOTPLoading}
              variant="brand"
              type='submit'
              fontSize="sm"
              fontWeight="500"
              w="100%"
              rounded={5}
              >
              Request Reset
            </Button>
          </Stack>
        </form>
      </Flex>
    </Flex>
    </DefaultAuthLayout>
  )
}