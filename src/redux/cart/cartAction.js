import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartApi } from '../../api/cartapi';
import { toastMessage } from '../../utils/toast';

export const createCart = createAsyncThunk('cart/createCart', async (payload) => {
  try {
    const { data } = await cartApi.createCart(payload);
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return error;
  }
});