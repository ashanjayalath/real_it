'use client';
import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers';
import NextNProgress from 'nextjs-progressbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id={'root'}>
      {/* <NextNProgress
            color="#FF0022"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
        /> */}
        <AppWrappers>
       
          {children}
          </AppWrappers>
      </body>
    </html>
  );
}
