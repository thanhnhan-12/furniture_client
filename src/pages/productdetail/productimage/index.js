import React, { useState } from 'react';
import classNames from 'classnames/bind';
import useStyles from './styles';
import nameImage1 from '../../../assets/images/ProductImages/nameImage1.png';
import nameImage2 from '../../../assets/images/ProductImages/nameImage2.png';
import nameImage3 from '../../../assets/images/ProductImages/nameImage3.png';
import nameImage4 from '../../../assets/images/ProductImages/nameImage4.png';

const imagesList = [
  {
    imageID: 1,
    nameImage: nameImage1,
  },

  {
    imageID: 2,
    nameImage: nameImage2,
  },

  {
    imageID: 3,
    nameImage: nameImage3,
  },

  {
    imageID: 4,
    nameImage: nameImage4,
  },
];

const ProductImage = () => {
  const cx = classNames.bind(useStyles());

  const [index, setIndex] = useState(0);

  return (
    <div className={cx('allImg')}>
      <div className={cx('imgList')}>
        {imagesList.map((item, i) => (
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
            src={imagesList[index].nameImage}
            alt=""
            style={{ width: '48.1rem', height: '39.1rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
