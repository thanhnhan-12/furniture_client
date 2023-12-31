import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FormInput } from '../../../components/hookform';
import { nofifyRegisterSuccessfully } from '../../../constants/common';
import { schemaRegister } from '../../../constants/schema';
import { useAppDispatch } from '../../../redux';
import { registerUser } from '../../../redux/auth/authAction';
import { toastMessage } from '../../../utils/toast';
import BoxBackground from '../boxbackground';
import useStyles from '../boxbackground/styles';

const Register = () => {
  const cx = classNames.bind(useStyles());

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    },
    resolver: yupResolver(schemaRegister),
  });

  const handleOnSubmit = (data) => {
    console.log('REGISTER', data);
    dispatch(registerUser(data))
      .unwrap()
      .then((data) => {
        toastMessage.success('Register successfully');
        nofifyRegisterSuccessfully();
        navigate('/login');
      });
  };

  return (
    <BoxBackground>
      <Box>
        <Typography component="h2" className={cx('heading')}>
          Create your account
        </Typography>

        <Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
          <Box display="flex" alignItems="baseline" gap="2rem">
            <FormInput
              control={control}
              type="text"
              name="firstName"
              label="First Name"
              placeholder="First Name"
            />

            <FormInput
              control={control}
              type="text"
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
            />
          </Box>

          <FormInput
            control={control}
            type="text"
            name="email"
            label="Email"
            placeholder="Email"
          />

          <FormInput
            control={control}
            type="tel"
            name="phoneNumber"
            label="Phone Number"
            placeholder="Phone Number"
          />

          <FormInput
            control={control}
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
          />

          <FormInput
            control={control}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Password"
          />

          <Button type="submit" className={cx('button')}>
            Register
          </Button>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="baseline"
            mt="3rem"
          >
            <Typography component="p" className={cx('account')}>
              Already have an account?
            </Typography>
            <Link to="/login" className={cx('account', 'link')}>
              Login with
            </Link>
          </Box>
        </Box>
      </Box>
    </BoxBackground>
  );
};

export default Register;
