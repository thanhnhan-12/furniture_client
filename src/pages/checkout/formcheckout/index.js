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
import useStyles from './styles';
import classNames from 'classnames/bind';
import { saveAddressSelected } from '../../../redux/address/addressSlice';

const FormCheckout = () => {
  const cx = classNames.bind(useStyles());

  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.auth.token);
  // console.log('Token: ', token);

  const userInfor = useAppSelector((state) => state.auth.userInfor);
  // console.log('UserInfor: ', userInfor);

  const province = useAppSelector((state) => state.province.province);

  const district = useAppSelector((state) => state.district.district);

  const ward = useAppSelector((state) => state.ward.ward);

  const saveAddress = useAppSelector((state) => state.address.saveAddress);
  // console.log('Address: ', saveAddress);

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
        <Box>
          <Typography className={cx('inforName', 'color')}>
            {userInfor.firstName} {userInfor.lastName}
          </Typography>

          <Box className={cx('region')}>
            <Typography className={cx('regionName', 'inforCommon', 'color')}>
              {saveAddress.addressName},
            </Typography>
            <Typography className={cx('regionName', 'inforCommon', 'color')}>
              {saveAddress.wardName},
            </Typography>
            <Typography className={cx('regionName', 'inforCommon', 'color')}>
              {saveAddress.districtName},
            </Typography>
            <Typography className={cx('regionName', 'inforCommon', 'color')}>
              {saveAddress.provinceName}
            </Typography>
          </Box>

          <Typography className={cx('infor', 'inforCommon', 'color')}>
            Email:
            <Typography
              component="span"
              className={cx('inforCommon')}
              sx={{ ml: '1.1rem' }}
            >
              {userInfor.email}
            </Typography>
          </Typography>
          <Typography className={cx('infor', 'inforCommon', 'color')} mt="1rem">
            Contact -
            <Typography
              component="span"
              className={cx('inforCommon')}
              sx={{ ml: '1.1rem' }}
            >
              {userInfor.phoneNumber}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FormCheckout;
