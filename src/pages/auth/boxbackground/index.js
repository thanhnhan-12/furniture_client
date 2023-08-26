import { Box } from '@mui/material';
import React from 'react';
import BoxBg from '../../../assets/images/boxBackground.jpg';
import classNames from 'classnames/bind';
import useStyles from './styles';

const BoxBackground = ({ children }) => {
  const cx = classNames.bind(useStyles());

  return (
    <Box className={cx('loginContainer')}>
      <Box className={cx('login')}>
        <Box
          component="img"
          src={BoxBg}
          alt=""
          width="52rem"
          height="55rem"
          borderRadius="1.4rem"
        ></Box>
        <Box sx={{ width: '100%' }} >{children}</Box>
      </Box>
    </Box>
  );
};

export default BoxBackground;
