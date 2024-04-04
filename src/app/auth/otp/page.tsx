'use client';
import { useFormik } from "formik";
import { Center, Heading, Icon, Link, useToast } from '@chakra-ui/react'
import {
  Button,
  FormControl,
  Flex,
  Stack,
  useColorModeValue,Text,
  HStack,
} from '@chakra-ui/react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';
import DefaultAuthLayout from 'layouts/auth/Default';
import { FaChevronLeft } from "react-icons/fa";
import {useUserOtpSendMutation, useUserOtpVerifyMutation} from "redux/apiMutationSlice";



export default function VerifyEmailForm() {

  // Instead of using localStorage
  // @ts-ignore
  let dataFromLocalStorage="";

  if (typeof window !== 'undefined') {
    dataFromLocalStorage = localStorage.getItem('email') || "";
  }

  const toast = useToast()

  const [otpSend,
    {
      data:OTPSendData,
      isLoading:isOTPSendLoading,
      isSuccess:isOTPSendSuccess,
      isError:isOTPSendError,
      error:OTPSendError
    }] = useUserOtpSendMutation();

  const [otpVerify,
    {
      data:OTPData,
      isLoading:isOTPLoading,
      isSuccess:isOTPSuccess,
      isError:isOTPError,
      error:OTPError
    }] = useUserOtpVerifyMutation();
    
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
        email:`${dataFromLocalStorage}`,
        otp:getPin
      },
      onSubmit: async (values) => {
        await otpVerify({email:values.email,otp:getPin});
     }
    });

    useEffect(()=>{
      if(isOTPSuccess){
        toast(
          {
            title:'User Verify',
            description:OTPData.message || "User Verify Success",
            status:'success',
            isClosable:true,
            position:'top-right'
          }
        )
        redirect('/auth/new-password')
      }else if(isOTPError){
        toast.closeAll();
        toast(
          {
            title:'Error',
            description:(OTPError as any).data.error || "User OTP Send Unsuccessful.",
            isClosable:true,
            status:'error',
            position:'top-right'
          }
          )
      }
    },[isOTPSuccess]);

    const otpResend=async()=>{
      setCounter(59);
      await otpSend({email:`${dataFromLocalStorage}`});
      if(isOTPSendSuccess){
        toast(
          {
            title:'OTP Send',
            description:OTPData.message || "User OTP Send Success",
            status:'success',
            isClosable:true,
            position:'top-right'
          }
        )
      }else if(isOTPSendError){
        toast.closeAll();
        toast(
          {
            title:'Error',
            description:(OTPError as any).data.error || "User OTP Send Unsuccessful.",
            isClosable:true,
            status:'error',
            position:'top-right'
          }
          )
      }
    }

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
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}>
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
          {dataFromLocalStorage}
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
          marginTop={5}
          >
            <Text fontSize='xs'>Time Left : 00.{counter}</Text>
          </Stack>
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
            Verify
          </Button>
        </Stack>

        <Stack
          fontSize={{ base: 'sm', sm: 'md' }}
          marginTop={1}
          direction={"row"}
          >
            <Text fontSize='sm'>Dont have received code? </Text>
            <Text fontSize='sm' color='teal.500' cursor={"pointer"} hidden={counter > 0}
            onClick={otpResend}
            >resend</Text>

          </Stack>
        </form>
      </Stack>
    </Flex>
    </DefaultAuthLayout>
  )
}