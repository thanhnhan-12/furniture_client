import React, { useState } from 'react';
import classNames from 'classnames/bind';
import useStyles from './styles';

const ProductImage = ({ productImages }) => {
  const cx = classNames.bind(useStyles());

  const [index, setIndex] = useState(0);

  // console.log('Log', productImages);

  return (
    <div className={cx('allImg')}>
      <div className={cx('imgList')}>
        {productImages?.map((item, i) => (
          <div
            className={cx('img', 'imgItem', `${index === i && 'active'}`)}
            key={i}
            onClick={() => setIndex(i)}
          >
            <img
              src={item.nameImage}
              alt=""
              style={{ width: '8.3rem', height: '5.5rem' }}
            />
          </div>
        ))}
      </div>

      <div style={{ marginLeft: '2.8rem' }}>
        <div className={cx('img')}>
          <img
            src={productImages && productImages[index].nameImage}
            alt=""
            style={{ width: '48.1rem', height: '39.1rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
