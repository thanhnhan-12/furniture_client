import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartApi } from '../../api/cartapi';
import { toastMessage } from '../../utils/toast';

export const createCart = createAsyncThunk('cart/createCart', async () => {
  try {
    const { data } = await cartApi.createCart();
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return error;
  }
});