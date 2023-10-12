import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, getRoles } from '../../constants/localstorage';
import { loginUser } from './userAction';

const initialState = {
  token: getLocalStorage('token'),
  roles: getRoles(),
  isAuthenticated: false,
  userInfor: JSON.parse(localStorage.getItem('userInfor')) || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.token = '';
      state.roles = [];
      localStorage.removeItem('token');
      localStorage.removeItem('roles');
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { token, roles } = action.payload;
      state.token = token;
      state.roles = roles;
      localStorage.setItem('roles', JSON.stringify(roles));
      localStorage.setItem('token', token);
    });
  },
});

const { actions, reducer } = userSlice;

export const { loginSuccess, logout } = actions;

export default reducer;
