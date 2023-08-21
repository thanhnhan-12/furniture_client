import { Box } from '@mui/material';
import React from 'react';
import ServiceTrophy from '../../assets/svg/serviceTrophy.svg';
import ServiceGuarantee from '../../assets/svg/serviceGuarantee.svg';
import ServiceShipping from '../../assets/svg/serviceShipping.svg';
import ServiceSupport from '../../assets/svg/serviceSupport.svg';
import useStyles from './styles';

const Services = () => {
  const classes = useStyles();

  return (
    <Box sx={{ backgroundColor: '#FAF3EA', padding: '10rem 5.6rem' }}>
      <div className={classes.allServices}>
        <div className={classes.services}>
          <img src={ServiceTrophy} alt="" />
          <div className={classes.common}>
            <b className={classes.serviceName}>High Quality</b>
            <p className={classes.quality}>crafted from top materials</p>
          </div>
        </div>

        <div className={classes.services}>
          <img src={ServiceGuarantee} alt="" />
          <div className={classes.common}>
            <b className={classes.serviceName}>Warranty Protection</b>
            <p className={classes.quality}>Over 2 years</p>
          </div>
        </div>

        <div className={classes.services}>
          <img src={ServiceShipping} alt="" />
          <div className={classes.common}>
            <b className={classes.serviceName}>Free Shipping</b>
            <p className={classes.quality}>Order over 150 $</p>
          </div>
        </div>

        <div className={classes.services}>
          <img src={ServiceSupport} alt="" />
          <div className={classes.common}>
            <b className={classes.serviceName}>24 / 7 Support</b>
            <p className={classes.quality}>Dedicated support</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Services;
