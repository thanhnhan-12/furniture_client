import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../api/userapi';
import { toastMessage } from '../../utils/toast';
import { authApi } from '../../api/authapi';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await authApi.login(payload);
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return rejectWithValue(error);
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await authApi.register(payload);
      return data;
    } catch (error) {
      toastMessage.setErrors(error);
      return rejectWithValue(error);
    }
  },
);

// export const updateUserInfo = createAsyncThunk('user/updateUserInfo', async (payload, { rejectWithValue }) => {
//   try {
//     const { data } = await userApi.updateUserInfo(payload);
//     return data;
//   } catch (error) {
//     toastMessage.setErrors(error);
//     return rejectWithValue(error);
//   }
// });

// export const changePassword = createAsyncThunk('user/changePassword', async (payload, { rejectWithValue }) => {
//   try {
//     const { data } = await userApi.changePassword(payload);
//     return data;
//   } catch (error) {
//     toastMessage.setErrors(error);
//     return rejectWithValue(error);
//   }
// });

export const getAllUser = createAsyncThunk('user/getAllUser', async () => {
  try {
    const { data } = await userApi.getAllUser();
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return error;
  }
});
