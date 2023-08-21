import { Box } from '@mui/material';
import React from 'react';
import Setup1 from '../../../assets/images/Share/setup1.jpg';
import Setup2 from '../../../assets/images/Share/setup2.jpg';
import Setup3 from '../../../assets/images/Share/setup3.jpg';
import Setup4 from '../../../assets/images/Share/setup4.jpg';
import Setup5 from '../../../assets/images/Share/setup5.jpg';
import Setup6 from '../../../assets/images/Share/setup6.jpg';
import Setup7 from '../../../assets/images/Share/setup7.jpg';
import Setup8 from '../../../assets/images/Share/setup8.jpg';
import Setup9 from '../../../assets/images/Share/setup9.jpg';
import useStyles from './styles';

const Share = () => {
  const classes = useStyles();

  return (
    <div className={classes.share}>
      <div className={classes.shareSetUp}>
        <p className={classes.shareWith}>Share your setup with</p>
        <h2 className={classes.tag}>#FuniroFurniture</h2>
      </div>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'end',
              gap: '1.6rem',
            }}
          >
            <img src={Setup1} alt="" />
            <img src={Setup2} alt="" />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'start',
              gap: '1.6rem',
            }}
          >
            <img src={Setup3} alt="" />
            <img src={Setup4} alt="" />
          </Box>
        </Box>

        <div>
          <div>
            <img src={Setup5} alt="" />
          </div>
        </div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'end', gap: '1.6rem' }}>
            <img src={Setup6} alt="" />
            <img src={Setup7} alt="" />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'start',
              gap: '1.6rem',
            }}
          >
            <img src={Setup8} alt="" />
            <img src={Setup9} alt="" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Share;
