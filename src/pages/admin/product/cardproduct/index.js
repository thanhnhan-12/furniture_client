import { Box, Grid } from '@mui/material';
import React from 'react';
import useStyles from './styles';
import { formatPrice } from '../../../../constants/common';

const CardProduct = ({ cardProducts }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      columnSpacing={4}
      rowSpacing={4}
      sx={{
        marginTop: '32px',
      }}
    >
      {cardProducts.map((card, index) => (
        <Grid key={index} item xs={3} className={classes.productItemList}>
          <div>
            <img src={card.nameImage} alt="" className={classes.nameImage} />
            <div className={classes.productItemContent}>
              <h3 className={classes.productName}>{card.productName}</h3>
              <strong className={classes.price}>
                {formatPrice(Number(card.price))}
              </strong>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardProduct;
