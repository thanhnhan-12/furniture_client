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
import axios from 'axios';

const Login = () => {
  const cx = classNames.bind(useStyles());

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async () => {
    try {
      await axios.post('http://localhost:8080/api/v1/auth/login');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BoxBackground>
      <Box>
        <Typography component="h2" className={cx('heading')}>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
