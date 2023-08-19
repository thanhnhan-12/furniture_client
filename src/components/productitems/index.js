import Grid from '@mui/material/Grid';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import ProductIconHeart from '../../assets/svg/productIconHeart.svg';

const ProductItems = ({ productList }) => {
  const classes = useStyles();

  return (
    <Grid container columnSpacing={4} rowSpacing={4} sx={{ marginTop: '32px' }}>
      {productList.map((list, index) => (
        <Grid key={index} item xs={3} className={classes.productItemList}>
          <div>
            <img src={list.nameImage} alt="" className={classes.nameImage} />
            <div className={classes.productItemContent}>
              <h3 className={classes.productName}>{list.productName}</h3>
              <p className={classes.description}>{list.description}</p>
              <strong className={classes.price}>{list.price}</strong>
            </div>
          </div>

          <div className={classes.productHover}>
            <div className={classes.displayFlex} >
              <div>
                <button className={classes.btnAddCart}>Add to cart</button>
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
