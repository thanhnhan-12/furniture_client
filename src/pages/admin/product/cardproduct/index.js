import { Box, Grid, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { formatPrice } from '../../../../constants/common';
import { localPathImages } from '../../../../config';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import { getAllProduct } from '../../../../redux/product/productAction';
import { changeHomeFilter } from '../../../../redux/product/productSlice';
import PaginationProduct from '../../../../components/pagination';

const CardProduct = ({ cardProducts }) => {
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const {
    listData: { data, totalCurrentData, totalPage, totalData },
    payloadFilters,
  } = useAppSelector((state) => state.product);

  const handleOnChangePage = (page) => {
    const newFilters = {
      ...payloadFilters,
      page,
    };
    dispatch(changeHomeFilter(newFilters));
  };

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
            <img
              src={`${localPathImages}/${card.nameImage}`}
              alt=""
              className={classes.nameImage}
            />
            <div className={classes.productItemContent}>
              <h3 className={classes.productName}>{card.productName}</h3>
              <strong className={classes.price}>
                {formatPrice(Number(card.price))}
              </strong>
            </div>
          </div>
        </Grid>
      ))}

      {/* <PaginationProduct
        totalPage={totalPage}
        currentPage={payloadFilters.page}
        onChange={handleOnChangePage}
      /> */}
    </Grid>
  );
};

export default CardProduct;
