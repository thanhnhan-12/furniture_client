import classNames from 'classnames/bind';
import React from 'react';
import useStyles from './styles';
import { Box, Typography } from '@mui/material';
import { FormInput, FormSelect } from '../../../components/hookform';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../../constants/schema';

const FormCheckout = () => {
  const cx = classNames.bind(useStyles());

  const { control, handleSubmit } = useForm({
    defaultValues: {},
    resolver: yupResolver(schemaLogin),
  });

  return (
    <Box width="35%">
      <Box display="flex" gap="5rem" >
        <FormInput
          control={control}
          type="text"
          name="firstName"
          label="First Name"
        />
        <FormInput
          control={control}
          type="text"
          name="lastName"
          label="Last Name"
        />
      </Box>

      <FormSelect
        control={control}
        name="companyfield"
        placeholder="Province"
        options={[]}
        keyOption="id_companyField"
        labelOption="name_field"
        label="Province"
        sx={{
          borderRadius: '4px',
        }}
        // handleChange={handleOnChange}
      />

      <FormSelect
        control={control}
        name="companyfield"
        placeholder="District"
        options={[]}
        keyOption="id_companyField"
        labelOption="name_field"
        label="District"
        sx={{
          borderRadius: '4px',
        }}
        // handleChange={handleOnChange}
      />

      <FormSelect
        control={control}
        name="companyfield"
        placeholder="Ward"
        options={[]}
        keyOption="id_companyField"
        labelOption="name_field"
        label="Ward"
        sx={{
          borderRadius: '4px',
        }}
        // handleChange={handleOnChange}
      />

      <FormInput
        control={control}
        type="text"
        name="address"
        label="Address Name"
      />

      <FormInput control={control} type="text" name="phone" label="Phone" />

      <FormInput control={control} type="email" name="email" label="Email" />
    </Box>
  );
};

export default FormCheckout;
