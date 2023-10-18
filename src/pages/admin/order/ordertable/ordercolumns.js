import { Box, Typography } from '@mui/material';
import { formatPrice } from '../../../../constants/common';
import moment from 'moment/moment';

export const orderColumns = [
  {
    field: '',
    headerName: 'Name',
    width: 150,
    renderCell: (params) => {
      return (
        <Box>
          <Typography>
            {params.row.firstName} {params.row.lastName}
          </Typography>
        </Box>
      );
    },
  },

  {
    field: 'addressName',
    headerName: 'Address',
    width: 150,
  },

  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 150,
  },

  {
    field: 'totalPrice',
    headerName: 'Total',
    type: 'number',
    width: 150,
    renderCell: (params) => {
      return (
        <Box>
          <Typography sx={{ fontSize: '' }}>
            {formatPrice(Number(params.row.totalPrice))}
          </Typography>
        </Box>
      );
    },
  },

  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => {
      return (
        <Box>
          <Typography>
            {params.row.status == 0 ? 'Not Delivery' : 'Delivered'}
          </Typography>
        </Box>
      );
    },
  },

  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,
    renderCell: (params) => {
      return (
        <Box>
          <Typography>
            {moment(params.row.createdAt).format('MM/DD/YYYY HH:mm')}
          </Typography>
        </Box>
      );
    },
  },
];
