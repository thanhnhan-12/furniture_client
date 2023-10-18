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

export const getAllOrders = createAsyncThunk(
  'order/getAllOrders',
  async () => {
    try {
      const { data } = await orderApi.getAllOrders();
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);
