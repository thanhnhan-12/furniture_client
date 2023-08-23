import React, { useState } from 'react';
import classNames from 'classnames/bind';
import useStyles from './styles';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const productSize = [
  {
    sizeID: 1,
    value: 'L',
  },

  {
    sizeID: 2,
    value: 'XL',
  },

  {
    sizeID: 3,
    value: 'XS',
  },
];

const ProductDetails = () => {
  const cx = classNames.bind(useStyles());

  const [selectedSize, setSelectedSize] = useState(1);

  const [amount, setAmount] = useState(1);

  return (
    <div style={{ marginLeft: '10.6rem' }}>
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
        {productSize.map((item, i) => (
          <div
            className={cx('sizeCommon', `${item.sizeID === selectedSize && 'selected'}`)}
            onClick={() => setSelectedSize(item.sizeID)}
            key={i}
          >
            {item.value}
          </div>
        ))}
      </div>

      <div className={cx('btnCart')}>
        <div className={cx('btnAmount')}>
          <Button sx={{ p: '0', minWidth: '0' }}>
            <RemoveIcon sx={{ color: '#000' }} />
          </Button>

          <p className={cx('amount')}>{amount}</p>

          <Button sx={{ p: '0', minWidth: '0' }}>
            <AddIcon sx={{ color: '#000' }} />
          </Button>
        </div>

        <Button
          sx={{
            border: '1px solid #000',
            borderRadius: '1.5rem',
            p: '1.7rem 4.8rem',
            fontSize: '2rem',
            fontWeight: '400',
            color: '#000',
          }}
        >
          Add To Cart
        </Button>
      </div>

      <div className={cx('infor')}>
        <div className={cx('inforDetail')}>
          <span className={cx('text', 'txtName')}>SKU</span>
          <span className={cx('text')} style={{ marginRight: '1.2rem' }}>
            :
          </span>
          <span className={cx('text')}>SS001</span>
        </div>
        <div className={cx('inforDetail')} style={{ margin: '1.2rem 0' }}>
          <span className={cx('text', 'txtName')}>Category</span>
          <span className={cx('text')} style={{ marginRight: '1.2rem' }}>
            :
          </span>
          <span className={cx('text')}>Sofas</span>
        </div>
        <div className={cx('inforDetail')}>
          <span className={cx('text', 'txtName')}>Tags</span>
          <span className={cx('text')} style={{ marginRight: '1.2rem' }}>
            :
          </span>
          <span className={cx('text')}>Sofa, Chair, Home</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
