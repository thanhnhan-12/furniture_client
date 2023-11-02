import { createAsyncThunk } from '@reduxjs/toolkit';
import { imagesApi } from '../../api/imagesapi';
import { toastMessage } from '../../utils/toast';

export const getImages = createAsyncThunk('images/getImages', async () => {
  try {
    const { data } = await imagesApi.getImages();
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return error;
  }
});

export const uploadImages = createAsyncThunk(
  'images/uploadImage',
  async (formData) => {
    try {
      const { data } = await imagesApi.uploadImages(formData);
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);
