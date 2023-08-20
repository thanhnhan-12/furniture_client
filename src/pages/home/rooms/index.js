import React from 'react';
import useStyles from './styles';
import { Box, Button, Grid } from '@mui/material';
import BedRoom from '../../../assets/images/BedRoom.jpg';
import Slide from './slide';
import LayoutContainer from '../../../components/layoutcontainer/layoutcontainer';

const Rooms = () => {
  const classes = useStyles();

  return (
    <Box className={classes.intro}>
      <LayoutContainer>
        <Grid sx={{ mt: '6.9rem' }} container columnSpacing={2}>
          <Grid item xs={3} sx={{ margin: 'auto' }}>
            <h1 className={classes.title}>50+ Beautiful rooms inspiration</h1>
            <p className={classes.desc}>
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <Button variant="outlined" className={classes.btnExplore}>
              Explore More
            </Button>
          </Grid>

          <Grid item xs={3}>
            <div>
              <img src={BedRoom} alt="" width="100%" />
            </div>

            <div className={classes.box}>
              <div className={classes.boxItem}>
                <span className={classes.categoryID}>01</span>
                <div className={classes.border}></div>
                <span className={classes.categoryName}>Bed Room</span>
              </div>
              <h2 className={classes.maxim}>Inner Peace</h2>
            </div>
          </Grid>

          <Grid item xs={6}>
            <Slide />
          </Grid>
        </Grid>
      </LayoutContainer>
    </Box>
  );
};

export default Rooms;
