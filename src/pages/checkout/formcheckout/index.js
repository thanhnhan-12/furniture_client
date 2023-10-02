import { Box } from '@mui/material';
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

  const province = useAppSelector((state) => state.province.province);

  const district = useAppSelector((state) => state.district.district);

  const ward = useAppSelector((state) => state.ward.ward);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      province: '',
      district: '',
      ward: '',
      address: '',
      phone: '',
      email: '',
    },
    resolver: yupResolver(schemaCheckout),
  });

  const handleOnSubmit = (data) => {
    console.log(data); // In ra dữ liệu form
  };

  const handleOnChange = (name, value) => {
    if (value) return dispatch(getWard(value));
    dispatch(resetData());
  };

  return (
    <Box width="35%" component="form" id='checkout' onSubmit={handleSubmit(handleOnSubmit)} >
      <Box display="flex" gap="5rem" mb="3.6rem">
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

      <FormSelect
        control={control}
        name="province"
        placeholder="No Select"
        options={province}
        keyOption="provinceID"
        labelOption="provinceName"
        label="Province"
        sx={{
          borderRadius: '4px',
          marginBottom: '3.6rem',
        }}
        // handleChange={}
      />

      <FormSelect
        control={control}
        name="district"
        placeholder="No Select"
        options={district}
        keyOption="districtID"
        labelOption="districtName"
        label="District"
        sx={{
          borderRadius: '4px',
          marginBottom: '3.6rem',
        }}
        handleChange={handleOnChange}
      />

      <FormSelect
        control={control}
        name="ward"
        placeholder="No Select"
        options={ward}
        keyOption="wardID"
        labelOption="wardName"
        label="Ward"
        sx={{
          borderRadius: '4px',
          marginBottom: '3.6rem',
        }}
        // handleChange={handleOnChange}
      />

      <FormInput
        control={control}
        type="text"
        name="address"
        label="Address Name"
        placeholder="Address Name"
        sx={{ marginBottom: '3.6rem' }}
      />

      <FormInput
        control={control}
        type="text"
        name="phone"
        label="Phone"
        placeholder="Phone Number"
        sx={{ marginBottom: '3.6rem' }}
      />

      <FormInput
        control={control}
        type="email"
        name="email"
        label="Email"
        placeholder="Email Address"
      />
    </Box>
  );
};

export default FormCheckout;
