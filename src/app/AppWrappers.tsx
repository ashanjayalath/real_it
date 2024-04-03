'use client';
import React, { ReactNode, use, useEffect } from 'react';
import 'styles/App.css';
import 'styles/Contact.css';
import 'styles/MiniCalendar.css';
import 'styles/Loading.css';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import theme from '../theme/theme';
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { getServerSession } from 'next-auth';
import { ConfigProvider } from 'antd';
export default async function AppWrappers({ children }: { children: ReactNode }) {
  const session = await getServerSession;
  return (
    // <SessionProvider session={session}>
    <CacheProvider>
      <ChakraProvider theme={theme}>
          <Provider store={store}>
            {children}
          </Provider>
      </ChakraProvider>{' '}
    </CacheProvider>
    // </SessionProvider>



  );
}
