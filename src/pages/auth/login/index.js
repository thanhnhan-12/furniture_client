import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FormInput } from '../../../components/hookform';
import { schemaCheckout } from '../../../constants/schema';
import BoxBackground from '../boxbackground';
import useStyles from './styles';

const Login = () => {
  const cx = classNames.bind(useStyles());

  const { control, handleSubmit } = useForm({
    defaultValues: {},
    resolver: yupResolver(schemaCheckout),
  });

  return (
    <BoxBackground>
      <Box>
        <Typography component="h2" className={cx('heading')}>
          Login
        </Typography>

        <Box>
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

          <Button className={cx('button')}>Login</Button>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="baseline"
            mt="4.8rem"
          >
            <Typography component="p" className={cx('account')}>
              Don't have an account?
            </Typography>
            <Link to="/register" className={cx('account', 'link')}>
              Login with
            </Link>
          </Box>
        </Box>
      </Box>
    </BoxBackground>
  );
};

export default Login;
