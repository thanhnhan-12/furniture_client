import React from 'react';
import BoxBackground from '../boxbackground';
import { Box, Button, Typography } from '@mui/material';
import useStyles from './styles';
import classNames from 'classnames/bind';
import { FormInput } from '../../../components/hookform';
import { useForm } from 'react-hook-form';
import { schemaCheckout } from '../../../constants/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

const Register = () => {
  const cx = classNames.bind(useStyles());

  const { control, handleSubmit } = useForm({
    defaultValues: {},
    resolver: yupResolver(schemaCheckout),
  });

  return (
    <BoxBackground>
      <Box>
        <Typography component="h2" className={cx('heading')}>
          Create your account
        </Typography>

        <Box>
          <Box display="flex" alignItems="baseline" gap="2rem" >
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
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
          />

          <FormInput
            control={control}
            type="password"
            name="password"
            label="Confirm Password"
            placeholder="Confirm Password"
          />

          <Button className={cx('button')}>Register</Button>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="baseline"
            mt="4.8rem"
          >
            <Typography component="p" className={cx('account')}>
              Already have an account?
            </Typography>
            <Link to="/login" className={cx('account', 'link')}>
              Register with
            </Link>
          </Box>
        </Box>
      </Box>
    </BoxBackground>
  );
};

export default Register;
