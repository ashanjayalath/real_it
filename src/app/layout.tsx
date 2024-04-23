'use client';
import React, { ReactNode, useEffect } from 'react';
import AppWrappers from './AppWrappers';
import { cookies } from 'next/headers';


// async function getData() {
//   const token = cookies().get('refreshToken')


//   if (token) {
//     try {
//       const response = await axios.get('https://your-api-endpoint/user', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log('Session validated successfully:', response);
//       // setUser(response.user);
//     } catch (error) {
//       console.error('Session validation failed:', error);
//       cookies().delete('refreshToken')
//     }
//   } else {
//     console.log('No token found');
//   }
// }


export default async function RootLayout({ children }: { children: ReactNode }) {
  // await getData();
  
  return (
    <html lang="en">
      <body id={'root'}>
        <AppWrappers>
            {children}
        </AppWrappers>
      </body>
    </html>
  );
}
