import { createAsyncThunk } from '@reduxjs/toolkit';
import { adminApi } from '../../api/adminapi';
import { toastMessage } from '../../utils/toast';

export const userStatistics = createAsyncThunk(
  'admin/userStatistics',
  async () => {
    try {
      const { data } = await adminApi.userStatistics();
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);
