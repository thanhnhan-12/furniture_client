import { Box, Button } from '@mui/material';
import React from 'react';
import useStyles from '../styles';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCheckout } from '../../../constants/schema';

const Address = () => {
  const cx = classNames.bind(useStyles());

  const { control, handleSubmit } = useForm({
    defaultValues: {
      province: '',
      district: '',
      ward: '',
      address: '',
    },
    resolver: yupResolver(schemaCheckout),
  });

  return (
    <Box p="10rem 0" >
      <Box className={cx('')}>
        <Button></Button>
      </Box>
    </Box>
  );
};

export default Address;
