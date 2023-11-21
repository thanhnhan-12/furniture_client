import { Box, Grid, Paper, Typography } from '@mui/material';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js/auto';
import React, { useEffect } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  optionsDoughnut,
  renderColors,
  renderdata,
} from '../../../utils/function';
import {
  bestSellingProducts,
  monthlyRevenueStatistics,
  userStatistics,
} from '../../../redux/admin/adminAction';
import Revenue from './revenue';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);

const labels = ['Members', 'Admin'];

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const {
    statistics: { userListStatistics, productListSelling, monthlyRevenue },
  } = useAppSelector((state) => state.admin);

  // console.log('Statistics: ', {
  //   userStatistics: userListStatistics,
  //   productSelling: productListSelling,
  //   monthlyRevenue: monthlyRevenue,
  // });

  useEffect(() => {
    dispatch(userStatistics());
    dispatch(bestSellingProducts());
    dispatch(monthlyRevenueStatistics());
  }, []);

  return (
    <Grid
      container
      direction="row"
      alignItems="stretch"
      rowSpacing={2}
      columnSpacing={2}
      my={2}
    >
      <Grid item xs={12} lg={5.5}>
        <Paper>
          <Doughnut
            options={optionsDoughnut('User Statistics')}
            data={renderdata({
              data: userListStatistics.map((item) => item.totalUsers),
              labels,
              colors: renderColors(userListStatistics.length),
              title: 'User Statistics',
              label: 'User',
            })}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} lg={11}>
        <Paper>
          <Line
            options={optionsDoughnut('Statistics of best-selling products')}
            data={renderdata({
              data: productListSelling.map((item) => item.totalSales),
              labels: productListSelling.map((item) => item.productName),
              colors: renderColors(productListSelling.length),
              title: 'Statistics of best-selling products',
              label: 'Quantity',
            })}
          />
        </Paper>
      </Grid>

      <Grid item lg={11}>
        <Revenue
          totalRevenue={monthlyRevenue.map((item) => item.totalRevenue)}
          totalDataMonth={monthlyRevenue.map((item) => item.month)}
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
