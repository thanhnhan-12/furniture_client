import { createAsyncThunk } from '@reduxjs/toolkit';
import { addressApi } from '../../api/addressapi';
import { toastMessage } from '../../utils/toast';

export const getProvince = createAsyncThunk(
  'province/getProvince',
  async () => {
    try {
      const { data } = await addressApi.getProvince();
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);

export const getDistrict = createAsyncThunk(
  'district/getDistrict',
  async () => {
    try {
      const { data } = await addressApi.getDistrict();
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);

export const getWard = createAsyncThunk('ward/getWard', async (districtID) => {
  try {
    const { data } = await addressApi.getWard(districtID);
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return error;
  }
});

export const getAddressByUser = createAsyncThunk(
  'address/getAddressByUser',
  async () => {
    try {
      const { data } = await addressApi.getAddressByUser();
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);

export const addAddress = createAsyncThunk(
  'address/addAddress',
  async (payload) => {
    try {
      const { data } = await addressApi.addAddress(payload);
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);

export const deleteAddressByID = createAsyncThunk(
  'address/deleteAddressByID',
  async (addressID) => {
    try {
      const { data } = await addressApi.deleteAddressByID(addressID);
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return error;
    }
  },
);
