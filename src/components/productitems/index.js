import Grid from '@mui/material/Grid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductIconHeart from '../../assets/svg/productIconHeart.svg';
import { formatPrice } from '../../constants/common';
import useStyles from './styles';
import { useAppDispatch, useAppSelector } from '../../redux';
import { toast } from 'react-hot-toast';
import { addToCart } from '../../redux/cart/cartSlice';

const ProductItems = ({ productList }) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleAddToCart = (product) => {
    console.log('isAuthenticated:', isAuthenticated);
    if (!isAuthenticated) {
      // Người dùng chưa đăng nhập, hiển thị thông báo
      toast.error('Xin lỗi, bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.', {
        position: 'top-center',
        duration: 4000,
      });
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleNavigate = (productID) => {
    // console.log("ID: ", productID);
    navigate(`/product/${productID}`);
  };

  return (
    <Grid container columnSpacing={4} rowSpacing={4} sx={{ marginTop: '32px' }}>
      {productList.map((list, index) => (
        <Grid
          key={index}
          item
          xs={3}
          className={classes.productItemList}
          // onClick={() => handleNavigate(list.productID)}
        >
          <div>
            <img src={list.nameImage} alt="" className={classes.nameImage} />
            <div className={classes.productItemContent}>
              <h3 className={classes.productName}>{list.productName}</h3>
              <p className={classes.description}>{list.description}</p>
              <strong className={classes.price}>
                {formatPrice(Number(list.price))}
              </strong>
            </div>
          </div>

          <div className={classes.productHover}>
            <div className={classes.displayFlex}>
              <div>
                <button
                  className={classes.btnAddCart}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                <button className={classes.btnLike}>
                  <img src={ProductIconHeart} alt="" />
                  <span style={{ marginLeft: '8px' }}>Like</span>
                </button>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductItems;
