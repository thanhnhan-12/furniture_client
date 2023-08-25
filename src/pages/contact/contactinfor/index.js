import { Box, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import useStyles from './styles';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactInfor = () => {
  const cx = classNames.bind(useStyles());

  return (
    <Box>
      <Box className={cx('contactInfor')}>
        <PlaceIcon sx={{ fontSize: '2.2rem' }} />
        <Box>
          <Typography component="p" className={cx('title')}>
            Address
          </Typography>
          <Typography component="p" className={cx('infor')}>
            236 5th SE Avenue, <br/>  New York NY10000, <br/>  United States
          </Typography>
        </Box>
      </Box>

      <Box className={cx('contactInfor')}>
        <PhoneIcon sx={{ fontSize: '2.2rem' }} />
        <Box>
          <Typography component="p" className={cx('title')}>
            Phone
          </Typography>
          <Typography component="p" className={cx('infor')}>
            Mobile: +(84) 546-6789 <br/>  Hotline: +(84) 456-6789
          </Typography>
        </Box>
      </Box>

      <Box className={cx('contactInfor')}>
        <AccessTimeFilledIcon sx={{ fontSize: '2.2rem' }} />
        <Box>
          <Typography component="p" className={cx('title')}>
            Working Time
          </Typography>
          <Typography component="p" className={cx('infor')}>
            Monday-Friday: 9:00 - 22:00 <br/>  Saturday-Sunday: 9:00 - 21:00
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInfor;
