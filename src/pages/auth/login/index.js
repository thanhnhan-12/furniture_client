import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FormInput } from '../../../components/hookform';
import { schemaLogin } from '../../../constants/schema';
import BoxBackground from '../boxbackground';
import useStyles from '../boxbackground/styles';
import { useAppDispatch } from '../../../redux';
import { loginUser } from '../../../redux/auth/authAction';
import { toastMessage } from '../../../utils/toast';
import { getMe } from '../../../redux/user/userAction';

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
        toastMessage.success('Login successfully');
        // dispatch(getMe());
        navigate('/');
      });
  };

  return (
    <BoxBackground>
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
