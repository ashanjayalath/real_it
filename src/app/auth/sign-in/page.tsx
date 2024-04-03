'use client';

import React, { useEffect, useRef, useState } from 'react';
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
  position,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
import { HSeparator } from 'components/separator/Separator';
import DefaultAuthLayout from 'layouts/auth/Default';
// Assets
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { company } from 'utils/env';
import { useFormik } from 'formik';
import { useUserLoginMutation } from "../../../redux/apiMutationSlice";
import { redirect } from 'next/navigation';
import { useAppDispatch } from 'app/services/hooks';
import { useSelector } from 'react-redux';
import {RootState} from "../../../redux/store"
import { setCredentials } from '../../../redux/features/auth/authSlice';
import Loading from '../../../app/loading'
import { CheckIcon, SmallAddIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { message } from 'antd';

export default function SignIn() {


  const toast = useToast()
  const [keepPass,setKeepPass] = useState(false);

  // const userDetails = useSelector((state:RootState) => state.userInfo);
  const dispatch = useAppDispatch();

  const [loginUser,
    {
      data:loginData,
      isLoading:isLoginLoading,
      isSuccess:isLoginSuccess,
      isError:isLoginError,
      error:LoginError
    }] = useUserLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    onSubmit: async (values) => {
      await loginUser(values)

    }
  });

    
  useEffect(()=>{
    if(isLoginSuccess){
      // message.success("gfjhfhgh")
      toast.closeAll();
      toast(
        {
          title:'Sign In',
          description:"User Login Success",
          status:'success',
          isClosable:true,
          position:'top-right'
        }
      )
      dispatch(setCredentials(loginData))
      redirect('/admin')
    }else if(LoginError){
     toast.closeAll();
      toast(
        {
          title:'Error',
          description:(LoginError as any).message || "User Login Unsuccess.",
          isClosable:true,
          status:'error',
          position:'top-right'
        }
      )
    }
  },[isLoginSuccess]);

  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  const googleText = useColorModeValue('navy.700', 'white');
  const googleHover = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.300' },
  );
  const googleActive = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.200' },
  );
  const [show, setShow] = React.useState(false);
  const [clear , setClear] = React.useState(false);
  const handleClick = () => setShow(!show);
  const hanleClear = () => setClear(!clear);
  // return (

  const content = 
      isLoginLoading ? 
      <Loading/> 
      : 
      (
    <DefaultAuthLayout>
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
            Sign In
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
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: '0px', md: '0px' }}
                placeholder={company.companyEmail}
                mb="24px"
                fontWeight="500"
                size="lg"
                
              />
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  id="password" 
                  name='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  isRequired={true}
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="24px"
                  size="lg"
                  type={show ? 'text' : 'password'}
                  variant="auth"
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: 'pointer' }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <Flex justifyContent="space-between" align="center" mb="24px">
                <FormControl display="flex" alignItems="center">
                  <Checkbox
                    id="remember-login"
                    colorScheme="brandScheme"
                    me="10px"
                    onChange={(e)=>{setKeepPass(e.target.checked)}}
                  />
                  <FormLabel
                    htmlFor="remember-login"
                    mb="0"
                    fontWeight="normal"
                    color={textColor}
                    fontSize="sm"
                  >
                    Keep me logged in
                  </FormLabel>
                </FormControl>
                <Link href="/auth/forgot-password">
                  <Text
                    color={textColorBrand}
                    fontSize="sm"
                    w="124px"
                    fontWeight="500"
                  >
                    Forgot password?
                  </Text>
                </Link>
              </Flex>
              
              <Button
                isLoading={isLoginLoading}
                // loadingText='Sign..'
                type='submit'
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
              >
                Sign In
              </Button>
              <Flex align="center" mb="25px">
                <HSeparator />
                <Text color="gray.400" mx="14px">
                  or
                </Text>
                <HSeparator />
              </Flex>
              <Button
                fontSize="sm"
                me="0px"
                mb="26px"
                py="15px"
                h="50px"
                w='100%'
                borderRadius="16px"
                bgColor={googleBg}
                color={googleText}
                fontWeight="500"
                _hover={googleHover}
                _active={googleActive}
                _focus={googleActive}
              >
              <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
              Sign in with Google
            </Button>
            
            </FormControl>
          </form>
        </Flex>
      </Flex>
    </DefaultAuthLayout>
      );
    return content
  // );
}

