import { Box } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput, FormSelect } from '../../../components/hookform';
import { schemaCheckout } from '../../../constants/schema';

const FormCheckout = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
    resolver: yupResolver(schemaCheckout),
  });

  return (
    <Box width="35%">
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
        name="companyfield"
        placeholder="Province"
        options={[]}
        keyOption="id_companyField"
        labelOption="name_field"
        label="Province"
        sx={{
          borderRadius: '4px',
          marginBottom: '3.6rem',
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
          marginBottom: '3.6rem',
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
