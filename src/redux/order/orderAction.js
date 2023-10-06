import { createAsyncThunk } from '@reduxjs/toolkit';
import { orderApi } from '../../api/orderapi';
import { toastMessage } from '../../utils/toast';

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (payload) => {
    try {
      const { data } = await orderApi.createOrder(payload);
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);
