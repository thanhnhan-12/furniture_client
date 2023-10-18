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
} from 'chart.js';
import React from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  optionsDoughnut,
  renderColors,
  renderdata,
} from '../../../utils/function';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);

const labels = ['Admin', 'Members'];

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const userListStatistics = useAppSelector(
    (state) => state.admin.userListStatistics,
  );

  return (
    <Grid
      container
      direction="row"
      alignItems="stretch"
      rowSpacing={2}
      columnSpacing={2}
      my={2}
    >
      <Typography>Dashboard</Typography>

      <Grid item xs={12} lg={5.5}>
        <Paper>
          <Doughnut
            options={optionsDoughnut('User Statistics')}
            data={renderdata({
              data: userListStatistics.map((item) => item.totalUsers),
              labels,
              title: 'User Statistics',
              label: 'User',
            })}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
