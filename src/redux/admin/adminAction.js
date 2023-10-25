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

export const bestSellingProducts = createAsyncThunk(
  'admin/bestSellingProducts',
  async () => {
    try {
      const { data } = await adminApi.bestSellingProducts();
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);

export const monthlyRevenueStatistics = createAsyncThunk(
  'admin/monthlyRevenueStatistics',
  async () => {
    try {
      const { data } = await adminApi.monthlyRevenueStatistics();
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);

export const searchProductName = createAsyncThunk(
  'admin/monthlyRevenueStatistics',
  async (productName) => {
    try {
      const { data } = await adminApi.searchProductName(productName);
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);
