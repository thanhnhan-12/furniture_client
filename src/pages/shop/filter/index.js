import React from 'react';
import ShopFilter from '../../../assets/svg/shopFilter.svg';
import ShopViewGrid from '../../../assets/svg/shopViewGrid.svg';
import ShopViewList from '../../../assets/svg/shopViewList.svg';
import useStyles from './styles';
import { Box } from '@mui/material';

const Filter = () => {
  const classes = useStyles();

  return (
    <div className={classes.filterSort}>
      <div className={classes.filterLeft}>
        <Box className={classes.filter}>
          <img src={ShopFilter} alt="" />
          <b
            style={{
              fontSize: '2rem',
              fontWeight: '400',
              marginLeft: '1.2rem',
            }}
          >
            Filter
          </b>
        </Box>

        <div className={classes.view}>
          <img src={ShopViewGrid} alt="" style={{ marginRight: '2.3rem' }} />
          <img src={ShopViewList} alt="" />
        </div>

        <div className={classes.border}></div>

        <p className={classes.showing}>Showing 1-16 of 32 results</p>
      </div>

      <div className={classes.filterRight}>
        <p className={classes.sort} >Show</p>
        <input type="text" className={classes.inputShow} />
        <p className={classes.sort }>Sort by</p>
        <input type="text" placeholder='Default' className={classes.inputSort} />
      </div>
    </div>
  );
};

export default Filter;
