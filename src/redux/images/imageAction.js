import { createAsyncThunk } from '@reduxjs/toolkit';
import { imagesApi } from '../../api/imagesapi';
import { toastMessage } from '../../utils/toast';

export const getImages = createAsyncThunk('images/getImages', async ({ rejectWithValue }) => {
  try {
    const { data } = await imagesApi.getImages();
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return rejectWithValue(error);
  }
});