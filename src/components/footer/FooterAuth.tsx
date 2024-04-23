'use client';
/* eslint-disable */

import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { company } from 'utils/env';

export default function Footer(props: { [x: string]: any }) {
  let textColor = useColorModeValue({ base: 'gray.400', lg: 'gray.400' }, 'gray.400' );
  let linkColor = useColorModeValue({ base: 'gray.400', lg: 'gray.400' }, 'gray.400' );
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: 'column',
        lg: 'row',
      }}
      alignItems={{
        base: 'center',
        xl: 'start',
      }}
      justifyContent="space-between"
      px={{ base: '30px', md: '0px' }}
      pb="30px"
      {...props}
    >
      <Text
        color={textColor}
        textAlign={{
          base: 'center',
          xl: 'start',
        }}
        mb={{ base: '20px', lg: '0px' }}
      >
        {' '}
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="300" ms="4px">
        {company.companyName}. All Rights Reserved. Made with
          <Link
            mx="3px"
            color={textColor}
            href="#"
            target="_blank"
            fontWeight="700"
          >
            Bit96
          </Link>
        </Text>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <Link
            fontWeight="500"
            color={linkColor}
            href="mailto:bit96software@gmail.com"
          >
            Support
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <Link
            fontWeight="500"
            color={linkColor}
            href="#"
          >
            License
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <Link
            fontWeight="500"
            color={linkColor}
            href="#"
          >
            Terms of Use
          </Link>
        </ListItem>
        <ListItem>
          <Link
            fontWeight="500"
            color={linkColor}
            href="#"
          >
            Blog
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
