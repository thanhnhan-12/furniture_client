import ArchiveBoxIcon from '@heroicons/react/24/solid/ArchiveBoxIcon';
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import { NoteAddOutlined } from '@mui/icons-material';
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
    subheader: 'Customer Manegement',
    children: [
      {
        title: 'Customers',
        path: '/admin/customer-list',
        icon: (
          <SvgIcon fontSize="small">
            <UserIcon />
          </SvgIcon>
        ),
      },
    ],
  },

  {
    subheader: 'Product Manegement',
    children: [
      {
        title: 'Product',
        path: '/admin/product-list',
        icon: (
          <SvgIcon fontSize="small">
            <ShoppingBagIcon />
          </SvgIcon>
        ),
      },
      {
        title: 'Add Product',
        path: '/admin/add-product',
        icon: <NoteAddOutlined />,
      },
    ],
  },

  {
    subheader: 'Order Manegement',
    children: [
      {
        title: 'Orders',
        path: '/admin/order-list',
        icon: (
          <SvgIcon fontSize="small">
            <ArchiveBoxIcon />
          </SvgIcon>
        ),
      },
    ],
  },
];
