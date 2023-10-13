import { Box, Typography } from '@mui/material';
import React from 'react';
import { schemaNewProduct } from '../../../../constants/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '../../../../components/hookform';

const AddProduct = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      productName: '',
      description: '',
      price: '',
      quantity: '',
    },
    resolver: yupResolver(schemaNewProduct),
  });

  const handleAddNewProduct = () => {};

  return (
    <Box>
      <Box component="form">
        <Typography>Add Product</Typography>

        <FormInput
          control={control}
          type="text"
          name="productName"
          label="Product Name"
          placeholder="Product Name"
        />

        <FormInput
          control={control}
          type="text"
          name="description"
          label="Description"
          placeholder="Description"
        />
      </Box>
    </Box>
  );
};

export default AddProduct;
