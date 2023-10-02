import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import { useForm } from 'react-hook-form';
import { schemaCheckout } from '../../../../constants/schema';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import { FormInput, FormSelect } from '../../../hookform';
import useStyles from './styles';
import { addAddress, getWard } from '../../../../redux/address/addressAction';
import { resetData } from '../../../../redux/address/wardSlice';
import { useNavigate } from 'react-router-dom';

const FormAddress = ({ showForm, closeForm }) => {
  const cx = classNames.bind(useStyles());

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const address = useAppSelector((state) => state.address.address);

  const token = useAppSelector((state) => state.auth);

  const province = useAppSelector((state) => state.province.province);

  const district = useAppSelector((state) => state.district.district);

  const ward = useAppSelector((state) => state.ward.ward);

  const { control, handleSubmit, reset, setFocus } = useForm({
    defaultValues: {
      province: '',
      district: '',
      ward: '',
      address: '',
    },
    resolver: yupResolver(schemaCheckout),
  });

  const handleOnChange = (name, value) => {
    if (value) return dispatch(getWard(value));
    dispatch(resetData());
  };

  const handleAddAddress = (addressName) => {
    console.log('Data: ', addressName);
    dispatch(addAddress(addressName)).then(() => {
      // reset({ province: '' });
      // setFocus('province')
      // reset({ district: '' });
      // setFocus('district')
      // reset({ ward: '' });
      // setFocus('ward')
      reset({ addressName: '' });
      setFocus('address');
    });
  };

  return showForm ? (
    <Box
      className={cx('formWrapper')}
      onClick={() => {
        closeForm();
      }}
    >
      <Box
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <Box
          component="form"
          className={cx('modalForm')}
          onSubmit={handleSubmit(handleAddAddress)}
        >
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
            keyOption="addressName"
            labelOption="addressName"
            sx={{ marginBottom: '3.6rem' }}
          />

          <Button className={cx('btnAddAddress')} type="submit">
            Add Address
          </Button>
        </Box>
      </Box>
    </Box>
  ) : null;
};

export default FormAddress;
