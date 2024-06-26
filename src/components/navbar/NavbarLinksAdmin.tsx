'use client';
// Chakra Imports
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Link,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom Components
import { ItemContent } from 'components/menu/ItemContent';
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import { SidebarResponsive } from 'components/sidebar/Sidebar';
// Assets
import { FaEthereum } from 'react-icons/fa';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { MdInfoOutline, MdNotificationsNone } from 'react-icons/md';
import routes from '../../app/api/routes';

import {useEffect, useState} from "react";
import { redirect } from 'next/navigation';


export default function HeaderLinks(props: {


  secondary: boolean;
  onOpen: boolean | any;
  fixed: boolean | any;
}) {
  const { secondary } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  // Chakra Color Mode
  const navbarIcon = useColorModeValue('gray.400', 'white');
  let menuBg = useColorModeValue('white',  'gray.700');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorBrand = useColorModeValue('brand.700', 'brand.400');
  const ethColor = useColorModeValue('gray.700', 'white');
  const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
  const ethBg = useColorModeValue('secondaryGray.300',  'gray.800');
  const ethBox = useColorModeValue('white',  'gray.700');
  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(112, 144, 176, 0.06)',
  );
  // const borderButton = useColorModeValue('secondaryGray.500', 'whiteAlpha.200');
  //
  // const userDetails = useSelector((state:RootState) => state.auth);

  const [image,setImage] = useState<any>("img/avatars/avatar4.png");
  const [userName,setUserName] = useState<any>("There")
  // const [shortName,setShortName] = useState<string>();
  //
  //
  // useEffect(()=>{
  //   if(userName.split(' ').length == 2){
  //     let f = userName.split(' ')[0][0];
  //     let l = userName.split(' ')[1][0];
  //     setShortName(f+l);
  //   }else{
  //     let f = userName.split(' ')[0][0];
  //     setShortName(f)
  //   }
  // },[shortName])



  return (
    <Flex
      w={{ sm: '100%', md: 'auto' }}
      alignItems="center"
      flexDirection="row"
      bg={menuBg}
      flexWrap={secondary ? { base: 'wrap', md: 'nowrap' } : 'unset'}
      p="10px"
      borderRadius="30px"
      boxShadow={shadow}
    >
      <SearchBar
        mb={() => {
          if (secondary) {
            return { base: '10px', md: 'unset' };
          }
          return 'unset';
        }}
        me="10px"
        borderRadius="30px"
      />
      <Flex
        bg={ethBg}
        display={secondary ? 'flex' : 'none'}
        borderRadius="30px"
        ms="auto"
        p="6px"
        align="center"
        me="6px"
      >
        <Flex
          align="center"
          justify="center"
          bg={ethBox}
          h="29px"
          w="29px"
          borderRadius="30px"
          me="7px"
        >
          <Icon color={ethColor} w="9px" h="14px" as={FaEthereum} />
        </Flex>
        <Text
          w="max-content"
          color={ethColor}
          fontSize="sm"
          fontWeight="700"
          me="6px"
        >
          1,924
          <Text as="span" display={{ base: 'none', md: 'unset' }}>
            {' '}
            ETH
          </Text>
        </Text>
      </Flex>
      <SidebarResponsive routes={routes} />
      <Menu>
        <MenuButton p="0px">
          <Icon
            mt="6px"
            as={MdNotificationsNone}
            color={navbarIcon}
            w="18px"
            h="18px"
            me="10px"
          />
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="20px"
          borderRadius="20px"
          bg={menuBg}
          border="none"
          mt="22px"
          me={{ base: '30px', md: 'unset' }}
          minW={{ base: 'unset', md: '400px', xl: '450px' }}
          maxW={{ base: '360px', md: 'unset' }}
        >
          <Flex w="100%" mb="20px">
            <Text fontSize="md" fontWeight="600" color={textColor}>
              Notifications
            </Text>
            <Text
              fontSize="sm"
              fontWeight="500"
              color={textColorBrand}
              ms="auto"
              cursor="pointer"
            >
              Mark all read
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <MenuItem
              _hover={{ bg: 'none' }}
              _focus={{ bg: 'none' }}
              px="0"
              borderRadius="8px"
              mb="10px"
            >
              <ItemContent info="BiT96" />
            </MenuItem>
            <MenuItem
              _hover={{ bg: 'none' }}
              _focus={{ bg: 'none' }}
              px="0"
              borderRadius="8px"
              mb="10px"
            >
              <ItemContent info="BiT96" />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton p="0px">
          <Icon
            mt="6px"
            as={MdInfoOutline}
            color={navbarIcon}
            w="18px"
            h="18px"
            me="10px"
          />
        </MenuButton>
      </Menu>

      <Button
        variant="no-hover"
        bg="transparent"
        p="0px"
        minW="unset"
        minH="unset"
        h="18px"
        w="max-content"
        onClick={toggleColorMode}
      >
        <Icon
          me="10px"
          h="18px"
          w="18px"
          color={navbarIcon}
          as={colorMode === 'light' ? IoMdMoon : IoMdSunny}
        />
      </Button>
      <Menu>
        <MenuButton p="0px" style={{ position: 'relative' }}>
          
          {image ? 
          
          <Avatar
            size={'sm'}
            src={image}
          />
          
          :
          <>
            <Box
              _hover={{ cursor: 'pointer' }}
              color="white"
              // bg="#11047A"
              w="40px"
              h="40px"
              borderRadius={'50%'}
            />
            <Center top={0} left={0} position={'absolute'} w={'100%'} h={'100%'}>
              <Text fontSize={'xs'} fontWeight="bold" color={'white'}>
                {/*{shortName}*/}
                t
              </Text>
            </Center> 
          </>
          }


        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="0px"
          mt="10px"
          borderRadius="20px"
          bg={menuBg}
          border="none"
        >
          <Flex w="100%" mb="0px">
            <Text
              ps="20px"
              pt="16px"
              pb="10px"
              w="100%"
              borderBottom="1px solid"
              borderColor={borderColor}
              fontSize="sm"
              fontWeight="700"
              color={textColor}
            >
              👋&nbsp; Hey, {userName}
            </Text>
          </Flex>
          <Flex flexDirection="column" p="10px">
            <MenuItem
              _hover={{ bg:'none'}}
              // _focus={{ bg: 'none' }}
              borderRadius="8px"
              px="14px"
              onClick={()=>redirect('/profile')}
            >
              <Text fontSize="sm">Profile Settings</Text>
            </MenuItem>
            <MenuItem
              _hover={{ bg:'none'}}
              // _focus={{ bg: 'none' }}
              borderRadius="8px"
              px="14px"
            >
              <Text fontSize="sm">Newsletter Settings</Text>
            </MenuItem>
            <MenuItem
              _hover={{ bg: ''}}
              // _focus={{ bg: 'none' }}
              color="red.400"
              borderRadius="8px"
              px="14px"
            >
              <Text fontSize="sm">Log out</Text>
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}
