import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, getRoles } from '../../constants/localstorage';
import { loginUser } from './authAction';

const initialState = {
  token: getLocalStorage('token'),
  roles: getRoles(),
  isAuthenticated: false,
  userInfor: JSON.parse(localStorage.getItem('userInfor')) || null,
};

const authSlice = createSlice({
  name: 'auth',
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
      const { token, roles, email, phoneNumber, firstName, lastName } =
        action.payload;
      state.token = token;
      state.roles = roles;
      state.userInfor = { email, phoneNumber, firstName, lastName };

      localStorage.setItem('userInfor', JSON.stringify(state.userInfor));
      // console.log('UserInfor: ', state.userInfor);
      localStorage.setItem('roles', JSON.stringify(roles));
      localStorage.setItem('token', token);
    });
  },
});

const { actions, reducer } = authSlice;

export const { loginSuccess, logout } = actions;

export default reducer;
