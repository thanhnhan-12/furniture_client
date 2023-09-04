import { createAsyncThunk } from '@reduxjs/toolkit';
import { productApi } from '../../api/productapi';
import { toastMessage } from '../../utils/toast';

export const getAllProduct = createAsyncThunk('product/getAllProduct', async ({ rejectWithValue }) => {
  try {
    const { data } = await productApi.getAllProduct();
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return rejectWithValue(error);
  }
});