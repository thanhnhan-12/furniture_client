import ArchiveBoxIcon from '@heroicons/react/24/solid/ArchiveBoxIcon';
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import { SvgIcon } from '@mui/material';

export const navConfig = [
  // {
  //   children: [
  //     {
  //       title: 'Dashboad',
  //       path: '/dashboard',
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <ChartBarIcon />
  //         </SvgIcon>
  //       ),
  //     },
  //   ],
  // },

  {
    children: [
      {
        title: 'Customers',
        path: '/admin/customers',
        icon: (
          <SvgIcon fontSize="small">
            <UserIcon />
          </SvgIcon>
        ),
      },
    ],
  },

  {
    children: [
      {
        title: 'Product',
        path: '/admin/products',
        icon: (
          <SvgIcon fontSize="small">
            <ShoppingBagIcon />
          </SvgIcon>
        ),
      },
    ],
  },

  {
    children: [
      {
        title: 'Orders',
        path: '/admin/orders',
        icon: (
          <SvgIcon fontSize="small">
            <ArchiveBoxIcon />
          </SvgIcon>
        ),
      },
    ],
  },
];
