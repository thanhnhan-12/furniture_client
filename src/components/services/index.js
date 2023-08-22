import { Box } from '@mui/material';
import React from 'react';
import ServiceTrophy from '../../assets/svg/serviceTrophy.svg';
import ServiceGuarantee from '../../assets/svg/serviceGuarantee.svg';
import ServiceShipping from '../../assets/svg/serviceShipping.svg';
import ServiceSupport from '../../assets/svg/serviceSupport.svg';
import useStyles from './styles';
import classNames from 'classnames/bind';

const Services = () => {
  const cx = classNames.bind(useStyles());

  return (
    <Box sx={{ backgroundColor: '#FAF3EA', padding: '10rem 5.6rem' }}>
      <div className={cx('allServices', 'services')}>
        <div className={cx('services')}>
          <img src={ServiceTrophy} alt="" />
          <div className={cx('common')}>
            <b className={cx('serviceName')}>High Quality</b>
            <p className={cx('quality')}>crafted from top materials</p>
          </div>
        </div>

        <div className={cx('services')}>
          <img src={ServiceGuarantee} alt="" />
          <div className={cx('common')}>
            <b className={cx('serviceName')}>Warranty Protection</b>
            <p className={cx('quality')}>Over 2 years</p>
          </div>
        </div>

        <div className={cx('services')}>
          <img src={ServiceShipping} alt="" />
          <div className={cx('common')}>
            <b className={cx('serviceName')}>Free Shipping</b>
            <p className={cx('quality')}>Order over 150 $</p>
          </div>
        </div>

        <div className={cx('services')}>
          <img src={ServiceSupport} alt="" />
          <div className={cx('common')}>
            <b className={cx('serviceName')}>24 / 7 Support</b>
            <p className={cx('quality')}>Dedicated support</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Services;
