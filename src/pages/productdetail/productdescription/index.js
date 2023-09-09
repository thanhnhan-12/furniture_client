import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
// import classNames from 'classnames/bind';
import React, { useState } from 'react';
// import useStyles from './styles';

const ProductDescription = () => {
  // const cx = classNames.bind(useStyles());

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} sx={{}}>
        <Box
          sx={{
            borderColor: 'divider',
            '& > .MuiTabs-indicator': { backgroundColor: '#000 !important' },
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{ '& .MuiTabs-flexContainer ': { justifyContent: 'center' } }}
          >
            <Tab
              label="Description"
              value="1"
              sx={{
                fontSize: '2.4rem',
                fontWeight: '500',
                textTransform: 'capitalize',
                '&.Mui-selected': {
                  color: '#000 !important',
                },
                '& .Mui-selected': { color: '#9F9F9F !important' },
              }}
            />

            <Tab
              label="Additional Information"
              value="2"
              sx={{
                fontSize: '2.4rem',
                fontWeight: '500',
                textTransform: 'capitalize',
                '&.Mui-selected': {
                  color: '#000 !important',
                },
                '& .Mui-selected': { color: '#9F9F9F !important' },
              }}
            />

            <Tab
              label="Reviews [5]"
              value="3"
              sx={{
                fontSize: '2.4rem',
                fontWeight: '500',
                textTransform: 'capitalize',
                '&.Mui-selected': {
                  color: '#000 !important',
                },
                '& .Mui-selected': { color: '#9F9F9F !important' },
              }}
            />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{ fontSize: '1.6rem', textAlign: 'justify', color: '#9F9F9F' }}
        >
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </TabPanel>
        <TabPanel
          value="2"
          sx={{ fontSize: '1.6rem', textAlign: 'justify', color: '#9F9F9F' }}
        >
          Item Two
        </TabPanel>
        <TabPanel
          value="3"
          sx={{ fontSize: '1.6rem', textAlign: 'justify', color: '#9F9F9F' }}
        >
          Item Three
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ProductDescription;
