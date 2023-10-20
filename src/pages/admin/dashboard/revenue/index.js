import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { optionsDoughnut } from '../../../../utils/function';
import { formatPrice } from '../../../../constants/common';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const dataLine = ({ labels, data }) => {
  return {
    labels,
    datasets: [
      {
        label: 'Total Revenue',
        data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
};

const options = {
  scales: {
    y: {
      ticks: {
        callback: function (value: number) {
          return formatPrice(value);
        },
      },
    },
  },

  tooltips: {
    callbacks: {
      label: function (tooltipItem: any) {
        return formatPrice(tooltipItem.yLabel);
      },
    },
  },
};

const Revenue = ({ totalRevenue, totalDataMonth }) => {
  return (
    <Grid container columnSpacing={2}>
      <Grid item lg={5}>
        <Paper
          variant="elevation"
          sx={{
            borderRadius: 2,
            height: '100%',
          }}
        >
          <Box p={4}>
            <Typography
              sx={{
                pb: 3,
              }}
              variant="h4"
              fontWeight="600"
            >
              Revenue
            </Typography>

            <Box display="flex" alignItems="center" gap={2}>
              <Box>
                <CurrencyExchangeOutlinedIcon
                  sx={{
                    color: '#c3c306',
                  }}
                />
              </Box>
              <Typography variant="h5" gutterBottom>
                {formatPrice(Number(totalRevenue))}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={7}>
        <Paper
          sx={{
            borderRadius: 2,
          }}
        >
          <Line
            options={{
              ...optionsDoughnut('Monthly Revenue Statistics'),
              ...options,
            }}
            data={dataLine({
              labels: totalDataMonth.map((item) => item.month),
              data: totalRevenue.map((item) => item.totalRevenue),
            })}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Revenue;
