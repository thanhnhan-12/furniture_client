import { createAsyncThunk } from '@reduxjs/toolkit';
import { productApi } from '../../api/productapi';
import { toastMessage } from '../../utils/toast';

export const getAllProduct = createAsyncThunk(
  'product/getAllProduct',
  async () => {
    try {
      const { data } = await productApi.getAllProduct();
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);

export const getProductList = createAsyncThunk(
  'product/getProductList',
  async (filters) => {
    try {
      const { data } = await productApi.getProductList(filters);
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);

export const getProductByID = createAsyncThunk(
  'product/getProductByID',
  async (productID) => {
    try {
      const { data } = await productApi.getProductByID(productID);
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (formData) => {
    try {
      const { data } = await productApi.addProduct(formData);
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);
