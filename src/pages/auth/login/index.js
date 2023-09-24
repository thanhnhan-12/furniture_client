import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import { FormInput } from '../../../components/hookform';
import { nofifyLoginSuccessfully } from '../../../constants/common';
import { schemaLogin } from '../../../constants/schema';
import { useAppDispatch } from '../../../redux';
import { loginUser } from '../../../redux/auth/authAction';
import { loginSuccess } from '../../../redux/auth/authSlice';
import { toastMessage } from '../../../utils/toast';
import BoxBackground from '../boxbackground';
import useStyles from '../boxbackground/styles';

const Login = () => {
  const cx = classNames.bind(useStyles());

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schemaLogin),
  });

  const handleOnSubmit = (data) => {
    console.log('LOGIN', data);
    dispatch(loginUser(data))
      .unwrap()
      .then((payload) => {
        if (payload && payload.error) {
          toastMessage.error('Sai email hoặc mật khẩu. Vui lòng thử lại.');
        } else {
          // Đăng nhập thành công
          nofifyLoginSuccessfully();
          dispatch(loginSuccess());
          localStorage.setItem('isLoggedIn', 'true');
          toastMessage.success('Login successfully');
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        toastMessage.error(
          'An error occurred during login. Please try again later.',
        );
      });
  };

  return (
    <BoxBackground>
      <ToastContainer draggable={false} transition={Zoom} autoClose={800} />
      <Box>
        <Typography component="h2" className={cx('heading')}>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
          <FormInput
            control={control}
            type="text"
            name="email"
            label="Email"
            placeholder="Email"
          />

          <FormInput
            control={control}
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
          />

          <Button type="submit" className={cx('button')}>
            Login
          </Button>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="baseline"
            mt="3rem"
          >
            <Typography component="p" className={cx('account')}>
              Don't have an account?
            </Typography>
            <Link to="/register" className={cx('account', 'link')}>
              Register with
            </Link>
          </Box>
        </Box>
      </Box>
    </BoxBackground>
  );
};

export default Login;
