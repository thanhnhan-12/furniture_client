import React from 'react';
import useStyles from './styles';
import ArrowRight from '../../assets/svg/arrowRight.svg';

const BackgroundBanner = ({ heading, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.bgBanner}>
      <div className={classes.boxHeadTitle} >
        <h1 className={classes.boxHeading}> {heading} </h1>
        <div className={classes.boxTitle}>
          <b className={classes.home}>Home</b>
          <img src={ArrowRight} alt="" />
          <p className={classes.title} > {title} </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBanner;
