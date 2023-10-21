import { Box, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux';
import LogoutIcon from '@mui/icons-material/Logout';
import useStyles from '../styles';
import classNames from 'classnames/bind';
import { logout } from '../../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const cx = classNames.bind(useStyles());

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <Box
      onClick={() => {
        dispatch(logout());
        // localStorage.removeItem('token');
        // localStorage.removeItem('roles');
        localStorage.setItem('isLoggedIn', 'false');
        navigate('/');
        window.location.reload();
      }}
    >
      <Box className={cx('logout')}>
        <LogoutIcon className={cx('logoutIcon')} />
        <Typography component="h3" className={cx('logoutIcon')}>
          Logout
        </Typography>
      </Box>
    </Box>
  );
};

export default Logout;
