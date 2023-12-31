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

export const getCartByUser = createAsyncThunk('cart/getCartByUser', async () => {
  try {
    const { data } = await cartApi.getCartByUser();
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return error;
  }
});

export const deleteCartByID = createAsyncThunk('cart/deleteCartByID', async (cartID) => {
  try {
    const { data } = await cartApi.deleteCartByID(cartID);
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return error;
  }
});

export const updateCart = createAsyncThunk('cart/updateCart', async (payload) => {
  try {
    const { data } = await cartApi.updateCart(payload);
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return error;
  }
});