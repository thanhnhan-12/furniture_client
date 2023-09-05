import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoryApi } from '../../api/categoryapi';
import { toastMessage } from '../../utils/toast';

export const getAllCategory = createAsyncThunk('category/getAllCategory', async () => {
  try {
    const { data } = await categoryApi.getAllCategory();
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return error;
  }
});