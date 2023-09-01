import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api/authapi';
import { toastMessage } from '../../utils/toast';

export const loginUser = createAsyncThunk('auth/loginUser', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await authApi.login(payload);
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return rejectWithValue(error);
  }
});

export const registerUser = createAsyncThunk('auth/registerUser', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await authApi.register(payload);
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return rejectWithValue(error);
  }
});