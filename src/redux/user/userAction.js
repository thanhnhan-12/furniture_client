import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../api/userapi';
import { toastMessage } from '../../utils/toast';

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

export const getMe = createAsyncThunk('user/getMe', async (_, { rejectWithValue }) => {
  try {
    const { data } = await userApi.getMe();
    return data;
  } catch (error) {
    toastMessage.setErrors(error);
    return rejectWithValue(error);
  }
});
