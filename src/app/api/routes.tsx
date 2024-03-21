import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdNoteAlt,
  MdLibraryBooks,
  MdPeopleAlt,
  MdOutlineFingerprint,
  MdOutlineShoppingCart,
} from 'react-icons/md';

import { IRoute } from '../../types/navigation';

const routes: IRoute[] = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Items',
    layout: '/admin',
    path: '/items',
    icon: <Icon as={MdOutlineShoppingCart} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Invoices',
    layout: '/admin',
    path: '/invoices',
    icon: <Icon as={MdLibraryBooks} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Estimate',
    layout: '/admin',
    path: '/estimates',
    icon: <Icon as={MdNoteAlt} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Vendors',
    layout: '/admin',
    path: '/vendors',
    icon: (
      <Icon as={MdPeopleAlt} width="20px" height="20px" color="inherit"/>
    ),
    secondary: true,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdOutlineFingerprint} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
