import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useStyles from '../styles';
import classNames from 'classnames/bind';
import FormAddress from './formaddress';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  getDistrict,
  getProvince,
  getWard,
} from '../../../redux/address/addressAction';

const Address = () => {
  const cx = classNames.bind(useStyles());

  const dispatch = useAppDispatch();

  const [showFormAddress, setShowFormAddress] = useState(false);

  const province = useAppSelector((state) => state.province.province);

  const district = useAppSelector((state) => state.district.district);

  useEffect(() => {
    dispatch(getProvince());
  }, []);

  useEffect(() => {
    dispatch(getDistrict());
  }, [dispatch]);

  useEffect(() => {
    // if (district.length > 0) return dispatch(getWard());
  }, [dispatch]);

  return (
    <Box className={cx('formAddress')} >
      <Box className={cx('addAddress')}>
        <Button
          className={cx('btnNewAddress')}
          onClick={() => setShowFormAddress(!showFormAddress)}
        >
          New Address
        </Button>
        <FormAddress
          showForm={showFormAddress}
          closeForm={() => {
            setShowFormAddress(false);
          }}
        />
      </Box>
    </Box>
  );
};

export default Address;
