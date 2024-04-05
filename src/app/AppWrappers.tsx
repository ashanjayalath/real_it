'use client';
import React, { ReactNode} from 'react';
import 'styles/App.css';
import 'styles/Contact.css';
import 'styles/MiniCalendar.css';
import 'styles/Loading.css';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import theme from '../theme/theme';
import { Provider } from "react-redux";
import store from "../redux/store";

export default function AppWrappers({ children }: { children: ReactNode }) {

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
          <Provider store={store}>
            {children}
          </Provider>
      </ChakraProvider>{' '}
    </CacheProvider>
  );
}
