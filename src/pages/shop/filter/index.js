import { Box } from '@mui/material';
import React from 'react';
import ShopFilter from '../../../assets/svg/shopFilter.svg';
import ShopViewGrid from '../../../assets/svg/shopViewGrid.svg';
import ShopViewList from '../../../assets/svg/shopViewList.svg';
import useStyles from './styles';
import classNames from 'classnames/bind';

const Filter = () => {
  const cx = classNames.bind(useStyles());

  return (
    <div className={cx('filterSort', 'filter')}>
      <div className={cx('filter')}>
        <Box className={cx('filter')}>
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

        <div className={cx('filter', 'view')}>
          <img src={ShopViewGrid} alt="" style={{ marginRight: '2.3rem' }} />
          <img src={ShopViewList} alt="" />
        </div>

        <div className={cx('border')}></div>

        <p className={cx('showing')}>Showing 1-16 of 32 results</p>
      </div>

      <div className={cx('filter')}>
        <p className={cx('sort')}>Show</p>
        <input type="text" className={cx('inputCommon', 'inputShow')} />
        <p className={cx('sort')}>Sort by</p>
        <input
          type="text"
          placeholder="Default"
          className={cx('inputCommon', 'inputSort')}
        />
      </div>
    </div>
  );
};

export default Filter;
