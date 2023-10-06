import { Box, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput, FormSelect } from '../../../components/hookform';
import { schemaCheckout } from '../../../constants/schema';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  getDistrict,
  getProvince,
  getWard,
} from '../../../redux/address/addressAction';
import { resetData } from '../../../redux/address/wardSlice';

const FormCheckout = () => {
  const dispatch = useAppDispatch();

  const userInfor = useAppSelector((state) => state.auth.userInfor);
  console.log('UserInfor: ', userInfor);

  const { firstName, lastName } = userInfor;
  // console.log('First Name: ', firstName);
  // console.log('Last Name: ', lastName);

  const province = useAppSelector((state) => state.province.province);

  const district = useAppSelector((state) => state.district.district);

  const ward = useAppSelector((state) => state.ward.ward);

  const saveAddress = useAppSelector((state) => state.address.saveAddress);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      // firstName: '',
      // lastName: '',
      // province: '',
      // district: '',
      // ward: '',
      // address: '',
      // phone: '',
      // email: '',
    },
    resolver: yupResolver(schemaCheckout),
  });

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  const handleOnChange = (name, value) => {
    if (value) return dispatch(getWard(value));
    dispatch(resetData());
  };

  return (
    <Box
      width="35%"
      component="form"
      id="formCheckout"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Box>
        <Typography>{firstName}</Typography>
        {/* <Typography>{userInfor.lastName}</Typography> */}
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
      </Box>
    </Box>
  );
};

export default FormCheckout;
