import React, { useState } from 'react';
import classNames from 'classnames/bind';
import useStyles from './styles';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const ProductDetails = () => {
  const cx = classNames.bind(useStyles());

  const [selectedSize, setSelectedSize] = useState(null);

  const [amount, setAmount] = useState(1);

  const handleBgColorSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
      <h1 className={cx('productName', 'common')}>Sofa</h1>
      <p className={cx('price')}>250 VND</p>

      <div className={cx('evalute')}>
        <div className={cx('starRating')}>
          <StarBorderIcon
            sx={{ fontSize: '2rem', '&:hover': { color: 'yellow' } }}
          />
          <StarBorderIcon
            sx={{ fontSize: '2rem', '&:hover': { color: 'yellow' } }}
          />
          <StarBorderIcon
            sx={{ fontSize: '2rem', '&:hover': { color: 'yellow' } }}
          />
          <StarBorderIcon
            sx={{ fontSize: '2rem', '&:hover': { color: 'yellow' } }}
          />
          <StarBorderIcon
            sx={{ fontSize: '2rem', '&:hover': { color: 'yellow' } }}
          />
        </div>

        <div className={cx('border')}></div>

        <p className={cx('review', 'common')}>5 Customer Review</p>
      </div>

      <p className={cx('description')}>
        Setting the bar as one of the loudest speakers in its class, the Kilburn
        is a compact, stout-hearted hero with a well-balanced audio which boasts
        a clear midrange and extended highs for a sound.
      </p>

      <p className={cx('size', 'common')}>Size</p>

      <div className={cx('productSize', 'evalute')}>
        <div
          className={cx('sizeCommon', { selected: selectedSize === 'L' })}
          onClick={handleBgColorSize}
        >
          L
        </div>
        <div
          className={cx('sizeCommon', { selected: selectedSize === 'XL' })}
          onClick={handleBgColorSize}
        >
          XL
        </div>
        <div
          className={cx('sizeCommon', { selected: selectedSize === 'XS' })}
          onClick={handleBgColorSize}
        >
          XS
        </div>
      </div>

      <div className={cx('btnCart')}>
        <div className={cx('btnAmount')}>
          <Button sx={{ p: '0', minWidth: '0' }} >
            <RemoveIcon sx={{ color: '#000' }} />
          </Button>

          <p className={cx('amount')} >{amount}</p>

          <Button sx={{ p: '0', minWidth: '0' }}>
            <AddIcon sx={{ color: '#000' }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
