import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import OrderTable from './ordertable';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { getAllOrders } from '../../../redux/order/orderAction';

const OrderAdmin = () => {
  const dispatch = useAppDispatch();

  const orderRows = useAppSelector((state) => state.order.adminOrderList);

  // console.log('Orders Rows: ', orderRows);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <Box>
      <OrderTable orderRows={orderRows} />
    </Box>
  );
};

export default OrderAdmin;
