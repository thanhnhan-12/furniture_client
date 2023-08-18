import React from 'react';
import useStyles from './styles';
import Grid from '@mui/material/Grid';

const ProductItems = ({ productList }) => {
  const classes = useStyles();

  return (
    <Grid container columnSpacing={4} rowSpacing={4} >
      {productList.map((list, index) => (
        <Grid key={index} item xs={3} >
          <img src={list.img} alt="" className={classes.img} />
          <div className={classes.productItemContent}>
            <h3>{list.name}</h3>
            <p className={classes.des}>{list.des}</p>
            <strong>{list.price}</strong>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductItems;
